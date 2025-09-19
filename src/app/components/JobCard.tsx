import { Role } from '@/data/careers';

interface JobCardProps {
  role: Role;
}

export default function JobCard({ role }: JobCardProps) {
  const formatSalary = (comp: Role['compensationRange']) => {
    if (comp.currency.includes('hour')) {
      return `$${comp.min}-${comp.max}/hour`;
    }
    const min = Math.floor(comp.min / 1000);
    const max = Math.floor(comp.max / 1000);
    return `$${min}k-${max}k ${comp.currency}`;
  };

  const getCategoryColor = (category: Role['category']) => {
    switch (category) {
      case 'technical':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'hybrid':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'non-technical':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getLevelBadge = (level: Role['level']) => {
    const colors = {
      junior: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      mid: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      senior: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      lead: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
    };
    return colors[level] || colors.mid;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {role.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role.department} • {role.location}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(role.category)}`}>
            {role.category}
          </span>
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getLevelBadge(role.level)}`}>
            {role.level}
          </span>
        </div>
      </div>

      {/* Compensation */}
      <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Compensation
          </span>
          <span className="text-sm font-bold text-primary">
            {formatSalary(role.compensationRange)}
          </span>
        </div>
        {(role.compensationRange.equity || role.compensationRange.tokens) && (
          <div className="flex gap-3 mt-2 text-xs text-gray-600 dark:text-gray-400">
            {role.compensationRange.equity && (
              <span>📊 {role.compensationRange.equity}</span>
            )}
            {role.compensationRange.tokens && (
              <span>🪙 Token allocation</span>
            )}
          </div>
        )}
      </div>

      {/* Key Responsibilities */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Key Responsibilities
        </h4>
        <ul className="space-y-1">
          {role.responsibilities.slice(0, 3).map((resp, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="line-clamp-1">{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Requirements
        </h4>
        <ul className="space-y-1">
          {role.requirements.slice(0, 2).map((req, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="line-clamp-1">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {role.technologies.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
          {role.technologies.length > 5 && (
            <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              +{role.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Type Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
          role.type === 'full-time' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
          role.type === 'contract' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
        }`}>
          {role.type === 'dao' ? 'DAO' : role.type.replace('-', ' ')}
        </span>

        {role.benefits && (
          <span className="text-xs text-gray-500 dark:text-gray-500">
            +{role.benefits.length} benefits
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm">
          Apply Now
        </button>
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-semibold text-sm">
          Save
        </button>
      </div>
    </div>
  );
}