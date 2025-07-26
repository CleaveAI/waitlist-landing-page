'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { AuroraText } from '../magicui/aurora-text';

export const AudienceOverview: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-purple-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm text-purple-300 font-medium">Who It&apos;s For</span>
          </div>

          <h2 className="font-clash text-4xl md:text-5xl bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 bg-clip-text text-transparent mb-6 leading-tight max-w-3xl mx-auto">
            If you&apos;re deploying{' '}
            <AuroraText
              className="inline-block"
              colors={['#7E57C2', '#FF4081', '#7E57C2']}
              speed={0.8}
            >
              AI Agents
            </AuroraText>{' '}
            to production
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            From development to deployment, we ensure your AI agents perform reliably at any scale.
          </p>
        </div>
      </div>
    </section>
  );
};
