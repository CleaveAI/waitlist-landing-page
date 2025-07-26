import { FC } from 'react';

import { Logo } from '@/components/helpers/Logo';
import { Features } from '@/components/pages/Features';
import { Footer } from '@/components/pages/Footer';
import { FrequentlyAskedQuestions } from '@/components/pages/FrequentlyAskedQuestions';
import { Hero } from '@/components/pages/Hero';
import { ProductShowcase } from '@/components/pages/ProductShowcase';
import { WorkflowChart } from '@/components/pages/WorkflowChart';

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
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(126,87,194,0.08)_0%,rgba(255,64,129,0.04)_50%,rgba(126,87,194,0)_80%)]" />

        <div className="relative space-y-8">
          <ProductShowcase />
          <WorkflowChart />
          <Features />
          <FrequentlyAskedQuestions />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
