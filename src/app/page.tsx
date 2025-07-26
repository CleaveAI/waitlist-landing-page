import { FC } from 'react';

import { Logo } from '@/components/helpers/Logo';
import { AudienceOverview } from '@/components/pages/AudienceOverview';
import { Features } from '@/components/pages/Features';
import { Footer } from '@/components/pages/Footer';
import { FrequentlyAskedQuestions } from '@/components/pages/FrequentlyAskedQuestions';
import { Hero } from '@/components/pages/Hero';
import { ProductShowcase } from '@/components/pages/ProductShowcase';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />
        </div>
      </div>

      <Hero />

      <div className="relative z-10">
        <ProductShowcase />
        <AudienceOverview />
        <Features />
        <FrequentlyAskedQuestions />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
