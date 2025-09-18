export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-primary/20 dark:border-primary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-background-dark dark:text-background-light">SolanaLink</h2>
            <p className="mt-2 text-background-dark/70 dark:text-background-light/70">Corporate Trust & Technological Expertise.</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-background-dark dark:text-background-light">Sitemap</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <a className="text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors" href="/homepage/">Home</a>
              <a className="text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors" href="/our-services/">Services</a>
              <a className="text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors" href="/news-and-blog-list/">News &amp; Blog</a>
              <a className="text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors" href="/compliance-and-investigations/">Compliance &amp; Investigations</a>
              <a className="text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors" href="/about-us/">About Us</a>
              <a className="text-background-dark/80 dark:text-background-light/80 hover:text-primary dark:hover:text-primary transition-colors" href="/contact-us/">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-background-dark dark:text-background-light">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              <a className="p-2 rounded-full border border-background-dark/20 dark:border-background-light/20 text-background-dark/60 dark:text-background-light/60 transition-colors hover:text-white hover:bg-primary" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm49.19 113.46a80.39 80.39 0 0 1-13.62 19.34 50.62 50.62 0 0 1-11.45 9.77 8 8 0 0 1-8.24-13.92 35.8 35.8 0 0 0 8.09-6.89 64.67 64.67 0 0 0 10.87-15.17c-2.31 0-16.12-.22-16.12-.22a8 8 0 0 1-7.87-6.33 39.86 39.86 0 0 1-1.89-13.23c0-10.28 4.22-19.78 11.88-26.68a35.48 35.48 0 0 1 26.17-11.13c1.47 0 2.92.08 4.35.24a8 8 0 0 1 6.42 9.49 46.22 46.22 0 0 0-3.32 16.27c0 8.87 3.51 17.18 9.53 23.29a8 8 0 0 1-2.92 13.84Zm-94.88 40.59a8 8 0 0 1-11.15-5.38A75.48 75.48 0 0 1 68 152.1c-15.68 0-29.31-9.42-32.93-12.48a8 8 0 0 1-2.48-11.19c.7-1 4.59-6.38 12.59-6.38h11.23a8 8 0 0 1 7.89 6.2a15.24 15.24 0 0 0 4.67 8.13 14.33 14.33 0 0 0 9.25 4c10.46 0 19.2-11.41 19.2-28s-8.74-28-19.2-28a14.33 14.33 0 0 0-9.25 4 15.24 15.24 0 0 0-4.67 8.13 8 8 0 0 1-7.89 6.2H55.22a8 8 0 0 1-7.88-6.32c-1.46-6-1.07-16.23 3.2-26.33S68.12 60 87.23 60c23.58 0 42.77 20.09 42.77 44.8S108.45 156.4 82.31 178.05Z" />
                </svg>
              </a>
              <a className="p-2 rounded-full border border-background-dark/20 dark:border-background-light/20 text-background-dark/60 dark:text-background-light/60 transition-colors hover:text-white hover:bg-primary" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                </svg>
              </a>
              <a className="p-2 rounded-full border border-background-dark/20 dark:border-background-light/20 text-background-dark/60 dark:text-background-light/60 transition-colors hover:text-white hover:bg-primary" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </a>
              <a className="p-2 rounded-full border border-background-dark/20 dark:border-background-light/20 text-background-dark/60 dark:text-background-light/60 transition-colors hover:text-white hover:bg-primary" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background-dark/10 dark:border-background-light/10 pt-8 text-center text-sm text-background-dark/60 dark:text-background-light/60">
          <p>© 2024 SolanaLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
