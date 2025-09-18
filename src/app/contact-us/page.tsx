export const metadata = {
  title: "Contact Us — SolanaLink",
  description: "Get in touch with SolanaLink (Tony) via social links.",
};

export default function ContactUsPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg dark:bg-background-dark/50">
        <div className="flex flex-col items-center gap-6 text-center">
          <img
            alt="Tony's headshot"
            className="h-32 w-32 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCteb0ETpCzdvnG1QFrRknG5IW20RWWFQphqAAwUhvaNspvm-vLysuD28_tifRlySS0pBxf4CdkOFDIsszPct5IG9ZcK8-V1uWVy3--T5RVVjnf95EXJaxsaN3WYC6a8f-hIhq4W7YEMa_HqYqGF-ZJAXUJt_O4Esdq5pR5x2VDhy5Fv6AhnUecnzar1TAxQBNpOS8JOdeWGel07qh0nfy60WSgS_krVzqHLKdxTX4txugwAuj-7HOkSBp5ELRiTvy4QKn4UlMfyVo"
          />
          <div>
            <h2 className="text-2xl font-bold text-background-dark dark:text-background-light">
              Tony
            </h2>
            <p className="text-base text-background-dark/60 dark:text-background-light/60">
              IT Consultant
            </p>
            <p className="text-base text-background-dark/60 dark:text-background-light/60">
              SolanaLink
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a
            className="flex flex-col items-center gap-2 rounded-lg bg-background-light p-4 transition-colors hover:bg-primary/10 dark:bg-background-dark dark:hover:bg-primary/20"
            href="https://line.me/ti/p/vsK4Bcw_Xm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-dark/5 dark:bg-background-light/5">
              <svg
                className="text-background-dark/80 dark:text-background-light/80"
                fill="currentColor"
                height="24"
                viewBox="0 0 256 256"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M128,24A104,104,0,0,0,24,128c0,42.23,25.29,78.84,62.1,95.71a8,8,0,0,0,10.15-5.32,106.56,106.56,0,0,1,6-28.87,48.1,48.1,0,0,0-13-1.52,40,40,0,0,1-32-38.48A40.71,40.71,0,0,1,96.53,88a38.4,38.4,0,0,1,28.62,13.62,39.31,39.31,0,0,1,13.62,28.62,39.69,39.69,0,0,1-1.39,11.23,8,8,0,0,0,2,7.31,8.1,8.1,0,0,0,4.9,2.46c21.84,0,38-19,38-19s12,47.88,12.56,50.4a8,8,0,0,0,8.3,7.11,8.2,8.2,0,0,0,7.11-8.3C206.13,196.2,232,151,232,128A104,104,0,0,0,128,24Zm-40,88a24,24,0,1,1,24-24A24,24,0,0,1,88,112Z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-background-dark dark:text-background-light">
              LINE
            </span>
          </a>

          <a
            className="flex flex-col items-center gap-2 rounded-lg bg-background-light p-4 transition-colors hover:bg-primary/10 dark:bg-background-dark dark:hover:bg-primary/20"
            href="https://twitter.com/TonyIronTokyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-dark/5 dark:bg-background-light/5">
              <svg
                className="text-background-dark/80 dark:text-background-light/80"
                fill="currentColor"
                height="24"
                viewBox="0 0 256 256"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-background-dark dark:text-background-light">
              Twitter
            </span>
          </a>

          <a
            className="flex flex-col items-center gap-2 rounded-lg bg-background-light p-4 transition-colors hover:bg-primary/10 dark:bg-background-dark dark:hover:bg-primary/20"
            href="https://www.linkedin.com/in/tony-iron-309920295/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-dark/5 dark:bg-background-light/5">
              <svg
                className="text-background-dark/80 dark:text-background-light/80"
                fill="currentColor"
                height="24"
                viewBox="0 0 256 256"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-background-dark dark:text-background-light">
              LinkedIn
            </span>
          </a>

          <a
            className="flex flex-col items-center gap-2 rounded-lg bg-background-light p-4 transition-colors hover:bg-primary/10 dark:bg-background-dark dark:hover:bg-primary/20"
            href="https://github.com/tonycai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-dark/5 dark:bg-background-light/5">
              <svg
                className="text-background-dark/80 dark:text-background-light/80"
                fill="currentColor"
                height="24"
                viewBox="0 0 256 256"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-background-dark dark:text-background-light">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

