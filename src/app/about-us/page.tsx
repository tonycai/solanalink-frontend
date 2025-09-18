export const metadata = {
  title: "About Us — SolanaLink",
  description:
    "About SolanaLink: mission, vision, history, and leadership team.",
};

export default function AboutUsPage() {
  return (
    <main className="container mx-auto px-6 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark mb-4">
            About SolanaLink
          </h1>
          <p className="text-xl text-subtle-light dark:text-subtle-dark max-w-3xl mx-auto">
            Pioneering IT solutions with a steadfast commitment to corporate trust, technological expertise, and your success.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <h2 className="md:col-span-1 text-2xl font-bold text-primary">Our Mission</h2>
            <p className="md:col-span-4 text-lg leading-relaxed text-subtle-light dark:text-subtle-dark">
              At SolanaLink, our mission is to empower businesses with cutting-edge IT solutions that drive growth, enhance efficiency, and ensure security. We are committed to delivering exceptional service and building lasting partnerships with our clients.
            </p>
          </div>

          <hr className="border-border-light dark:border-border-dark" />

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <h2 className="md:col-span-1 text-2xl font-bold text-primary">Our Vision</h2>
            <p className="md:col-span-4 text-lg leading-relaxed text-subtle-light dark:text-subtle-dark">
              Our vision is to be the leading IT services provider, recognized for our innovative solutions, technical expertise, and unwavering commitment to client success. We strive to be a trusted advisor and strategic partner, helping businesses navigate the complexities of the digital landscape.
            </p>
          </div>

          <hr className="border-border-light dark:border-border-dark" />

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <h2 className="md:col-span-1 text-2xl font-bold text-primary">Our History</h2>
            <p className="md:col-span-4 text-lg leading-relaxed text-subtle-light dark:text-subtle-dark">
              Founded in 2015, SolanaLink has grown from a small startup to a trusted IT services provider. We have a proven track record of delivering successful projects across various industries, helping businesses achieve their goals through technology.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-subtle-light dark:text-subtle-dark mt-2">
              The experts guiding our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <img
                alt="Ethan Carter"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20 dark:ring-primary/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6fNKElW60zht66erTcPL8fUQ4iQJqf38utUOyoQ8_CDAqXIf_0EJmQ7D2p8Z0_rlM51uU28ftIIuusmBlQCLBQ9gTSuZRtjbPWE1sksNoCvJ2oxbe_NNJKxgUdo1HA9JI-YUJb_39EwewnI1JOaGHe2ynRMsCDZkT37_MPNrDcTsByeUXZvUESUZp2ev8BdUEq2ukaqcJBSxFs079ARPfZ7PC-sC_CqrKE0GpkVsObBgr1ijmCSWFsj564mF7C5m_QN9N76evOFA"
              />
              <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">
                Ethan Carter
              </h3>
              <p className="text-base text-primary font-medium">CEO</p>
            </div>

            <div className="text-center">
              <img
                alt="Olivia Bennett"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20 dark:ring-primary/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASDimOTriaJI6rDCXC-pdJ53oFMXJo53lcV-VhhvSLkNlcQmxgozVAPwEH4AxGo09KxdH9738Zs3dA3Sz6u5X85DRlj2Pn_qz8Rm57sPd3w47zig_-QBw9V9abggYXOgBPQsgBHJFaqcqGN9t85vYlB4jxsSu1miTtWfbjXjoJGWtnLYaeuEM1wBAFzBNSIk5m5IT8OqjZ3bBALv_7stfvHOERuij2oNOG2oPL_cUmgDfUuKo12sYd2bP7VqFbCPxK7ACmqekdyD8"
              />
              <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">
                Olivia Bennett
              </h3>
              <p className="text-base text-primary font-medium">CTO</p>
            </div>

            <div className="text-center">
              <img
                alt="Noah Thompson"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20 dark:ring-primary/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3z3l0JOYuq-E7e-5lufBogigWk8Yww-SsA2Ol3icbduNottT1vZ-4bVWZCfH-5DlupX9FUUdWBQ1fRCl0v1rvDI1USL-5s81_lSSXqjfKyoSAf20HS1VgbI29dTFdhmMaS-I3qw2r0UIpqnyzcQlA9QzVI1Laxs5uApKULUH2v3c9PynxDPFeuEI8vzvkFeLRblgpdJ3q7Z66JLuqsbfuVUNawFNY8kw8jEuDvbE8TftE1IO7aBPQvF_ZrbmM2TOQHPVN-0EwJE4"
              />
              <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">
                Noah Thompson
              </h3>
              <p className="text-base text-primary font-medium">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

