'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { AuroraText } from './magicui/aurora-text';
import { Button } from './ui/button';

const prompts = [
  'You are a helpful assistant.',
  'You are a customer support specialist.',
  'You are an expert support agent, providing empathetic and accurate responses.',
];

export const Hero: FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [currentScore, setCurrentScore] = useState(23);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  const [promptText, setPromptText] = useState('You are a helpful assistant.');
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const typeText = useCallback((text: string, callback?: () => void) => {
    setIsTyping(true);
    setTypingText('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setTypingText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        callback?.();
      }
    }, 30);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (animationStage === 0) {
      timer = setTimeout(() => {
        setIsOptimizing(true);
        setAnimationStage(1);
      }, 3000);
    } else if (animationStage === 1) {
      typeText(prompts[1], () => {
        setPromptText(prompts[1]);
        const scoreInterval = setInterval(() => {
          setCurrentScore((prev) => {
            if (prev < 67) {
              return prev + 2;
            }
            clearInterval(scoreInterval);
            timer = setTimeout(() => setAnimationStage(2), 1500); // Wait before next stage
            return 67;
          });
        }, 60);
      });
    } else if (animationStage === 2) {
      typeText(prompts[2], () => {
        setPromptText(prompts[2]);
        const scoreInterval = setInterval(() => {
          setCurrentScore((prev) => {
            if (prev < 98) {
              return prev + 1;
            }
            clearInterval(scoreInterval);
            setIsOptimizing(false);
            timer = setTimeout(() => {
              setAnimationStage(0);
              setCurrentScore(23);
              setPromptText(prompts[0]);
              setTypingText('');
            }, 4000);
            return 98;
          });
        }, 40);
      });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [animationStage, typeText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      console.log('Email submitted:', email);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 40) return 'from-red-500 to-red-600';
    if (score < 70) return 'from-yellow-500 to-orange-500';
    return 'from-green-500 to-emerald-500';
  };

  const getMetricStatus = (score: number, threshold: number) => {
    if (score > threshold) return 'bg-gradient-to-r from-green-400 to-emerald-500';
    if (score > threshold - 20) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    return 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl text-landing-hero-heading font-clash sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-tight">
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
            <p className="text-base sm:text-md md:text-lg lg:text-xl text-landing-hero-subheading max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 mb-8">
              Stop guessing which prompt works best. Version, evaluate, and ship your
              best-performing prompts with confidence.
            </p>
            <div className="h-96 sm:h-80 flex items-center justify-center">
              <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <div className="relative h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`text-3xl font-bold bg-gradient-to-r ${getScoreColor(currentScore)} bg-clip-text text-transparent transition-all duration-700`}
                        >
                          {currentScore}%
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">
                            Eval Score
                          </div>
                          {isOptimizing && (
                            <div className="flex items-center space-x-1 text-blue-400 mt-1">
                              <div className="w-2 h-2 border border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-xs font-medium">Optimizing</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="hidden sm:flex space-x-4">
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className={`w-8 h-1.5 rounded-full ${getMetricStatus(currentScore, 40)} transition-all duration-500`}
                          ></div>
                          <span className="text-xs text-gray-400">Accuracy</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className={`w-8 h-1.5 rounded-full ${getMetricStatus(currentScore, 67)} transition-all duration-500`}
                          ></div>
                          <span className="text-xs text-gray-400">Helpfulness</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className={`w-8 h-1.5 rounded-full ${getMetricStatus(currentScore, 90)} transition-all duration-500`}
                          ></div>
                          <span className="text-xs text-gray-400">Consistency</span>
                        </div>
                      </div>
                    </div>

                    {currentScore > 80 && (
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1 animate-fade-in">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-medium">Optimized</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-950/70 border border-gray-700/50 rounded-xl overflow-hidden flex-1 flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-700/50">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-400 ml-3">system_prompt.txt</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {isTyping ? 'Editing...' : 'Ready'}
                      </div>
                    </div>

                    <div className="p-4 font-mono text-sm h-full overflow-y-auto">
                      <div className="flex items-start space-x-3">
                        <div className="text-gray-500 text-xs pt-0.5">1</div>
                        <div className="flex-1 min-h-[20px]">
                          <span className="text-gray-300">
                            {isTyping ? typingText : promptText}
                            {(isTyping || isOptimizing) && (
                              <span className="inline-block w-0.5 h-4 bg-blue-400 ml-1 animate-pulse"></span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto px-2 sm:px-0">
            {isSubmitted ? (
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-6 mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <svg
                    className="w-6 h-6 flex-shrink-0 text-green-400"
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
                  <span className="font-semibold text-lg">You&apos;re on the waitlist!</span>
                </div>
                <p className="text-sm text-gray-300 mt-3 text-center">
                  We&apos;ll notify you when Cleave is ready for launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative mb-4 sm:mb-6">
                <div className="flex items-center justify-between rounded-md bg-gray-900/60 border border-gray-700/50 p-1.5 backdrop-blur-sm transition-all duration-300 focus-within:ring-1 focus-within:ring-custom-purple/50">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-[#8A7EAC] focus:outline-none sm:text-base"
                    required
                  />
                  <Button
                    type="submit"
                    className="whitespace-nowrap rounded-sm bg-gradient-to-r from-custom-purple to-custom-magenta px-6 py-2 text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-custom-magenta/20 sm:text-base"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
