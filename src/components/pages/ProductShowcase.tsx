'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { EvaluationAnimation } from '../helpers/EvaluationAnimation';

export const ProductShowcase: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);

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
    <section ref={bannerRef} className="relative py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_70%)]"></div>

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

          <h2 className="font-clash text-4xl md:text-5xl bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 bg-clip-text text-transparent mb-8 leading-tight max-w-3xl mx-auto">
            Let our Agents Run Evals & Fix Your System Prompts
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Define test cases and let our AI agents automatically optimize your system prompts until
            all evaluation thresholds are met.
          </p>
        </div>

        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Simple container with subtle glass effect */}
          <div className="relative backdrop-blur-sm rounded-2xl bg-black/40 p-2">
            <EvaluationAnimation className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
