'use client';

import { FC } from 'react';

const steps = [
  {
    number: '01',
    title: 'Upload Your Prompts',
    description: 'Import your existing prompts or create new ones using our intuitive editor.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI Agents Evaluate',
    description:
      'Our specialized AI agents test your prompts across diverse scenarios and edge cases.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get Detailed Insights',
    description:
      'Receive comprehensive performance metrics, failure analysis, and optimization suggestions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    number: '04',
    title: 'Deploy with Confidence',
    description:
      'Ship your best-performing prompts directly to production with our seamless integration.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export const HowItWorks: FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash text-landing-hero-heading mb-4 sm:mb-6">
            How it works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-landing-hero-subheading max-w-3xl mx-auto leading-relaxed">
            Our agent-driven evaluation process ensures your prompts perform optimally in real-world
            scenarios.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  {/* Step indicator */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center group-hover:border-custom-purple/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-custom-purple/20 to-custom-magenta/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-custom-purple group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-custom-purple to-custom-magenta rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{step.title}</h3>
                    <p className="text-sm sm:text-base text-landing-hero-subheading leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"></div>
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                Ready to optimize your prompts?
              </h3>
              <p className="text-sm sm:text-base text-landing-hero-subheading mb-6">
                Join the waitlist and be among the first to experience agent-driven prompt
                evaluation.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-custom-purple to-custom-magenta text-white font-medium rounded-lg hover:shadow-lg hover:shadow-custom-magenta/20 transition-all duration-300"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
