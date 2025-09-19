import { industries } from '@/data/industries';
import IndustryCard from '@/app/components/IndustryCard';

export const metadata = {
  title: "Industries We Transform — SolanaLink",
  description: "Leveraging AI and blockchain to revolutionize finance, healthcare, supply chain, and technology sectors with measurable results.",
};

export default function IndustriesPage() {
  return (
    <main className="container mx-auto px-6 py-16 lg:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark mb-4">
          Industries We Transform
        </h1>
        <p className="text-xl text-subtle-light dark:text-subtle-dark max-w-3xl mx-auto mb-8">
          Leveraging AI and blockchain to revolutionize traditional sectors with proven results:
          <span className="font-semibold text-primary"> 83% ROI</span>,
          <span className="font-semibold text-primary"> 99% accuracy</span>,
          <span className="font-semibold text-primary"> 92.8% cost savings</span>.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Industries Served</div>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">$10M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Value Created</div>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {industries.map((industry) => (
          <IndustryCard key={industry.id} industry={industry} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Transform Your Industry?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Join industry leaders who are already leveraging our AI and blockchain expertise to drive innovation and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="/case-studies/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </main>
  );
}

