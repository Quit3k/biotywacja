// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  // Lista stron, które mają być w wąskim formacie (legal pages)
  const legalPages = [
    "/polityka-prywatnosci",
    "/polityka-cookies",
    "/regulamin"
  ];

  // Sprawdzenie, czy aktualna ścieżka jest jedną z legal pages
  const isLegalPage = legalPages.includes(router.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Jeśli legal page → wąski wyśrodkowany layout */}
      {isLegalPage ? (
        <main className="flex-grow pt-24 md:pt-28 max-w-4xl mx-auto w-full px-4">
          {children}
        </main>
      ) : (
        // Jeśli dowolna inna strona → stary layout bez żadnych zmian
        <main className="flex-grow">
          {children}
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
