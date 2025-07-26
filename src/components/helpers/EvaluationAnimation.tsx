'use client';

import { FC, useCallback, useEffect, useState } from 'react';

const prompts = [
  'You are a helpful assistant.',
  'You are a customer support specialist.',
  'You are an expert support agent, providing empathetic and accurate responses.',
];

interface EvaluationAnimationProps {
  className?: string;
}

export const EvaluationAnimation: FC<EvaluationAnimationProps> = ({ className }) => {
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
    <div
      className={`relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl h-full ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-3 font-clash">
              <div
                className={`text-3xl font-clash bg-gradient-to-r ${getScoreColor(currentScore)} bg-clip-text text-transparent transition-all duration-700`}
              >
                {currentScore}%
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Eval Score</div>
                {isOptimizing && (
                  <div className="flex items-center space-x-1 text-blue-400 mt-1">
                    <div className="w-2 h-2 border border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-medium">Optimizing</span>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden sm:flex space-x-4 font-clash">
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
              <span className="text-xs text-green-400 font-medium font-clash">Optimized</span>
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
            <div className="text-xs text-gray-500">{isTyping ? 'Editing...' : 'Ready'}</div>
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
  );
};
