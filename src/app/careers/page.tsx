"use client";

import { useState } from 'react';
import { careers, careerCategories, marketContext } from '@/data/careers';
import JobCard from '@/app/components/JobCard';

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredCareers = careers.filter(role => {
    const categoryMatch = selectedCategory === 'all' || role.category === selectedCategory;
    const typeMatch = selectedType === 'all' || role.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <main className="container mx-auto px-6 py-16 lg:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark mb-4">
          Build the Future of AI & Blockchain
        </h1>
        <p className="text-xl text-subtle-light dark:text-subtle-dark max-w-3xl mx-auto mb-8">
          Join a team of innovators working at the intersection of artificial intelligence and blockchain technology.
          Shape the future of decentralized systems in a {marketContext.marketSize} market growing at {marketContext.growthRate}.
        </p>

        {/* Market Context Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{marketContext.openRoles}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Open Positions</div>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{marketContext.averageSalary}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Compensation</div>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{marketContext.remotePercentage}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Remote Roles</div>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{marketContext.growthRate}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Market Growth</div>
          </div>
        </div>
      </div>

      {/* Category Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {Object.entries(careerCategories).map(([key, category]) => (
          <div
            key={key}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedCategory(key)}
          >
            <span className="text-3xl mb-3 block">{category.icon}</span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {category.description}
            </p>
            <div className="mt-4 text-primary font-semibold">
              {careers.filter(r => r.category === key).length} positions →
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="flex gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 self-center">Category:</span>
          {['all', ...Object.keys(careerCategories)].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat === 'all' ? 'All' : cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 self-center">Type:</span>
          {['all', 'full-time', 'contract', 'dao'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === type
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {type === 'all' ? 'All' : type === 'dao' ? 'DAO' : type.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Job Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
        {filteredCareers.map((role) => (
          <JobCard key={role.id} role={role} />
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No positions match your current filters. Try adjusting your selection.
          </p>
        </div>
      )}

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Why Join SolanaLink?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              💡 Innovation First
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Work on cutting-edge AI and blockchain projects that push the boundaries of what's possible.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              🌍 Global Impact
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Build solutions that transform industries and create value for millions of users worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              🚀 Growth & Learning
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access to conferences, training, and mentorship from industry leaders in AI and Web3.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Don't See the Right Role?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to our mission.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit Your Resume
          </a>
          <a
            href="/about-us/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Learn About Our Culture
          </a>
        </div>
      </div>
    </main>
  );
}

