'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

export const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on mount and route changes
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run when pathname changes

  return null; // This component doesn't render anything
};
