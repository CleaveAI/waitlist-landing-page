'use client';

import { IconArrowRight } from '@tabler/icons-react';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const FAQs = [
  {
    question: 'How does it work?',
    answer:
      'Our platform lets you manage your AI agent prompts through an easy-to-use dashboard and integrated SDK. Instead of hardcoding system prompts, your agents dynamically fetch them from our service. Our AI agent automatically tests different prompts against evaluation criteria using your custom and our built-in test cases—and iteratively refines them until your requirements are fully met and they&apos;re ready for production.',
  },
  {
    question: 'When is it coming out?',
    answer:
      'We are currently in the process of building the platform and will be launching in the next few months. We will be releasing a public beta in the next few weeks.',
  },
];
export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-clash text-4xl md:text-5xl bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 bg-clip-text text-transparent mb-6 leading-tight max-w-3xl mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Get answers to commonly asked questions about our platform.
          </p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-neutral-800">
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
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
