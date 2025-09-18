export const metadata = {
  title: "News & Blog — SolanaLink",
  description: "Latest insights, trends, and updates from SolanaLink.",
};

export default function NewsAndBlogListPage() {
  return (
    <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">News &amp; Blog</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Stay informed with the latest insights, trends, and updates from SolanaLink.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Article</h2>
          <div className="bg-background-light dark:bg-background-dark shadow-lg rounded-xl overflow-hidden @container">
            <div className="grid grid-cols-1 @xl:grid-cols-2">
              <div className="relative w-full aspect-[16/10]">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDte5yb8hoYUmvEI6-lEGKIUjzzunc-8UZtaT2GphJFk6gB_L5BsKuCU1y03JTlXttyC1r6PFKdeBYsgARoLqIB9Fo7_kRgiaCCE54jUmMc3-45-tG6ACf7XXzDFCO4dywa4mm6die6Ae9UxTDQBVFHFnVWYwT_HjklumHN6KTf1q5bDx3wf5rrrcs942xreBVJjaHT-7JfaghmjQUyq87LGkviiY83GmGijAP6L6dxR310tV6cB1tFJYQTlQZriYd6JR9N-3-kd8w")',
                  }}
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  The Future of Cloud Computing: Trends and Innovations
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Cloud computing continues to evolve at a rapid pace, transforming how businesses
                  operate and innovate. Explore the latest trends and innovations shaping the future
                  of the cloud.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    alt="Author avatar"
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3z3l0JOYuq-E7e-5lufBogigWk8Yww-SsA2Ol3icbduNottT1vZ-4bVWZCfH-5DlupX9FUUdWBQ1fRCl0v1rvDI1USL-5s81_lSSXqjfKyoSAf20HS1VgbI29dTFdhmMaS-I3qw2r0UIpqnyzcQlA9QzVI1Laxs5uApKULUH2v3c9PynxDPFeuEI8vzvkFeLRblgpdJ3q7Z66JLuqsbfuVUNawFNY8kw8jEuDvbE8TftE1IO7aBPQvF_ZrbmM2TOQHPVN-0EwJE4"
                  />
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 dark:text-white">Alex Turner</p>
                    <p className="text-gray-500 dark:text-gray-400">Jan 15, 2024 • 8 min read</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary/90"
                    href="/news-and-blog-list/future-of-cloud-computing/"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-md transition-shadow hover:shadow-xl dark:bg-background-dark">
              <img
                alt="Edge computing"
                className="h-48 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOz7WRxG0YHOwORIjAbFOhfZqzqzsMQ4N-xUE3qlV9ImHJe2FeC42HmJuc2YBHyqSxSnRWaoSKbmMZ9c0U9_pAAyrZxCOhQ0DvUJS-e0VQAFQIVnAmYBv9lfuofg-zImtlENGAttUMh3T8yt5yNJQGZ3PVsFTPYgPbHR8cvAWdS-gpw4PQdIw1UGn2qBI_a1Uqg3PpWPXkRRtJoRUANSbnbq64gdcxxr4UFfZqXO4ePcnw_iD47OLOo9HXiH3kFtCfbAYoL_7TRlw"
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">Cloud</p>
                  <a className="mt-2 block" href="/news-and-blog-list/edge-computing-and-distributed-systems/">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Edge Computing and Distributed Systems
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                      How edge computing is changing the landscape of data processing and real-time
                      applications.
                    </p>
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-md transition-shadow hover:shadow-xl dark:bg-background-dark">
              <img
                alt="E-commerce personalization"
                className="h-48 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm-1hpqcdNdbV4jikw_Ydtotz-eRxdJqQhN1Z9jwHJuejY8DyxNX_xxZCfNc6Y2G7euhuzdLGP2aarM_eWzBGZEDWJiMUCqIJi2rTvZq45lLWQuls6493E0KDvYMtfmRhYMChsFOYUS8bv_bcUGuMg0cXqC5WOskbzwwOuRIyYkOKOH85Tzi3TJFnmsZXEKqx7PRr9Aiqm_jkkw28m1cusrz_mPyh0HFSJbNfnjYXdK1fS8GDy22CN9mwNYnynQ-4oE7rdNxjwT0g"
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">E-commerce</p>
                  <a className="mt-2 block" href="/news-and-blog-list/personalization-strategies/">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Personalization Strategies to Increase Conversions
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                      Practical tactics for building personalized shopping experiences that drive
                      engagement and sales.
                    </p>
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article className="group flex flex-col overflow-hidden rounded-xl bg-background-light shadow-md transition-shadow hover:shadow-xl dark:bg-background-dark">
              <img
                alt="Security best practices"
                className="h-48 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gT52Q-hyAdlVXn8CJ7JUWm5x7EfX1fAPV2q1cQJmBeoJQUPKm9q_6g0oHQXYb0IcL4KCOaqyHzJtyvyk0BxyzQhyaHH9ARr5lOaYS0UfbF6B6w9BR0a1W2zGTbV5H1pQVLlRjQhqKCXS2rbqSMqMMfXOPg8nndRf0W2D5E9acsYieivl2WgD77GjjB6ZFZI_g3VQPeM78zq0ErbYfYw"
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">Security</p>
                  <a className="mt-2 block" href="/news-and-blog-list/cloud-security-2025/">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Best Practices for Cloud Security in 2025
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                      Key controls and operational measures to protect modern cloud environments.
                    </p>
                  </a>
                </div>
              </div>
            </article>
          </div>

          <nav className="mt-12 flex items-center justify-center gap-2">
            <a className="flex size-10 items-center justify-center rounded-full text-white bg-primary font-bold" href="#">
              1
            </a>
            <a className="flex size-10 items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" href="#">
              2
            </a>
            <a className="flex size-10 items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" href="#">
              3
            </a>
            <span className="flex size-10 items-center justify-center rounded-full text-gray-500 dark:text-gray-400">
              ...
            </span>
            <a className="flex size-10 items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" href="#">
              10
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              href="#"
              aria-label="Next page"
            >
              <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </main>
  );
}
