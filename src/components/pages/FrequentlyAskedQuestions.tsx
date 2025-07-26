'use client';

import { IconArrowRight } from '@tabler/icons-react';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const FAQs = [
  {
    question: 'What models does AI Assist leverage?',
    answer:
      'AI Assist uses state-of-the-art language models to provide accurate and helpful responses to your queries.',
  },
  {
    question: 'How does AI Assist use my data?',
    answer:
      'Your data is handled with strict security measures. Any information used to prompt AI Assist is shared with our AI provider solely for generating responses. Data is automatically deleted within 48 hours of a request.',
  },
  {
    question: "How accurate are AI Assist's responses?",
    answer:
      'AI Assist strives for high accuracy by leveraging advanced AI models and continuous improvements. However, we recommend verifying critical information from multiple sources.',
  },
  {
    question: 'How much does AI Assist cost?',
    answer:
      'We offer flexible pricing plans to suit different needs. Contact our sales team for detailed pricing information.',
  },
  {
    question: 'How do I get access to AI Assist?',
    answer:
      'You can sign up for AI Assist through our website. We offer both individual and enterprise access options.',
  },
];
export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,64,129,0.04)_0%,rgba(126,87,194,0.02)_80%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[linear-gradient(88deg,rgba(93,0,255,0.15)_0.35%,rgba(93,0,255,0.05)_98.6%)] rounded-full px-6 py-2 mb-8 border border-purple-500/80 shadow-[0px_2px_10px_0px_rgba(93,0,255,0.15)]">
            <span className="text-sm text-purple-300 font-medium">FAQ</span>
          </div>

          <h2 className="font-clash text-4xl md:text-5xl bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 bg-clip-text text-transparent mb-6 leading-tight max-w-3xl mx-auto">
            Let&apos;s Answer Your Questions
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Get answers to commonly asked questions about our AI-powered tools and services.
          </p>
        </div>
        <div className="mt-10 md:mt-20 max-w-3xl mx-auto divide-y divide-neutral-800">
          {FAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      className="cursor-pointer py-4 md:py-6"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12">
          <h3 className="text-base md:text-lg font-medium text-neutral-200">{question}</h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="overflow-hidden text-sm md:text-base text-neutral-400 mt-2"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-2 md:mr-4 mt-1 h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
          <motion.div
            animate={{
              scale: isOpen ? [0, 1] : [1, 0, 1],
              rotate: isOpen ? 90 : 0,
              marginLeft: isOpen ? '1.5rem' : '0rem',
            }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-white-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
