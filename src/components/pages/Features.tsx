'use client';

import {
  IconBrain,
  IconChartLine,
  IconRocket,
  IconSettings,
  IconTarget,
  IconTestPipe,
  IconTrendingUp,
} from '@tabler/icons-react';

import React, { type FC, useEffect, useMemo, useState } from 'react';
import { AiOutlineOpenAI } from 'react-icons/ai';
import { RiClaudeLine } from 'react-icons/ri';
import { SiGooglegemini, SiOllama } from 'react-icons/si';

import DottedMap from 'dotted-map';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { GlowingEffect } from '../ui/glowing-effect';

const MistralIcon = ({ className }: { className?: string }) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height="1em"
    style={{ flex: 'none', lineHeight: 1 }}
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>Mistral</title>
    <path
      clipRule="evenodd"
      d="M3.428 3.4h3.429v3.428h3.429v3.429h-.002 3.431V6.828h3.427V3.4h3.43v13.714H24v3.429H13.714v-3.428h-3.428v-3.429h-3.43v3.428h3.43v3.429H0v-3.429h3.428V3.4zm10.286 13.715h3.428v-3.429h-3.427v3.429z"
    ></path>
  </svg>
);

export const Features: FC = () => {
  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-clash text-4xl md:text-5xl bg-gradient-to-r from-gray-100 via-purple-100 to-gray-100 bg-clip-text text-transparent mb-6 leading-tight max-w-3xl mx-auto">
            Features & Benefits
          </h2>
        </div>

        <div className="grid cols-1 lg:grid-cols-5 gap-4 auto-rows-[25rem] max-w-3xl mx-auto lg:max-w-none">
          {/* Centralized Prompt Management */}
          <Card className="flex flex-col relative justify-between lg:col-span-2">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4">
              <PromptOrbit />
            </div>
            <CardContent className="h-40 absolute bottom-6">
              <CardTitle>
                Centralized <br /> Prompt Management
              </CardTitle>
              <CardDescription>
                Host, version, and manage prompts for all agents in one secure location. Streamline
                your AI operations with centralized control.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Iterative Prompt Optimization */}
          <Card className="flex flex-col justify-between lg:col-span-3">
            <CardContent className="h-40">
              <CardTitle>
                Iterative Prompt <br /> Optimization
              </CardTitle>
              <CardDescription>
                Improve agent prompts through an automated feedback loop based on output evaluation.
                Our objective scoring system ensures consistent and comparable performance metrics.
              </CardDescription>
            </CardContent>
            <CardSkeletonBody>
              <div className="w-full h-full p-4 rounded-lg px-10 mt-6">
                <OptimizationStack items={OPTIMIZATION_CARDS} />
              </div>
            </CardSkeletonBody>
          </Card>

          {/* Production Analytics */}
          <Card className="flex flex-col relative justify-between lg:col-span-3">
            <h1
              className={cn(
                'inline-block text-right absolute top-0 right-0 p-6 text-xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent'
              )}
            >
              Real-time
              <br />
              Analytics
            </h1>
            <CardSkeletonBody>
              <div className="relative flex h-[300px] w-full flex-col items-start top-20 md:top-10 overflow-hidden rounded-lg bg-background md:shadow-xl">
                <AnalyticsList />
              </div>
            </CardSkeletonBody>
            <CardContent className="h-40 relative mb-4">
              <CardTitle>
                Production <br /> Analytics
              </CardTitle>
              <CardDescription>
                Real-time monitoring of all production chats with automated prompt optimization
                based on performance data. Track model invocations and inter-model interactions.
              </CardDescription>
            </CardContent>
            <div className="absolute right-4 bottom-4 opacity-10 md:opacity-100">
              <MetricsGrid />
            </div>
          </Card>

          {/* Advanced Testing & Monitoring */}
          <Card className="flex relative flex-col justify-between lg:col-span-2">
            <CardContent className="h-40">
              <CardTitle>
                Advanced Testing <br /> & Monitoring
              </CardTitle>
              <CardDescription>
                Comprehensive testing pipeline with automated unit tests and A/B testing
                capabilities. Monitor all model interactions and trace their performance in
                production.
              </CardDescription>
            </CardContent>
            <div className="absolute inset-0">
              <NetworkMonitoring />
            </div>
            <h1
              className={cn(
                'inline-block p-6 text-2xl md:text-6xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]  bg-clip-text text-transparent'
              )}
            >
              99.9%
              <br />
              Uptime
            </h1>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Card structure components remain the same
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('overflow-hidden relative w-full h-full', className)}>{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('p-6', className)}>{children}</div>;
};

const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h3
      className={cn(
        'inline-block text-xl md:text-4xl bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]  bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'font-sans max-w-sm text-sm font-normal tracking-tight mt-2 text-neutral-400',
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        'group relative isolate flex flex-col rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden',
        className
      )}
    >
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={5}
        blur={10}
      />
      {children}
    </motion.div>
  );
};

// AI Models List Component
const AnalyticsList = () => {
  const commonStyles = useMemo(
    () =>
      'rounded-[13px] w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex-[1_0_0] bg-[linear-gradient(0deg,#333_0%,#333_100%),radial-gradient(297.31%_124.05%_at_91.1%_3.42%,#3B3B3B_0%,#232323_27.05%,#0A0A0A_100%)] flex items-center justify-center',
    []
  );

  const icons = useMemo(
    () => [
      { Icon: IconChartLine, delay: 0, name: 'Performance' },
      { Icon: IconTrendingUp, delay: 0.1, name: 'Trends' },
      { Icon: IconTarget, delay: 0.2, name: 'Goals' },
      { Icon: IconTestPipe, delay: 0.3, name: 'Testing' },
      { Icon: IconSettings, delay: 0.4, name: 'Settings' },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % icons.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [icons.length, isHovered]);

  const IconComponents = useMemo(
    () =>
      icons.map(({ Icon, delay, name }, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            background:
              index === activeIndex
                ? 'radial-gradient(297.31% 124.05% at 91.1% 3.42%, #3B3B3B 0%, #232323 27.05%, #0A0A0A 100%), #D9D9D9'
                : 'linear-gradient(0deg,#333 0%,#333 100%),radial-gradient(297.31% 124.05% at 91.1% 3.42%,#3B3B3B_0%,#232323_27.05%,#0A0A0A_100%)',
            boxShadow:
              index === activeIndex
                ? '0px 22px 6px 0px rgba(0, 0, 0, 0.01), 0px 14px 6px 0px rgba(0, 0, 0, 0.04), 0px 8px 5px 0px rgba(0, 0, 0, 0.14), 0px 4px 4px 0px rgba(0, 0, 0, 0.24), 0px 1px 2px 0px rgba(0, 0, 0, 0.27)'
                : 'none',
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            setActiveIndex(index);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          transition={{
            delay,
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            background: {
              duration: 0.3,
              ease: 'easeInOut',
            },
            boxShadow: {
              duration: 0.3,
              ease: 'easeInOut',
            },
          }}
          className={commonStyles}
          title={name}
        >
          <Icon className="w-6 h-6 md:w-10 md:h-10 text-neutral-200 dark:text-neutral-200" />
        </motion.div>
      )),
    [icons, activeIndex, commonStyles]
  );

  return (
    <div className="inline-flex items-center gap-[6px] md:gap-[11px] p-[6px] md:p-[9px] rounded-[0px_20px_20px_0px] bg-[linear-gradient(88deg,#161616_0.35%,#292929_98.6%)] shadow-[0px_112px_31px_0px_rgba(0,0,0,0.02),0px_71px_29px_0px_rgba(0,0,0,0.13),0px_40px_24px_0px_rgba(0,0,0,0.45),0px_18px_18px_0px_rgba(0,0,0,0.77),0px_4px_10px_0px_rgba(0,0,0,0.88)]">
      {IconComponents}
    </div>
  );
};

// Optimization Stack Component
let interval: NodeJS.Timeout;

type Card = {
  id: number;
  name: string;
  designation?: string;
  content: React.ReactNode;
};

export const OptimizationStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative h-48 md:h-36 w-full mx-auto">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-full h-full p-4 flex flex-col justify-between rounded-[16px] bg-[linear-gradient(180deg,#1D1D1D_0%,#131313_100%)] shadow-[0px_1px_1px_0px_rgba(121,121,121,0.70)_inset] border border-white/[0.1]"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <IconBrain className="w-6 h-6 sm:w-auto sm:h-auto text-purple-400" />
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <p className="text-sm sm:text-base font-medium text-white">{card.name}</p>
                {card.designation && (
                  <p className="text-sm sm:text-base font-normal text-neutral-200">
                    {card.designation}
                  </p>
                )}
              </div>
            </div>
            <div className="font-normal text-xs sm:text-sm text-neutral-200 mt-2">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-purple-100 bg-purple-700/[0.2] text-purple-400 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};

const OPTIMIZATION_CARDS = [
  {
    id: 0,
    name: 'SDK Integration',
    designation: 'Setup',
    content: (
      <p>
        Drop in our <Highlight>one-line SDK</Highlight> to start monitoring your AI system&apos;s
        performance in production.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Auto-Optimization',
    designation: 'In Progress',
    content: (
      <p>
        System prompts are <Highlight>automatically refined</Highlight> until they meet your defined
        evaluation thresholds.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Continuous Testing',
    designation: 'Live',
    content: (
      <p>
        Production traffic is <Highlight>shadow tested</Highlight> against optimized prompts before
        deployment.
      </p>
    ),
  },
];

// Metrics Grid Component
const metrics = [
  { value: '99.9%', label: 'Uptime', icon: IconRocket },
  { value: '2.3s', label: 'Response', icon: IconTrendingUp },
  { value: '94%', label: 'Accuracy', icon: IconTarget },
  { value: '1.2M', label: 'Requests', icon: IconChartLine },
  { value: '15ms', label: 'Latency', icon: IconSettings },
  { value: '99.8%', label: 'Success', icon: IconTestPipe },
];

const MetricsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % metrics.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setActiveIndex(hoveredIndex);
    }
  }, [hoveredIndex]);

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredIndex(null);
      }}
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="relative bg-neutral-800/50 rounded-lg p-3 border border-neutral-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: index === activeIndex ? [1, 1.05, 1] : 0.95,
            borderColor: index === activeIndex ? '#8b5cf6' : '#404040',
          }}
          transition={{
            duration: 0.6,
            scale: {
              duration: 0.8,
              times: [0, 0.5, 1],
              ease: 'easeInOut',
              repeat: index === activeIndex ? Number.POSITIVE_INFINITY : 0,
              repeatDelay: 1,
            },
            borderColor: {
              duration: 0.3,
              ease: 'easeInOut',
            },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center gap-2">
            <metric.icon
              className={cn(
                'w-4 h-4 transition-colors duration-300',
                index === activeIndex ? 'text-purple-400' : 'text-neutral-400'
              )}
            />
            <div>
              <div
                className={cn(
                  'text-sm font-bold transition-colors duration-300',
                  index === activeIndex ? 'text-white' : 'text-neutral-300'
                )}
              >
                {metric.value}
              </div>
              <div className="text-xs text-neutral-500">{metric.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Prompt Orbit Component
const OrbitingIcons = ({
  centerIcon,
  orbits,
  className,
}: {
  centerIcon?: React.ReactNode;
  orbits: Array<{
    icons: React.ReactNode[];
    radius?: number;
    speed?: number;
    rotationDirection?: 'clockwise' | 'anticlockwise';
    revealTime?: number;
    delay?: number;
  }>;
  className?: string;
}) => {
  const orbitData = React.useMemo(() => {
    return orbits.map((orbit, orbitIndex) => {
      const radius = orbit.radius || 100 + orbitIndex * 80;
      const speed = orbit.speed || 1;
      const revealTime = orbit.revealTime || 0.5;
      const orbitDelay = orbit.delay || 0;
      const iconCount = orbit.icons.length;
      const angleStep = 360 / iconCount;
      const angles = Array.from({ length: iconCount }, (_, i) => angleStep * i);

      const iconData = angles.map((angle) => {
        const randomDelay = -Math.random() * speed;
        const rotationAngle =
          orbit.rotationDirection === 'clockwise' ? [angle, angle - 360] : [angle, angle + 360];

        return {
          angle,
          randomDelay,
          rotationAngle,
          position: {
            x: radius * Math.cos((angle * Math.PI) / 180),
            y: radius * Math.sin((angle * Math.PI) / 180),
          },
          animation: {
            initial: {
              rotate: angle,
              scale: 0,
              opacity: 0,
            },
            animate: {
              rotate: rotationAngle,
              scale: 1,
              opacity: 1,
            },
            transition: {
              rotate: {
                duration: speed,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.4, 0, 0.2, 1],
                delay: randomDelay + orbitDelay,
              },
              scale: {
                duration: revealTime,
                delay: Math.abs(randomDelay) + orbitDelay,
              },
              opacity: {
                duration: revealTime,
                delay: Math.abs(randomDelay) + orbitDelay,
              },
            },
            counterRotation: {
              initial: { rotate: -angle },
              animate: {
                rotate:
                  orbit.rotationDirection === 'clockwise'
                    ? [-angle, -angle + 360]
                    : [-angle, -angle - 360],
              },
              transition: {
                duration: speed,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.4, 0, 0.2, 1],
                delay: randomDelay + orbitDelay,
              },
            },
          },
        };
      });

      return {
        radius,
        speed,
        revealTime,
        orbitDelay,
        iconData,
        rotationDirection: orbit.rotationDirection,
      };
    });
  }, [orbits]);

  return (
    <div className={cn('relative w-[300px] h-[300px]', className)}>
      {centerIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {centerIcon}
        </div>
      )}
      {orbitData.map((orbit, orbitIndex) => (
        <div
          key={orbitIndex}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: orbits.length - orbitIndex }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[343.721px] border border-[#545454] bg-[linear-gradient(189deg,#252525_5.97%,#0E0E0E_92.92%)] shadow-[0px_115px_32px_0px_rgba(0,0,0,0.01),_0px_74px_29px_0px_rgba(0,0,0,0.05),_0px_41px_25px_0px_rgba(0,0,0,0.16),_0px_18px_18px_0px_rgba(0,0,0,0.27),_0px_5px_10px_0px_rgba(0,0,0,0.31),inset_0px_0px_20px_rgba(0,0,0,0.5)]"
            style={{
              width: orbit.radius * 2 + 'px',
              height: orbit.radius * 2 + 'px',
            }}
          />
          {orbit.iconData.map((icon, iconIndex) => (
            <motion.div
              key={iconIndex}
              className="absolute"
              style={{
                width: '40px',
                height: '40px',
                left: `calc(50% - 20px)`,
                top: `calc(50% - 20px)`,
                transformOrigin: 'center center',
              }}
              initial={icon.animation.initial}
              animate={icon.animation.animate}
              transition={{
                rotate: {
                  ...icon.animation.transition.rotate,
                  ease: 'linear',
                },
                scale: icon.animation.transition.scale,
                opacity: icon.animation.transition.opacity,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: `${orbit.radius}px`,
                  transformOrigin: 'center center',
                }}
              >
                <motion.div
                  initial={icon.animation.counterRotation.initial}
                  animate={icon.animation.counterRotation.animate}
                  transition={{
                    ...icon.animation.counterRotation.transition,
                    ease: 'linear',
                  }}
                  className="w-10 h-10 rounded-[5px] bg-[#151515] flex items-center justify-center shadow-[0px_23px_7px_0px_rgba(0,0,0,0.01),0px_15px_6px_0px_rgba(0,0,0,0.06),0px_8px_5px_0px_rgba(0,0,0,0.19),0px_4px_4px_0px_rgba(0,0,0,0.32),0px_1px_2px_0px_rgba(0,0,0,0.37)]"
                >
                  {orbits[orbitIndex].icons[iconIndex]}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const PromptOrbit = () => {
  const orbit1Icons = [
    <AiOutlineOpenAI key="openai" className="w-8 h-8 text-zinc-500" />,
    <SiGooglegemini key="gemini" className="w-8 h-8 text-zinc-500" />,
  ];

  const orbit2Icons = [
    <RiClaudeLine key="claude" className="w-8 h-8 text-zinc-500" />,
    <SiOllama key="ollama" className="w-8 h-8 text-zinc-500" />,
  ];

  return (
    <OrbitingIcons
      orbits={[
        {
          icons: orbit1Icons,
          rotationDirection: 'clockwise',
          radius: 60,
          speed: 8,
        },
        {
          icons: orbit2Icons,
          rotationDirection: 'anticlockwise',
          radius: 120,
          speed: 12,
        },
      ]}
    />
  );
};

// Network Monitoring Component
const NetworkMonitoring = () => {
  const svgMap = useMemo(() => {
    const map = new DottedMap({
      height: 40,
      grid: 'diagonal',
    });
    return map.getSVG({
      radius: 0.15,
      color: '#FFFFFF30',
      shape: 'circle',
    });
  }, []);

  const networkNodes = useMemo(() => {
    // Fixed node positions instead of random
    return [
      { x: 20, y: 20, delay: 0, duration: 3, size: 6 },
      { x: 40, y: 30, delay: 0.3, duration: 3.5, size: 5 },
      { x: 60, y: 40, delay: 0.6, duration: 4, size: 7 },
      { x: 80, y: 20, delay: 0.9, duration: 3.2, size: 5 },
      { x: 30, y: 60, delay: 1.2, duration: 3.8, size: 6 },
      { x: 50, y: 70, delay: 1.5, duration: 3.3, size: 4 },
      { x: 70, y: 80, delay: 1.8, duration: 3.6, size: 5 },
      { x: 25, y: 40, delay: 2.1, duration: 3.4, size: 6 },
      { x: 45, y: 50, delay: 2.4, duration: 3.7, size: 5 },
      { x: 65, y: 60, delay: 2.7, duration: 3.5, size: 7 },
      { x: 85, y: 40, delay: 3.0, duration: 3.9, size: 6 },
      { x: 35, y: 80, delay: 3.3, duration: 3.2, size: 5 },
    ];
  }, []);

  const connections = useMemo(() => {
    // Fixed connections instead of random
    return [
      { from: networkNodes[0], to: networkNodes[1], delay: 0 },
      { from: networkNodes[1], to: networkNodes[2], delay: 0.2 },
      { from: networkNodes[2], to: networkNodes[3], delay: 0.4 },
      { from: networkNodes[4], to: networkNodes[5], delay: 0.6 },
      { from: networkNodes[5], to: networkNodes[6], delay: 0.8 },
      { from: networkNodes[7], to: networkNodes[8], delay: 1.0 },
      { from: networkNodes[8], to: networkNodes[9], delay: 1.2 },
    ];
  }, [networkNodes]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-300">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full object-cover absolute top-0 -right-2 -mt-14 [mask-image:linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)] pointer-events-none select-none opacity-30"
          alt="Network monitoring visualization"
          height={595}
          width={356}
          priority={true}
          draggable={false}
        />
      </div>

      {/* Network connections */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        {connections.map((connection, i) => (
          <motion.line
            key={i}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: connection.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Network nodes */}
      <div className="absolute inset-0" aria-hidden="true">
        {networkNodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-400 shadow-glow"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              boxShadow: '0 0 12px rgba(139, 92, 246, 0.6)',
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};
