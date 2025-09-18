import type { ReactNode } from "react";

export const metadata = {
  title: "Our Services — SolanaLink",
  description:
    "Comprehensive IT services across cloud, e‑commerce, web, blockchain, and compliance/security.",
};

function Card({
  icon,
  title,
  description,
  items,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-background-dark/50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-border-light dark:border-border-dark ${className}`}
    >
      <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-3">
        {title}
      </h3>
      <p className="text-subtle-light dark:text-subtle-dark mb-4 text-sm">{description}</p>
      <ul className="space-y-2 text-sm text-subtle-light dark:text-subtle-dark">
        {items.map((item) => (
          <li key={item} className="flex items-start">
            <span className="mr-2 text-base" aria-hidden>
              {/* material check_circle */}
              <svg
                className="text-primary/80"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 8z" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OurServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground-light dark:text-foreground-dark sm:text-5xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-subtle-light dark:text-subtle-dark">
          SolanaLink offers a comprehensive suite of IT services designed to meet the evolving needs of modern businesses. From cloud computing to blockchain solutions, we provide the expertise and support you need to thrive in today's digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          }
          title="Cloud Computing"
          description="Scalable, secure, and cost-effective solutions to optimize your business operations."
          items={["Cloud Migration", "Infrastructure Management", "Monitoring & Optimization"]}
        />

        <Card
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.69c.75 0 1.41-.41 1.75-1.03L21.8 9.6a1 1 0 00-.9-1.47H6.21l-.94-2H1V8h3l3.6 7.59-1.35 2.45A2.003 2.003 0 008 20h10v-2H8.42c-.15 0-.29-.09-.35-.23l.99-1.77z" />
            </svg>
          }
          title="E-commerce"
          description="Robust storefronts and integrations to grow online revenue."
          items={[
            "Storefront Setup",
            "Payments & Logistics Integration",
            "SEO & Performance",
          ]}
        />

        <Card
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M20 18H4V8h16v10zM20 6H4V4h16v2z" />
            </svg>
          }
          title="Web Solutions"
          description="Custom web apps, CMS, and performance-focused sites."
          items={[
            "Custom Web Apps",
            "CMS & Editorial Workflows",
            "Performance & Accessibility",
          ]}
        />

        <Card
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M3 16h8v-2H3v2zm0 4h8v-2H3v2zM3 8v2h18V8H3zm12 10h6v-2h-6v2zm-6-8h12V8H9v2z" />
            </svg>
          }
          title="Blockchain"
          description="Secure, transparent, and decentralized solutions."
          items={[
            "Smart Contract Development",
            "Decentralized Apps (dApps)",
            "Cryptocurrency Integration",
          ]}
        />

        <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-border-light dark:border-border-dark lg:col-span-2">
          <div className="flex flex-col sm:flex-row">
            <div className="flex-shrink-0 flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-6 sm:mb-0 sm:mr-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 11.99l7-3.11V11c0 4.07-2.44 7.93-7 9.54-4.56-1.61-7-5.47-7-9.54V9.88l7 3.11z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-3">
                Compliance &amp; Security
              </h3>
              <p className="text-subtle-light dark:text-subtle-dark mb-4 text-sm">
                We ensure your IT infrastructure meets industry standards and regulations, protecting your data and maintaining trust.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-subtle-light dark:text-subtle-dark">
                {[
                  "Data Protection & Privacy",
                  "Regulatory Compliance",
                  "Cybersecurity Audits",
                  "Risk Management",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 text-base" aria-hidden>
                      <svg
                        className="text-primary/80"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 8z" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
