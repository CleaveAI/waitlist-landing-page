import { FC } from 'react';

import { Logo } from '@/components/helpers/Logo';
import { Benefits } from '@/components/pages/Benefits';
import { Features } from '@/components/pages/Features';
import { Footer } from '@/components/pages/Footer';
import { Hero } from '@/components/pages/Hero';
import { HowItWorks } from '@/components/pages/HowItWorks';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />
        </div>
      </div>
      <Hero />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
        <HowItWorks />
        <Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
