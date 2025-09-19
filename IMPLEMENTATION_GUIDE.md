# Implementation Guide for Industries, Case Studies, and Careers Pages

## Overview

This guide provides step-by-step implementation instructions with code examples for creating the three placeholder pages based on the content design document.

## Phase 1: Data Structure Setup

### 1.1 Create Data Files

First, create data files to store the content extracted from research documents.

**Create `src/data/industries.ts`:**

```typescript
export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  keyPoints: string[];
  services: string[];
  stats?: {
    metric: string;
    value: string;
  }[];
  backgroundColor?: string;
}

export const industries: Industry[] = [
  {
    id: 'financial-services',
    title: 'Financial Services & Quantitative Trading',
    description: 'Leveraging AI algorithms for high-frequency trading and risk management',
    icon: '📈',
    keyPoints: [
      'High-frequency trading with 65,000+ TPS on Solana',
      'AI agents achieving up to 83% annualized returns',
      'Automated risk management systems',
      '86% win rates on algorithmic trades'
    ],
    services: [
      'Algorithmic trading system development',
      'DeFi protocol integration',
      'Smart contract-based derivatives',
      'Real-time risk analytics'
    ],
    stats: [
      { metric: 'Annual Returns', value: '83%' },
      { metric: 'Win Rate', value: '86.6%' }
    ],
    backgroundColor: 'from-blue-500/10 to-purple-500/10'
  },
  {
    id: 'defi',
    title: 'Decentralized Finance (DeFi)',
    description: 'Building the future of finance with autonomous, transparent protocols',
    icon: '💎',
    keyPoints: [
      'AI-powered yield optimization achieving 30%+ APY',
      'Automated liquidity management',
      'Cross-chain arbitrage systems',
      'Fraud detection with 99% accuracy'
    ],
    services: [
      'DeFi protocol development',
      'Yield optimization strategies',
      'Liquidity pool management',
      'Security auditing'
    ],
    stats: [
      { metric: 'APY Achieved', value: '30%+' },
      { metric: 'Fraud Detection', value: '99%' }
    ],
    backgroundColor: 'from-purple-500/10 to-pink-500/10'
  },
  // Add remaining industries...
];
```

**Create `src/data/caseStudies.ts`:**

```typescript
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'tickeron-ai-trading',
    title: 'AI-Powered Trading Platform',
    client: 'Tickeron',
    industry: 'Financial Services',
    challenge: 'Manual trading inefficiencies and emotional bias affecting returns',
    solution: 'Implemented AI-powered Financial Learning Models with automated trading using Bayesian optimization',
    results: [
      '83% annualized returns achieved',
      '86.6% win rate on ETF trades',
      '$26,392 profit on $100,000 balance',
      '127-390 day consistent performance'
    ],
    technologies: ['Python', 'Machine Learning', 'Bayesian Optimization', 'TensorFlow'],
    metrics: [
      { label: 'Annual Returns', value: '+83%', highlight: true },
      { label: 'Win Rate', value: '86.6%' },
      { label: 'Profit Generated', value: '$26,392' },
      { label: 'Performance Period', value: '390 days' }
    ],
    testimonial: {
      quote: 'The AI trading system has transformed our platform, delivering consistent returns that exceed traditional strategies.',
      author: 'Trading Team Lead',
      role: 'Tickeron'
    }
  },
  // Add remaining case studies...
];
```

**Create `src/data/careers.ts`:**

```typescript
export interface Role {
  id: string;
  title: string;
  category: 'technical' | 'hybrid' | 'non-technical';
  department: string;
  location: string;
  type: 'full-time' | 'contract' | 'dao';
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  compensationRange: {
    min: number;
    max: number;
    currency: string;
    includesTokens: boolean;
  };
  benefits?: string[];
}

export const openRoles: Role[] = [
  {
    id: 'ai-ml-engineer',
    title: 'AI/Machine Learning Engineer',
    category: 'technical',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    responsibilities: [
      'Develop and deploy AI models for blockchain applications',
      'Fine-tune LLMs for smart contract analysis',
      'Build autonomous trading agents',
      'Optimize model performance for on-chain execution'
    ],
    requirements: [
      'Python, TensorFlow/PyTorch expertise',
      'Strong mathematical modeling skills',
      'Experience with on-chain data',
      '3+ years in ML engineering'
    ],
    niceToHave: [
      'Solidity knowledge',
      'DeFi protocol experience',
      'Published research papers'
    ],
    compensationRange: {
      min: 150000,
      max: 300000,
      currency: 'USD',
      includesTokens: true
    }
  },
  // Add more roles...
];

export const skills = {
  technical: [
    { name: 'Python', level: 'Critical', roles: ['AI Engineer', 'Data Scientist'] },
    { name: 'Solidity', level: 'Critical', roles: ['Blockchain Developer', 'Smart Contract Auditor'] },
    { name: 'Rust', level: 'High', roles: ['Blockchain Developer', 'Decentralized AI Developer'] },
    // Add more skills...
  ],
  soft: [
    { name: 'Communication', description: 'Translate complex concepts to various audiences' },
    { name: 'Adaptability', description: 'Quick learning in fast-evolving technologies' },
    { name: 'Problem-Solving', description: 'Tackle complex challenges with limited precedents' },
    // Add more soft skills...
  ]
};
```

## Phase 2: Component Development

### 2.1 Industries Page Components

**Create `src/app/components/IndustryCard.tsx`:**

```typescript
'use client';

import { Industry } from '@/data/industries';

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 hover:shadow-xl transition-all duration-300">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${industry.backgroundColor || 'from-blue-500/5 to-purple-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{industry.icon}</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {industry.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {industry.description}
            </p>
          </div>
        </div>

        {/* Key Points */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Capabilities</h4>
          <ul className="space-y-2">
            {industry.keyPoints.slice(0, 3).map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-primary mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        {industry.stats && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {industry.stats.map((stat, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.metric}</div>
              </div>
            ))}
          </div>
        )}

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Services</h4>
          <div className="flex flex-wrap gap-2">
            {industry.services.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 2.2 Case Studies Page Components

**Create `src/app/components/CaseStudyCard.tsx`:**

```typescript
'use client';

import { CaseStudy } from '@/data/caseStudies';
import Link from 'next/link';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Header with Industry Tag */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {caseStudy.industry}
          </span>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
            <p className="font-semibold text-gray-900 dark:text-white">{caseStudy.client}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {caseStudy.title}
        </h3>
      </div>

      {/* Metrics Grid */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="grid grid-cols-2 gap-4">
          {caseStudy.metrics.slice(0, 4).map((metric, index) => (
            <div
              key={index}
              className={`text-center ${metric.highlight ? 'scale-105' : ''}`}
            >
              <div className={`text-2xl font-bold ${metric.highlight ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>
                {metric.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {caseStudy.challenge}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {caseStudy.solution}
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <Link
          href={`/case-studies/${caseStudy.id}`}
          className="text-primary font-medium hover:underline"
        >
          Read Full Case Study →
        </Link>
      </div>
    </div>
  );
}
```

### 2.3 Careers Page Components

**Create `src/app/components/JobCard.tsx`:**

```typescript
'use client';

import { Role } from '@/data/careers';
import Link from 'next/link';

interface JobCardProps {
  role: Role;
}

export default function JobCard({ role }: JobCardProps) {
  const formatSalary = (min: number, max: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US');
    return `${currency} ${formatter.format(min)} - ${formatter.format(max)}`;
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {role.title}
          </h3>
          <div className="flex gap-2 mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {role.department}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {role.location}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {role.type}
            </span>
          </div>
        </div>
        <span className={`px-3 py-1 text-xs rounded-full ${
          role.category === 'technical' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
          role.category === 'hybrid' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        }`}>
          {role.category}
        </span>
      </div>

      {/* Responsibilities */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Responsibilities</h4>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          {role.responsibilities.slice(0, 3).map((resp, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Compensation */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Compensation</p>
        <p className="text-lg font-bold text-primary">
          {formatSalary(role.compensationRange.min, role.compensationRange.max, role.compensationRange.currency)}
        </p>
        {role.compensationRange.includesTokens && (
          <p className="text-xs text-gray-500 dark:text-gray-400">+ Token/Equity compensation</p>
        )}
      </div>

      {/* CTA */}
      <Link
        href={`/careers/${role.id}`}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        View Details & Apply
      </Link>
    </div>
  );
}
```

## Phase 3: Page Implementation

### 3.1 Industries Page

**Update `src/app/industries/page.tsx`:**

```typescript
import type { Metadata } from 'next';
import { industries } from '@/data/industries';
import IndustryCard from '@/app/components/IndustryCard';

export const metadata: Metadata = {
  title: 'Industries We Transform | SolanaLink',
  description: 'Leveraging AI and blockchain to revolutionize finance, healthcare, supply chain, and more. See how SolanaLink transforms traditional sectors.',
};

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Industries We Transform
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Leveraging AI and Blockchain to Revolutionize Traditional Sectors
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-primary">6+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Industries Served</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-primary">83%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">ROI Achieved</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-primary">99%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Detection Accuracy</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold text-primary">92.8%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Cost Savings</div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {industries.map((industry) => (
          <IndustryCard key={industry.id} industry={industry} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
        <p className="text-lg mb-8 opacity-90">
          Let's discuss how AI and blockchain can revolutionize your business operations
        </p>
        <a
          href="/contact-us/"
          className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Schedule Consultation
        </a>
      </div>
    </div>
  );
}
```

### 3.2 Case Studies Page

**Update `src/app/case-studies/page.tsx`:**

```typescript
'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/app/components/CaseStudyCard';

// Note: In a real implementation, metadata would be exported from a server component
// For this example, we'll use client-side filtering

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'impact'>('recent');

  const industries = ['all', ...new Set(caseStudies.map(cs => cs.industry))];

  const filteredCaseStudies = caseStudies.filter(cs =>
    selectedIndustry === 'all' || cs.industry === selectedIndustry
  );

  const sortedCaseStudies = [...filteredCaseStudies].sort((a, b) => {
    if (sortBy === 'impact') {
      // Sort by the first metric value (assuming it's the most important)
      const aValue = parseFloat(a.metrics[0]?.value.replace(/[^0-9.-]/g, '') || '0');
      const bValue = parseFloat(b.metrics[0]?.value.replace(/[^0-9.-]/g, '') || '0');
      return bValue - aValue;
    }
    return 0; // Keep original order for 'recent'
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Success Stories That Define Innovation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Real-World Impact Through AI and Blockchain Integration
        </p>

        {/* Impact Stats */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
            83% ROI
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
            99% Accuracy
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
            92.8% Cost Savings
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
            2.2s Processing
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="flex gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 self-center">
            Industry:
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry === 'all' ? 'All Industries' : industry}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 self-center">
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'recent' | 'impact')}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="recent">Most Recent</option>
            <option value="impact">Highest Impact</option>
          </select>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sortedCaseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let's Build Your Success Story</h2>
        <p className="text-lg mb-8 opacity-90">
          Join industry leaders who have transformed their operations with our solutions
        </p>
        <a
          href="/contact-us/"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Start Your Project
        </a>
      </div>
    </div>
  );
}
```

### 3.3 Careers Page

**Update `src/app/careers/page.tsx`:**

```typescript
'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { openRoles, skills } from '@/data/careers';
import JobCard from '@/app/components/JobCard';

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'technical', 'hybrid', 'non-technical'];

  const filteredRoles = openRoles.filter(role =>
    selectedCategory === 'all' || role.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Build the Future at the AI-Blockchain Nexus
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Join pioneers shaping the next generation of decentralized intelligence
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#open-positions"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View Open Positions
          </a>
          <a
            href="#culture"
            className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Learn About Our Culture
          </a>
        </div>
      </div>

      {/* Why Join Section */}
      <div id="culture" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Why Join SolanaLink?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Market Opportunity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              $943B blockchain market by 2032 with asymmetric growth opportunities
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Innovation Culture</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Work on cutting-edge projects at the forefront of technology
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Competitive Compensation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              $150K-$350K salaries plus token/equity participation
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Remote First</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Work from anywhere with flexible arrangements
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Essential Skills We Value
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Technical Skills</h3>
            <div className="space-y-3">
              {skills.technical.slice(0, 5).map((skill, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <span className={`px-2 py-1 text-xs rounded ${
                    skill.level === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Soft Skills</h3>
            <div className="space-y-3">
              {skills.soft.map((skill, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-white mb-1">{skill.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Open Positions
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Roles' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <JobCard key={role.id} role={role} />
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Hiring Process
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {/* Process steps */}
            {[
              { step: 1, title: 'Submit Application', description: 'Resume, GitHub/Portfolio, On-chain credentials', time: '1 day' },
              { step: 2, title: 'Technical Assessment', description: 'Coding challenge and system design', time: '3-5 days' },
              { step: 3, title: 'Team Interviews', description: 'Technical deep dive and cultural fit', time: '1 week' },
              { step: 4, title: 'Offer & Onboarding', description: 'Competitive package and buddy system', time: '2 days' },
            ].map((item, index) => (
              <div key={index} className="relative flex items-start mb-8">
                <div className="absolute left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="ml-16">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  <span className="text-xs text-primary">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h2>
        <p className="text-lg mb-8 opacity-90">
          Join our team of innovators building at the intersection of AI and blockchain
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </a>
          <a
            href="#talent-network"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Join Talent Network
          </a>
        </div>
      </div>
    </div>
  );
}
```

## Phase 4: Testing

Create test files for the new components and pages:

**Create `src/__tests__/IndustryCard.test.tsx`:**

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import IndustryCard from '@/app/components/IndustryCard';
import { industries } from '@/data/industries';

describe('IndustryCard', () => {
  const testIndustry = industries[0];

  it('renders industry title and description', () => {
    render(<IndustryCard industry={testIndustry} />);

    expect(screen.getByText(testIndustry.title)).toBeInTheDocument();
    expect(screen.getByText(testIndustry.description)).toBeInTheDocument();
  });

  it('displays industry icon', () => {
    render(<IndustryCard industry={testIndustry} />);

    expect(screen.getByText(testIndustry.icon)).toBeInTheDocument();
  });

  it('shows key points', () => {
    render(<IndustryCard industry={testIndustry} />);

    testIndustry.keyPoints.slice(0, 3).forEach(point => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });

  it('displays stats when provided', () => {
    render(<IndustryCard industry={testIndustry} />);

    if (testIndustry.stats) {
      testIndustry.stats.forEach(stat => {
        expect(screen.getByText(stat.value)).toBeInTheDocument();
        expect(screen.getByText(stat.metric)).toBeInTheDocument();
      });
    }
  });
});
```

## Phase 5: Deployment Checklist

### Pre-deployment Tasks

1. **Data Validation**
   - [ ] Verify all statistics and metrics from research documents
   - [ ] Ensure case study permissions if using real client names
   - [ ] Update compensation ranges based on current market

2. **SEO Optimization**
   - [ ] Add meta descriptions for each page
   - [ ] Include structured data (JSON-LD) for job postings
   - [ ] Update sitemap.xml with new pages

3. **Performance Testing**
   - [ ] Run Lighthouse audit
   - [ ] Check bundle size impact
   - [ ] Test on mobile devices

4. **Accessibility**
   - [ ] ARIA labels for interactive elements
   - [ ] Keyboard navigation testing
   - [ ] Screen reader compatibility

5. **Content Review**
   - [ ] Legal review for claims and statistics
   - [ ] Grammar and spell check
   - [ ] Consistent tone and messaging

### Deployment Steps

```bash
# 1. Install dependencies
npm ci

# 2. Run tests
npm run test

# 3. Build and check for errors
npm run build

# 4. Preview locally
npx serve out

# 5. Deploy to production
# (Based on your deployment platform)
```

## Conclusion

This implementation guide provides a complete roadmap for transforming the placeholder pages into fully functional, content-rich sections of the SolanaLink website. The modular component structure allows for easy maintenance and updates as new content becomes available from the research documents.