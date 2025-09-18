export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-semibold uppercase tracking-wider">Our Commitment</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Why Choose SolanaLink?
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We are dedicated to providing best-in-class IT services that empower your business to thrive in a digital-first world.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Proven Experience */}
        <div className="flex flex-col rounded-xl bg-white dark:bg-background-dark/50 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
          <div className="p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Proven Experience</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              With over a decade of experience, our seasoned team has a proven track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>

        {/* Innovative Solutions */}
        <div className="flex flex-col rounded-xl bg-white dark:bg-background-dark/50 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
          <div className="p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Innovative Solutions</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              We leverage cutting-edge technologies and innovative strategies to provide tailored IT solutions that solve your unique business challenges.
            </p>
          </div>
        </div>

        {/* Client-Centric Approach */}
        <div className="flex flex-col rounded-xl bg-white dark:bg-background-dark/50 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
          <div className="p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Client-Centric Approach</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Your success is our priority. We collaborate closely with you to understand your needs and deliver solutions that drive meaningful results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

