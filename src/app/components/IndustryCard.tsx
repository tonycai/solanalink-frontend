import { Industry } from '@/data/industries';

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
      {/* Background Gradient */}
      {industry.backgroundColor && (
        <div className={`absolute inset-0 bg-gradient-to-br ${industry.backgroundColor} opacity-50 group-hover:opacity-70 transition-opacity`} />
      )}

      <div className="relative p-8">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl" role="img" aria-label={industry.title}>
            {industry.icon}
          </span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {industry.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {industry.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        {industry.stats && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {industry.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.metric}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Points */}
        <div className="space-y-2 mb-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Key Capabilities
          </h4>
          <ul className="space-y-1">
            {industry.keyPoints.slice(0, 3).map((point, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Services Offered
          </h4>
          <div className="flex flex-wrap gap-2">
            {industry.services.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {service}
              </span>
            ))}
            {industry.services.length > 3 && (
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                +{industry.services.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Hover Effect - Learn More */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-primary font-semibold text-sm flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}