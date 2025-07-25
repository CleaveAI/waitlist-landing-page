import { FC } from 'react';

import Image from 'next/image';

export const Logo: FC = () => {
  return (
    <div className="pt-8">
      <div className="flex items-center">
        <Image
          src="/logos/logo-no-bg.png"
          alt="Cleave Logo"
          width={28}
          height={28}
          className="w-11 h-11"
        />
        <span className="text-landing-hero-subheading font-clash text-2xl">Cleave</span>
      </div>
    </div>
  );
};
