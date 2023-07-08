import React from 'react';
import { Navbar } from '@/components';

export const metadata = {
  title: ' Pages',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Include any necessary meta tags, CSS stylesheets, or scripts */}
      </head>
      <body>

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
