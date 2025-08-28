// pages/regulamin.tsx
import React from 'react';

const RegulaminPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8">
          Regulamin Sklepu Internetowego Biotywacja
        </h1>
        <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            <strong>Data ostatniej aktualizacji:</strong> 19 sierpnia 2025
          </p>

          <h2>§ 1. Postanowienia ogólne</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h2>§ 2. Definicje</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* TUTAJ NALEŻY WKLEIĆ PEŁNĄ TREŚĆ REGULAMINU
          */}

          <h2>§ 3. Kontakt ze Sprzedawcą</h2>
          <p>
            Adres e-mail Sprzedawcy: kontakt@biotywacja.pl
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegulaminPage;