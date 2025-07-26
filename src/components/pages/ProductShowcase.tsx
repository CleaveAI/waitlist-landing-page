'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { EvaluationAnimation } from '../helpers/EvaluationAnimation';
import { AuroraText } from '../magicui/aurora-text';

export const ProductShowcase: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[linear-gradient(88deg,rgba(93,0,255,0.15)_0.35%,rgba(93,0,255,0.05)_98.6%)] rounded-full px-6 py-2 mb-8 border border-purple-500/80 shadow-[0px_2px_10px_0px_rgba(93,0,255,0.15)]">
            <span className="text-sm text-purple-300 font-medium">
              Automated Prompt Optimization
            </span>
          </div>

          <h2 className="font-clash text-4xl md:text-5xl bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 bg-clip-text text-transparent mb-6 leading-tight max-w-3xl mx-auto">
            Let our{' '}
            <AuroraText
              className="inline-block"
              colors={['#7E57C2', '#FF4081', '#7E57C2']}
              speed={0.8}
            >
              Agents
            </AuroraText>{' '}
            Run Evals & Fix Your System Prompts
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Define test cases and let our AI agents automatically optimize your system prompts until
            all evaluation thresholds are met.
          </p>
        </div>

        <motion.div
          whileHover="animate"
          className="group relative isolate rounded-2xl overflow-hidden h-[400px]"
        >
          <div className="relative p-8 h-full">
            <div className="relative rounded-xl bg-transparent p-4 h-full flex items-center justify-center">
              <EvaluationAnimation className="mx-auto max-h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
