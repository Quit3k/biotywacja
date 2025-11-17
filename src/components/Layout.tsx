import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const legalPages = [
    "/polityka-prywatnosci",
    "/polityka-cookies",
    "/regulamin"
  ];

  const isLegalPage = legalPages.includes(router.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Legal pages — NIE dodajemy żadnych paddingów tutaj */}
      {isLegalPage ? (
        <main className="flex-grow">
          {children}
        </main>
      ) : (
        <main className="flex-grow">
          {children}
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
