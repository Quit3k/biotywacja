// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* GLOBALNY KONTENER PODSTRON */}
      <main className="flex-grow pt-24 md:pt-28 max-w-4xl mx-auto w-full px-4">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
