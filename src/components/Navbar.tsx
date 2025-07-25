'use client';

import { FC, useEffect, useState } from 'react';

import Image from 'next/image';

import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export const Navbar: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4 bg-transparent transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-24'
      }`}
    >
      <nav className="max-w-6xl mx-auto bg-black/90 border border-gray-800 rounded-xl sm:rounded-2xl">
        <div className="px-3 sm:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/logos/logo.png"
                alt="Cleave Logo"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-white font-semibold text-base sm:text-lg">Cleave</span>
            </div>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-0"
              >
                Pricing
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-0"
              >
                Features
              </a>
              <a
                href="#enterprise"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-0"
              >
                Enterprise
              </a>
              <a
                href="#blog"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-0"
              >
                Blog
              </a>
              <a
                href="#forum"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-0"
              >
                Forum
              </a>
              <a
                href="#careers"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-0"
              >
                Careers
              </a>
            </div>

            <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-800 text-sm font-medium px-3 lg:px-4 h-8 lg:h-9 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                Sign in
              </Button>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-100 text-sm font-medium px-3 lg:px-5 h-8 lg:h-9 rounded-lg flex items-center space-x-1.5 lg:space-x-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.38 7.75 12.1 7.75C12.83 7.75 14.33 6.68 15.9 6.84C16.57 6.87 18.39 7.12 19.56 8.82C19.47 8.88 17.39 10.17 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <span className="hidden lg:inline">Download</span>
                <span className="lg:hidden">Get</span>
              </Button>
            </div>
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 p-2 h-8 focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 border-gray-800">
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-3 text-white">
                      <Image
                        src="/logos/logo.png"
                        alt="Cleave Logo"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span>Cleave</span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex flex-col space-y-3">
                      <a
                        href="#pricing"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-3 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-0"
                      >
                        Pricing
                      </a>
                      <a
                        href="#features"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-3 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-0"
                      >
                        Features
                      </a>
                      <a
                        href="#enterprise"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-3 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-0"
                      >
                        Enterprise
                      </a>
                      <a
                        href="#blog"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-3 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-0"
                      >
                        Blog
                      </a>
                      <a
                        href="#forum"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-3 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-0"
                      >
                        Forum
                      </a>
                      <a
                        href="#careers"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-3 px-2 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-0"
                      >
                        Careers
                      </a>
                    </div>
                    <div className="flex flex-col space-y-3 pt-6 border-t border-gray-800">
                      <Button
                        variant="ghost"
                        className="text-gray-300 hover:text-white hover:bg-gray-800 text-sm font-medium justify-start py-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      >
                        Sign in
                      </Button>
                      <Button className="bg-white text-black hover:bg-gray-100 text-sm font-medium py-3 flex items-center justify-center space-x-2 focus-visible:ring-0 focus-visible:ring-offset-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.38 7.75 12.1 7.75C12.83 7.75 14.33 6.68 15.9 6.84C16.57 6.87 18.39 7.12 19.56 8.82C19.47 8.88 17.39 10.17 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                        </svg>
                        <span>Download</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
