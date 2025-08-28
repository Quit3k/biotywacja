// pages/polityka-cookies.tsx
import React from 'react';

const PolitykaCookiesPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8">
          Polityka Plików Cookies
        </h1>
        <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            <strong>Data ostatniej aktualizacji:</strong> 20 sierpnia 2025
          </p>

          <h2>§ 1. Czym są pliki cookies?</h2>
          <p>
            Poprzez pliki "cookies" należy rozumieć dane informatyczne, w szczególności pliki tekstowe, przechowywane w urządzeniach końcowych użytkowników przeznaczone do korzystania ze stron internetowych.
          </p>
          
          {/* TUTAJ NALEŻY WKLEIĆ PEŁNĄ TREŚĆ POLITYKI COOKIES
          */}

        </div>
      </div>
    </div>
  );
};

export default PolitykaCookiesPage;