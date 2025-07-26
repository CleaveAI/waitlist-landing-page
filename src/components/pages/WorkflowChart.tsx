import { FC } from 'react';
import { FaCode, FaMagic } from 'react-icons/fa';
import { RiRobot2Line, RiTestTubeLine } from 'react-icons/ri';

const WorkflowStep = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="relative flex flex-col items-center">
    <div className="mb-6 text-purple-400">{icon}</div>
    <h3 className="text-lg font-medium mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-center text-sm max-w-xs">{description}</p>
  </div>
);

export const WorkflowChart: FC = () => {
  const steps = [
    {
      number: '1',
      icon: <FaCode className="w-8 h-8" />,
      title: 'Set Up Your Agent',
      description: 'Add your agent&apos;s endpoint URL and initial prompt in our dashboard.',
    },
    {
      number: '2',
      icon: <RiTestTubeLine className="w-8 h-8" />,
      title: 'Create Test Dataset',
      description: 'Choose categories and add test cases with expected outputs',
    },
    {
      number: '3',
      icon: <RiRobot2Line className="w-8 h-8" />,
      title: 'Run Evaluations',
      description: 'We optimize your prompt against your test cases',
    },
    {
      number: '4',
      icon: <FaMagic className="w-8 h-8" />,
      title: 'Version Your Prompts',
      description: 'Compare results and deploy improved prompts instantly',
    },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-clash text-4xl md:text-5xl bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 bg-clip-text text-transparent mb-6 leading-tight max-w-3xl mx-auto">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Optimize your AI agent&apos;s prompts automatically
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <WorkflowStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
