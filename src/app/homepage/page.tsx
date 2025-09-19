import Script from "next/script";

export const metadata = {
  title: "SolanaLink — Homepage",
  description:
    "End-to-end services across cloud, e‑commerce, web, blockchain, and compliance.",
  alternates: { canonical: "/homepage/" },
};

import ClientTestimonials from "../components/ClientTestimonials";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Homepage() {
  return (
    <main>
      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SolanaLink",
          url: "https://solanalink.example.com/",
          logo: "https://solanalink.example.com/solanalink-logo.png",
          sameAs: [
            "https://twitter.com/TonyIronTokyo",
            "https://www.linkedin.com/in/tony-iron-309920295/",
            "https://github.com/tonycai",
          ],
        })}
      </Script>
      <section className="flex items-center justify-center py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="relative">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-gray-50 sm:text-5xl xl:text-6xl/none">
                    End-to-end services across cloud, e-commerce, web, blockchain, and compliance.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    We provide comprehensive IT solutions tailored to your business needs, ensuring seamless integration and optimal performance across all platforms.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="/contact-us/"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUTtnPdaNwPSXYLWiaM_sVRcLzA-gN4P8Kf5rJpiMzpy0HL-DSV2zG5RpAyvp7VGmueRUgowXWJI1r5R1OWn49wMWg8eQ0DVzjiz5g9v3No_hvxYq0pLlM4gr2nUxMNsqH9JXm3FrAQ8tfVZUvhbBU6YESHmzwmQkdVOGDE_hleOwVMBNQ45Gia__zkQRZoVPX7HC6vNEeHCO6oVhdnNxvRyeRdHW4SKYd6BwoCortWoAmuLd_CF54mp8wtQCt-w0rotfIL1tWEyI"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-xl bg-blue-500/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ClientTestimonials />
    </main>
  );
}
