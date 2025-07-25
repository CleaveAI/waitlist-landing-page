'use client';

import { FC, useState } from 'react';

import { AuroraText } from '../magicui/aurora-text';
import { Button } from '../ui/button';
import { Spotlight } from '../ui/spotlight-new';

export const Hero: FC = () => {
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
    <div className="relative w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full">
        <Spotlight />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <div className="mb-4 sm:mb-6 mt-20">
            <h1 className="text-landing-hero-heading font-clash text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-tight">
              Prompts perfected by{' '}
              <AuroraText
                className="block"
                colors={['#7E57C2', '#FF4081', '#7E57C2', '#FF4081', '#7E57C2', '#FF4081']}
                speed={0.8}
              >
                Agent-Driven
              </AuroraText>{' '}
              Evals
            </h1>
          </div>

          <div className="mb-6 sm:mb-8 lg:mb-10">
            <p className="text-base sm:text-sm md:text-lg lg:text-xl text-landing-hero-subheading max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 mb-8">
              Stop guessing which prompt works best. Version, evaluate, and ship your
              best-performing prompts with confidence.
            </p>
            <div className="max-w-lg mx-auto px-2 sm:px-0">
              {isSubmitted ? (
                <div className="animate-fade-in relative overflow-hidden bg-gradient-to-r from-custom-purple/10 to-custom-magenta/10 border border-white/10 rounded-2xl p-8 mb-4 sm:mb-6 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-purple/20 to-custom-magenta/20 blur-3xl" />
                  <div className="relative flex flex-col items-center justify-center text-white">
                    <div className="rounded-full bg-green-500/20 p-3 mb-4">
                      <svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="font-clash font-semibold text-xl mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      You&apos;re on the waitlist!
                    </h3>
                    <p className="text-sm text-gray-300 text-center">
                      We&apos;ll notify you when Cleave is ready for launch.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative mb-4 sm:mb-6">
                  <div className="group relative overflow-hidden rounded-2xl bg-black/20 border border-white/10 transition-all duration-300">
                    <div className="relative flex items-stretch">
                      <div className="flex-1">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full h-full bg-transparent px-6 py-4 text-base text-white placeholder-[#8A7EAC] focus:outline-none focus:placeholder-white/30 transition-colors duration-300"
                          required
                          disabled={isLoading}
                        />
                      </div>
                      <div className="">
                        <Button
                          type="submit"
                          className="h-full px-8 text-base font-medium text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-custom-purple to-custom-magenta rounded-r-xl rounded-l-none relative overflow-hidden group/button"
                          disabled={isLoading}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-custom-magenta to-custom-purple opacity-0 transition-opacity duration-500 ease-out group-hover/button:opacity-100" />
                          <div className="absolute inset-0 opacity-0 group-hover/button:opacity-20 bg-white/10 transition-opacity duration-300" />
                          <span className="relative z-10 flex items-center gap-2">
                            {isLoading ? (
                              <div className="flex items-center gap-2">
                                <svg
                                  className="animate-spin h-5 w-5 transition-all duration-300"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                <span className="animate-pulse">Joining...</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 transition-transform duration-300 group-hover/button:translate-x-1">
                                <span>Join Waitlist</span>
                                <svg
                                  className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1"
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
                              </div>
                            )}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  {error && (
                    <div className="animate-fade-in absolute -bottom-8 left-0 right-0 text-center text-sm font-medium text-red-400">
                      {error}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
