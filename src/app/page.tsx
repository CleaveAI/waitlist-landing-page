import { FC } from 'react';

import { Benefits } from '@/components/Benefits';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Navbar } from '@/components/Navbar';
import { Pricing } from '@/components/Pricing';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
