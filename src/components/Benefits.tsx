'use client';

import { FC } from 'react';

const benefits = [
  {
    metric: '10x',
    label: 'Faster Testing',
    description: 'Evaluate hundreds of prompt variations in minutes, not hours.',
  },
  {
    metric: '94%',
    label: 'Accuracy Improvement',
    description: 'Average performance boost across customer implementations.',
  },
  {
    metric: '60%',
    label: 'Time Saved',
    description: 'Reduce manual prompt engineering and testing overhead.',
  },
];

const painPoints = [
  {
    problem: 'Manual Testing',
    solution: 'Automated Evaluation',
    description: 'Stop manually testing every prompt variation across different scenarios.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    problem: 'Guesswork',
    solution: 'Data-Driven Decisions',
    description: 'Make confident choices backed by comprehensive performance metrics.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    problem: 'Slow Iterations',
    solution: 'Rapid Optimization',
    description: 'Iterate and improve prompts at scale with continuous feedback loops.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

export const Benefits: FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash text-landing-hero-heading mb-6 sm:mb-8">
            The results speak for themselves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8 text-center group hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-custom-purple to-custom-magenta bg-clip-text text-transparent mb-3">
                    {benefit.metric}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {benefit.label}
                  </div>
                  <p className="text-sm sm:text-base text-landing-hero-subheading">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problems vs Solutions */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash text-landing-hero-heading mb-4 sm:mb-6">
              Stop wasting time on
              <span className="block bg-gradient-to-r from-custom-purple to-custom-magenta bg-clip-text text-transparent">
                manual prompt testing
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-landing-hero-subheading max-w-3xl mx-auto leading-relaxed">
              Transform your prompt engineering workflow from reactive guesswork to proactive
              optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {painPoints.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-custom-purple/20 to-custom-magenta/20 border border-custom-purple/30 rounded-xl mb-6 text-custom-purple group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-red-400 text-sm font-medium bg-red-400/10 border border-red-400/20 rounded-full px-3 py-1">
                          {item.problem}
                        </span>
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        <span className="text-green-400 text-sm font-medium bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">
                          {item.solution}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-landing-hero-subheading leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Ready */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="flex items-center space-x-2 text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Enterprise SSO</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">99.9% Uptime</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-clash text-white mb-4">
                Built for teams that ship fast
              </h3>
              <p className="text-base sm:text-lg text-landing-hero-subheading mb-8 max-w-2xl mx-auto">
                From startups to Fortune 500 companies, Cleave scales with your needs while
                maintaining the highest security standards.
              </p>

              <a
                href="#enterprise"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-custom-purple to-custom-magenta text-white font-medium rounded-lg hover:shadow-lg hover:shadow-custom-magenta/20 transition-all duration-300"
              >
                Learn More About Enterprise
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
