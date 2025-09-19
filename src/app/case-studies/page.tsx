"use client";

import { useState } from 'react';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/app/components/CaseStudyCard';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = ['all', ...new Set(caseStudies.map(cs => cs.industry))];

  const filteredCaseStudies = selectedIndustry === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <main className="container mx-auto px-6 py-16 lg:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark mb-4">
          Success Stories That Define Innovation
        </h1>
        <p className="text-xl text-subtle-light dark:text-subtle-dark max-w-3xl mx-auto mb-8">
          Real-world impact through AI and blockchain integration. Explore how we've helped organizations achieve
          transformative results with measurable ROI.
        </p>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">83%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Annual Returns</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">92.8%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">2.2s</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Processing Time</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedIndustry === industry
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {industry === 'all' ? 'All Industries' : industry}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredCaseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>

      {/* Success Metrics */}
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Our Impact by the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Industries Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">40+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Vulnerabilities Prevented</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">$10M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Value Generated</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Write Your Success Story?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve similar transformative results with our AI and blockchain solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact-us/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start Your Project
          </a>
          <a
            href="/industries/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Explore Industries
          </a>
        </div>
      </div>
    </main>
  );
}

