import type { Metadata } from 'next';

import { ScrollToTop } from '@/components/helpers/ScrollToTop';

import './globals.css';

export const metadata: Metadata = {
  title: 'Cleave',
  description: 'Cleave',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
