import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 p-6">
        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300">
            {caseStudy.industry}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {caseStudy.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {caseStudy.client}
          </p>
        </div>
      </div>

      <div className="p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {caseStudy.metrics.slice(0, 2).map((metric, index) => (
            <div
              key={index}
              className={`text-center p-3 rounded-lg ${
                metric.highlight
                  ? 'bg-primary/10 dark:bg-primary/20'
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <div className={`text-2xl font-bold ${
                metric.highlight ? 'text-primary' : 'text-gray-900 dark:text-white'
              }`}>
                {metric.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Challenge
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Solution
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Key Results
          </h4>
          <ul className="space-y-1">
            {caseStudy.results.slice(0, 2).map((result, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="line-clamp-1">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-6">
          {caseStudy.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
          {caseStudy.technologies.length > 4 && (
            <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              +{caseStudy.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Testimonial (if available) */}
        {caseStudy.testimonial && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <blockquote className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
              "{caseStudy.testimonial.quote.slice(0, 100)}..."
            </blockquote>
            <cite className="text-xs text-gray-500 dark:text-gray-500 not-italic">
              — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
            </cite>
          </div>
        )}

        {/* CTA */}
        <button className="w-full mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm">
          Read Full Case Study
        </button>
      </div>
    </div>
  );
}