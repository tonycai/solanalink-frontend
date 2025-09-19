# Deployment Guide

## Table of Contents

1. [Overview](#overview)
2. [Build Process](#build-process)
3. [Deployment Platforms](#deployment-platforms)
   - [Vercel](#vercel)
   - [Netlify](#netlify)
   - [AWS S3 + CloudFront](#aws-s3--cloudfront)
   - [GitHub Pages](#github-pages)
   - [Docker](#docker)
   - [Traditional Hosting](#traditional-hosting)
4. [Environment Configuration](#environment-configuration)
5. [CI/CD Setup](#cicd-setup)
6. [Post-Deployment](#post-deployment)
7. [Rollback Procedures](#rollback-procedures)
8. [Monitoring](#monitoring)

## Overview

SolanaLink Frontend is a statically exported Next.js application that can be deployed to any static hosting service. The build process generates static HTML, CSS, and JavaScript files that can be served from a CDN or web server.

### Key Characteristics

- **No server runtime required**: Pure static files
- **CDN-friendly**: Cacheable assets
- **Fast deployment**: No server provisioning
- **Cost-effective**: Static hosting is typically cheaper
- **Highly scalable**: CDN handles traffic spikes

## Build Process

### Local Build

1. **Install dependencies**:
```bash
npm ci --production=false
```

2. **Run the build**:
```bash
npm run build
```

3. **Verify the output**:
```bash
ls -la out/
# Should see index.html, directories for each route, and _next/ folder
```

4. **Test locally**:
```bash
npx serve out
# Visit http://localhost:3000
```

### Build Output Structure

```
out/
├── _next/
│   ├── static/
│   │   ├── chunks/     # JavaScript bundles
│   │   ├── css/        # CSS files
│   │   └── media/      # Fonts and media
│   └── data/           # JSON data for pages
├── homepage/
│   └── index.html
├── our-services/
│   └── index.html
├── about-us/
│   └── index.html
├── contact-us/
│   └── index.html
├── compliance-and-investigations/
│   └── index.html
├── news-and-blog-list/
│   ├── index.html
│   └── [article-slugs]/
│       └── index.html
├── 404.html
├── index.html          # Root page (redirect)
├── robots.txt
├── sitemap.xml
└── solanalink-logo.png
```

## Deployment Platforms

### Vercel

Vercel is the company behind Next.js and offers seamless deployment.

#### Method 1: Git Integration

1. **Push code to GitHub/GitLab/Bitbucket**

2. **Import project in Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Configure:
     ```
     Framework Preset: Next.js
     Build Command: npm run build
     Output Directory: out
     ```

3. **Deploy**:
   - Click "Deploy"
   - Vercel automatically builds and deploys

#### Method 2: Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

3. **Follow prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy completes

#### Custom Domain

```bash
vercel domains add yourdomain.com
```

### Netlify

#### Method 1: Git Integration

1. **Connect repository**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your repository

2. **Configure build settings**:
   ```
   Build command: npm run build
   Publish directory: out
   ```

3. **Add environment variables** (if needed):
   - Settings > Environment variables
   - Add NEXT_PUBLIC_* variables

4. **Deploy**:
   - Click "Deploy site"

#### Method 2: Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build locally**:
```bash
npm run build
```

3. **Deploy**:
```bash
netlify deploy --prod --dir=out
```

#### netlify.toml Configuration

Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/"
  to = "/homepage/"
  status = 301
  force = true

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

### AWS S3 + CloudFront

#### Prerequisites

- AWS Account
- AWS CLI configured
- S3 bucket created
- CloudFront distribution (optional but recommended)

#### Step 1: Create S3 Bucket

```bash
# Create bucket
aws s3 mb s3://solanalink-frontend

# Enable static website hosting
aws s3 website s3://solanalink-frontend \
  --index-document index.html \
  --error-document 404.html
```

#### Step 2: Configure Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::solanalink-frontend/*"
    }
  ]
}
```

#### Step 3: Deploy Files

```bash
# Build the project
npm run build

# Sync to S3
aws s3 sync out/ s3://solanalink-frontend \
  --delete \
  --cache-control max-age=31536000

# Update HTML files with shorter cache
aws s3 cp out/ s3://solanalink-frontend \
  --recursive \
  --exclude "*" \
  --include "*.html" \
  --cache-control max-age=3600
```

#### Step 4: Setup CloudFront (Recommended)

1. **Create Distribution**:
```bash
aws cloudfront create-distribution \
  --origin-domain-name solanalink-frontend.s3.amazonaws.com \
  --default-root-object index.html
```

2. **Invalidate Cache** (after updates):
```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

#### Deployment Script

Create `scripts/deploy-aws.sh`:
```bash
#!/bin/bash
set -e

echo "Building application..."
npm run build

echo "Uploading to S3..."
aws s3 sync out/ s3://solanalink-frontend \
  --delete \
  --cache-control max-age=31536000

echo "Setting HTML cache headers..."
aws s3 cp out/ s3://solanalink-frontend \
  --recursive \
  --exclude "*" \
  --include "*.html" \
  --cache-control max-age=3600

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment complete!"
```

### GitHub Pages

#### Method 1: GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /solanalink-frontend

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

#### Method 2: Manual Deployment

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add deploy script** to `package.json`:
```json
{
  "scripts": {
    "deploy:gh-pages": "npm run build && gh-pages -d out"
  }
}
```

3. **Deploy**:
```bash
npm run deploy:gh-pages
```

### Docker

#### Production Dockerfile

Already configured in `Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf

Create `nginx.conf`:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript
               application/javascript application/json application/xml;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache HTML files for shorter period
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public, max-age=3600";
    }

    # Handle client-side routing
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # 404 page
    error_page 404 /404.html;
}
```

#### Deploy with Docker

1. **Build image**:
```bash
docker build -t solanalink-frontend .
```

2. **Run container**:
```bash
docker run -p 80:80 solanalink-frontend
```

3. **Deploy to Docker Hub**:
```bash
docker tag solanalink-frontend yourusername/solanalink-frontend:latest
docker push yourusername/solanalink-frontend:latest
```

4. **Deploy to cloud providers**:
   - **AWS ECS**: Use task definitions
   - **Google Cloud Run**: Deploy container directly
   - **Azure Container Instances**: Deploy from registry

### Traditional Hosting

For traditional web hosting (cPanel, FTP):

1. **Build locally**:
```bash
npm run build
```

2. **Upload via FTP**:
   - Connect to your hosting
   - Upload contents of `out/` folder
   - Ensure `.htaccess` for Apache or web.config for IIS

#### Apache .htaccess

Create `out/.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Handle trailing slashes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^([^/]+)/$ $1.html [L]

  # Redirect root to homepage
  RewriteRule ^$ /homepage/ [R=301,L]

  # Error document
  ErrorDocument 404 /404.html
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Environment Configuration

### Build-time Variables

Create `.env.production`:
```bash
# Public variables (exposed to browser)
NEXT_PUBLIC_API_URL=https://api.solanalink.com
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://solanalink.com
```

### Platform-specific Environment Variables

#### Vercel
- Dashboard > Settings > Environment Variables
- Add variables for Production/Preview/Development

#### Netlify
- Site Settings > Environment > Environment variables
- Add key-value pairs

#### AWS
Use AWS Systems Manager Parameter Store:
```bash
aws ssm put-parameter \
  --name /solanalink/api_url \
  --value "https://api.solanalink.com" \
  --type String
```

## CI/CD Setup

### GitHub Actions Complete Workflow

Create `.github/workflows/ci-cd.yml`:
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run tests
        run: npm run test:coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

      - name: Build application
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-output
          path: out/

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v4

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-output
          path: out/

      - name: Deploy to production
        run: |
          # Add deployment commands here
          echo "Deploying to production..."
```

### GitLab CI/CD

Create `.gitlab-ci.yml`:
```yaml
stages:
  - test
  - build
  - deploy

variables:
  NODE_VERSION: "20"

test:
  stage: test
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run lint
    - npm run test:coverage
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

build:
  stage: build
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - out/
    expire_in: 1 week

deploy:
  stage: deploy
  image: alpine
  only:
    - main
  script:
    - apk add --no-cache aws-cli
    - aws s3 sync out/ s3://$S3_BUCKET --delete
    - aws cloudfront create-invalidation --distribution-id $CF_DIST_ID --paths "/*"
```

## Post-Deployment

### Verification Checklist

1. **Functional Testing**:
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] Images display properly
   - [ ] Forms function (if applicable)
   - [ ] Blog posts render
   - [ ] 404 page works

2. **Performance Testing**:
```bash
# Lighthouse audit
npx lighthouse https://yourdomain.com --view

# WebPageTest
curl -X POST https://www.webpagetest.org/runtest.php \
  -d "url=https://yourdomain.com&k=YOUR_API_KEY"
```

3. **SEO Verification**:
   - [ ] Sitemap accessible
   - [ ] Robots.txt present
   - [ ] Meta tags correct
   - [ ] Open Graph tags working

4. **Security Headers**:
```bash
# Check security headers
curl -I https://yourdomain.com
```

### DNS Configuration

For custom domains:

1. **A Record** (for apex domain):
```
Type: A
Name: @
Value: IP_ADDRESS
```

2. **CNAME Record** (for subdomain):
```
Type: CNAME
Name: www
Value: your-deployment-url.com
```

3. **SSL Certificate**:
   - Most platforms provide free SSL
   - Verify HTTPS redirect works

## Rollback Procedures

### Vercel

```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]

# Or use dashboard for visual rollback
```

### Netlify

1. **Via Dashboard**:
   - Deploys tab
   - Select previous deployment
   - Click "Publish deploy"

2. **Via CLI**:
```bash
netlify rollback
```

### AWS S3

```bash
# Keep previous version before deployment
aws s3 sync s3://solanalink-frontend s3://solanalink-frontend-backup

# Rollback
aws s3 sync s3://solanalink-frontend-backup s3://solanalink-frontend --delete
```

### Docker

```bash
# Tag versions
docker tag solanalink-frontend:latest solanalink-frontend:v1.0.0
docker tag solanalink-frontend:latest solanalink-frontend:v1.0.1

# Rollback
docker run -p 80:80 solanalink-frontend:v1.0.0
```

## Monitoring

### Application Monitoring

#### Google Analytics

Add to `src/app/layout.tsx`:
```typescript
import Script from 'next/script';

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      {/* Rest of layout */}
    </html>
  );
}
```

#### Error Tracking (Sentry)

1. **Install Sentry**:
```bash
npm install @sentry/nextjs
```

2. **Configure**:
```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

### Uptime Monitoring

Services to consider:
- **Pingdom**: Uptime and performance
- **UptimeRobot**: Free uptime monitoring
- **StatusCake**: Website monitoring
- **New Relic**: Full stack monitoring

### Performance Monitoring

1. **Web Vitals**:
```typescript
// src/app/layout.tsx
export function reportWebVitals(metric: any) {
  console.log(metric);
  // Send to analytics
}
```

2. **CloudWatch** (for AWS):
```bash
aws cloudwatch put-metric-data \
  --namespace "SolanaLink/Frontend" \
  --metric-name "PageLoadTime" \
  --value 2.5
```

## Troubleshooting

### Common Deployment Issues

1. **Build Failures**:
   - Check Node.js version
   - Clear cache and rebuild
   - Verify environment variables

2. **404 Errors**:
   - Check trailing slash configuration
   - Verify routing rules
   - Ensure index.html in directories

3. **Missing Assets**:
   - Check build output
   - Verify file paths
   - Clear CDN cache

4. **CORS Issues**:
   - Configure proper headers
   - Check API endpoints
   - Verify allowed origins

### Debug Commands

```bash
# Verify build output
find out -type f -name "*.html" | head -20

# Check file sizes
du -sh out/*

# Test local server
npx serve out -l 3000

# Check for broken links
npx linkinator https://yourdomain.com
```

## Best Practices

1. **Use Preview Deployments**: Test changes before production
2. **Automate Everything**: CI/CD for consistency
3. **Monitor Performance**: Set up alerts for issues
4. **Document Changes**: Keep deployment logs
5. **Regular Backups**: Before major updates
6. **Security Scanning**: Regular vulnerability checks
7. **Load Testing**: Before major launches
8. **Rollback Plan**: Always have a way back

## Conclusion

This deployment guide covers the major platforms and scenarios for deploying the SolanaLink Frontend. Choose the platform that best fits your needs in terms of features, pricing, and team expertise. Remember to always test thoroughly in a staging environment before deploying to production.