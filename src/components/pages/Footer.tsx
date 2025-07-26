'use client';

import { FC, useState } from 'react';

import Image from 'next/image';

export const Footer: FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to subscribe');
        }

        setIsSubmitted(true);
        setEmail('');

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to subscribe');
        setTimeout(() => {
          setError('');
        }, 3000);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-[rgba(126,87,194,0.08)] to-[rgba(255,64,129,0.04)] border-t border-[rgba(126,87,194,0.1)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logos/logo-no-bg.png"
                alt="Cleave Logo"
                width={32}
                height={32}
                className="w-12 h-12"
              />
              <span className="text-2xl font-clash text-white">Cleave</span>
            </div>
            <p className="text-sm sm:text-base text-landing-hero-subheading mb-6 max-w-sm ml-4">
              Perfect your prompts with agent-driven evaluation. Stop guessing, start optimizing.
            </p>
          </div>

          {/* Waitlist signup */}
          <div className="bg-gradient-to-br from-[rgba(126,87,194,0.05)] via-[rgba(255,64,129,0.03)] to-[rgba(126,87,194,0.05)] backdrop-blur-xl border border-[rgba(126,87,194,0.1)] rounded-2xl p-6 sm:p-8">
            <div className="relative">
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Join the Cleave Waitlist
                  </h3>
                  <p className="text-sm sm:text-base text-landing-hero-subheading">
                    Be the first to know when we launch and get early access to our prompt
                    engineering tools.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="flex items-center space-x-2 text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>You&apos;re on the waitlist!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full sm:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-custom-purple focus:ring-1 focus:ring-custom-purple/50 transition-all duration-300"
                      disabled={isLoading}
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-custom-purple to-custom-magenta text-white font-medium rounded-lg hover:shadow-lg hover:shadow-custom-magenta/20 transition-all duration-300 whitespace-nowrap flex items-center justify-center"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span className="flex items-center space-x-2">
                          <span>Join Waitlist</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                  </form>
                )}
                {error && <div className="text-sm text-red-400">{error}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[rgba(126,87,194,0.2)]">
          <p className="text-sm text-landing-hero-subheading text-center">
            © {new Date().getFullYear()} Cleave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
