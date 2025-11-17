// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
// import { ShoppingCart } from 'lucide-react';  // 🔒 wyłączone
// import { useCart } from '../context/CartContext'; // 🔒 wyłączone

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const { cartCount } = useCart(); // 🔒 wyłączone

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <h1 className="text-2xl font-bold font-poppins">
              <span className="text-gray-900">Bio</span>
              <span className="text-primary-600">tywacja</span>
            </h1>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#o-mnie" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">O mnie</Link>

              {/* 🔒 SKLEP UKRYTY
              <Link href="/sklep" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Sklep</Link>
              */}

              <Link href="/blog" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Blog</Link>
              <Link href="/#kontakt" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Kontakt</Link>
            </div>

            <div className="flex items-center ml-8 space-x-4">
              <Link href="/#o-mnie" className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Rozpocznij podróż
              </Link>

              {/* 🔒 KOSZYK UKRYTY 
              <Link href="/koszyk" className="relative text-gray-700 hover:text-primary-600 p-2">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 block h-5 w-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
              */}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">

            {/* 🔒 KOSZYK UKRYTY (MOBILE)
            <Link href="/koszyk" className="relative text-gray-700 hover:text-primary-600 p-2 mr-2">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 block h-5 w-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
            */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute w-full left-0 md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-2 flex flex-col items-center">
            <Link href="/#o-mnie" onClick={handleLinkClick} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">O mnie</Link>

            {/* 🔒 SKLEP UKRYTY
            <Link href="/sklep" onClick={handleLinkClick} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Sklep</Link>
            */}

            <Link href="/blog" onClick={handleLinkClick} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Blog</Link>
            <Link href="/#kontakt" onClick={handleLinkClick} className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Kontakt</Link>

            <div className="pt-4 w-full px-4">
              <Link href="/#o-mnie" onClick={handleLinkClick} className="block text-center w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300">
                Rozpocznij podróż
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
