'use client';

import { FC } from 'react';

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for individual developers and small teams',
    price: 'Free',
    period: '',
    features: [
      '100 prompt evaluations/month',
      'Basic performance metrics',
      'Standard AI agents',
      'Community support',
      'Web dashboard',
    ],
    cta: 'Join Waitlist',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing teams and serious prompt engineering',
    price: '$49',
    period: '/month',
    features: [
      '10,000 prompt evaluations/month',
      'Advanced analytics & insights',
      'Custom evaluation agents',
      'A/B testing framework',
      'API access & SDKs',
      'Priority support',
      'Version control & rollbacks',
    ],
    cta: 'Join Waitlist',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large teams with custom requirements',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited evaluations',
      'Custom agent training',
      'SOC 2 compliance',
      'SSO & advanced security',
      'Dedicated success manager',
      'Custom integrations',
      'SLA guarantees',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const Pricing: FC = () => {
  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-clash text-landing-hero-heading mb-4 sm:mb-6">
            Choose your plan
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-landing-hero-subheading max-w-3xl mx-auto leading-relaxed mb-8">
            Start with our free tier and scale as your prompt optimization needs grow.
          </p>

          {/* Launch announcement */}
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-custom-purple/20 to-custom-magenta/20 border border-custom-purple/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-custom-purple rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-custom-purple">
              Early access pricing - Save 50% for the first 6 months
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative group ${
                tier.popular
                  ? 'bg-gradient-to-br from-gray-800/90 via-gray-700/70 to-gray-800/90 border-2 border-custom-purple/50'
                  : 'bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/50'
              } backdrop-blur-xl rounded-2xl p-6 sm:p-8 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:-translate-y-1`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-custom-purple to-custom-magenta text-white text-sm font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm sm:text-base text-landing-hero-subheading mb-4">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-custom-purple to-custom-magenta bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-lg text-landing-hero-subheading">{tier.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-custom-purple mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm sm:text-base text-landing-hero-subheading">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-custom-purple to-custom-magenta text-white hover:shadow-lg hover:shadow-custom-magenta/20'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"></div>
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Questions about pricing?
              </h3>
              <p className="text-sm sm:text-base text-landing-hero-subheading mb-6">
                We&#39;re here to help you choose the right plan for your team&#39;s needs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-custom-purple to-custom-magenta text-white font-medium rounded-lg hover:shadow-lg hover:shadow-custom-magenta/20 transition-all duration-300"
                >
                  Schedule a Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
