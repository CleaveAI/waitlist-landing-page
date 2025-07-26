'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { EvaluationAnimation } from '../helpers/EvaluationAnimation';
import { GlowingEffect } from '../ui/glowing-effect';

export const ProductShowcase: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.9, ease: 'easeOut' }}
      ref={containerRef}
      className="relative mx-auto w-full max-w-7xl p-2 md:p-4"
    >
      <div className="rounded-[50px] relative">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={5}
          blur={10}
        />
        <section ref={bannerRef} className="relative py-28 overflow-hidden">
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_70%)]"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-purple-500/20 rounded-full px-4 py-1.5 mb-8">
                <span className="text-sm text-purple-300 font-medium">
                  Automated Prompt Optimization
                </span>
              </div>

              <h2
                className={cn(
                  'font-clash text-4xl md:text-5xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent mb-8 leading-tight max-w-3xl mx-auto'
                )}
              >
                Let our Agents Run Evals & Fix Your System Prompts
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                Define test cases and let our AI agents automatically optimize your system prompts
                until all evaluation thresholds are met.
              </p>
            </div>

            <div
              className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Simple container with subtle glass effect */}
              <div className="relative backdrop-blur-sm rounded-2xl bg-neutral-900/40 p-2">
                <EvaluationAnimation className="mx-auto" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
