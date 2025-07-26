'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

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
  const [version, setVersion] = useState(1);
  const [showDiff, setShowDiff] = useState(false);
  const [previousPrompt, setPreviousPrompt] = useState('');
  const [versionHighlight, setVersionHighlight] = useState(false);

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
        setPreviousPrompt(prompts[0]);
        setShowDiff(true);
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
            setPreviousPrompt(prompts[1]);
            timer = setTimeout(() => setAnimationStage(2), 1500);
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
            // Increment version to 2 and highlight it when optimized
            setVersion(2);
            setVersionHighlight(true);
            timer = setTimeout(() => {
              timer = setTimeout(() => {
                setAnimationStage(0);
                setCurrentScore(23);
                setPromptText(prompts[0]);
                setTypingText('');
                setVersion(1);
                setVersionHighlight(false);
                setPreviousPrompt('');
                setShowDiff(false);
              }, 4000);
            }, 1000); // Add delay before reset to show the version highlight
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
    if (score < 40) return 'from-red-400/80 to-red-500/80';
    if (score < 70) return 'from-amber-400/80 to-orange-500/80';
    return 'from-emerald-400/80 to-teal-500/80';
  };

  const getMetricStatus = (score: number, threshold: number) => {
    if (score > threshold) return 'bg-gradient-to-r from-emerald-400/80 to-teal-500/80';
    if (score > threshold - 20) return 'bg-gradient-to-r from-amber-400/80 to-orange-500/80';
    return 'bg-gradient-to-r from-red-400/80 to-red-500/80';
  };

  return (
    <div
      className={cn(
        'relative bg-gradient-to-br from-neutral-950/90 via-neutral-900/80 to-neutral-950/90 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl h-full',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-neutral-300/5 to-white/5 rounded-3xl blur-xl"></div>
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-3 font-clash">
              <div
                className={cn(
                  'text-3xl font-clash bg-gradient-to-r bg-clip-text text-transparent transition-all duration-700',
                  getScoreColor(currentScore)
                )}
              >
                {currentScore}%
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Eval Score</div>
                {isOptimizing && (
                  <div className="flex items-center space-x-1 text-neutral-200 mt-1">
                    <div className="w-2 h-2 border border-neutral-200 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-medium">Optimizing</span>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden sm:flex space-x-4 font-clash">
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={cn(
                    'w-8 h-1.5 rounded-full transition-all duration-500',
                    getMetricStatus(currentScore, 40)
                  )}
                ></div>
                <span className="text-xs text-neutral-400">Accuracy</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={cn(
                    'w-8 h-1.5 rounded-full transition-all duration-500',
                    getMetricStatus(currentScore, 67)
                  )}
                ></div>
                <span className="text-xs text-neutral-400">Helpfulness</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={cn(
                    'w-8 h-1.5 rounded-full transition-all duration-500',
                    getMetricStatus(currentScore, 90)
                  )}
                ></div>
                <span className="text-xs text-neutral-400">Consistency</span>
              </div>
            </div>
          </div>

          {currentScore > 80 && (
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-3 py-1 animate-fade-in">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-400 font-medium font-clash">Optimized</span>
            </div>
          )}
        </div>

        <div className="bg-neutral-950/90 border border-neutral-800/50 rounded-xl overflow-hidden flex-1 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-900/50 border-b border-neutral-800/50">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="text-xs text-neutral-300 ml-3">system_prompt.txt</span>
              <span
                className={cn(
                  'text-xs px-1.5 py-0.5 rounded-md text-neutral-300 font-mono transition-all duration-300',
                  versionHighlight ? 'bg-emerald-500/30 text-emerald-300' : 'bg-neutral-800/50'
                )}
              >
                v{version}
              </span>
            </div>
            <div className="text-xs text-neutral-400">{isTyping ? 'Editing...' : 'Ready'}</div>
          </div>

          <div className="p-4 font-mono text-sm h-full overflow-y-auto">
            {showDiff && previousPrompt && (
              <div className="flex items-start space-x-3 mb-4 opacity-50">
                <div className="text-neutral-400 text-xs pt-0.5">-</div>
                <div className="flex-1 min-h-[20px]">
                  <span className="text-red-400/80 line-through">{previousPrompt}</span>
                </div>
              </div>
            )}
            <div className="flex items-start space-x-3">
              <div className="text-neutral-400 text-xs pt-0.5">+</div>
              <div className="flex-1 min-h-[20px]">
                <span className={cn('text-neutral-200', showDiff && 'text-emerald-400/80')}>
                  {isTyping ? typingText : promptText}
                  {(isTyping || isOptimizing) && (
                    <span className="inline-block w-0.5 h-4 bg-neutral-200 ml-1 animate-pulse"></span>
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
