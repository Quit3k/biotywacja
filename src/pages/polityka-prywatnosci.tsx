// pages/polityka-prywatnosci.tsx
import React from 'react';

const PolitykaPrywatnosciPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8">
          Polityka Prywatności
        </h1>
        <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            <strong>Data ostatniej aktualizacji:</strong> 20 sierpnia 2025
          </p>

          <h2>§ 1. Informacje ogólne</h2>
          <p>
            Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług oferowanych przez serwis internetowy Biotywacja.
          </p>
          
          {/* TUTAJ NALEŻY WKLEIĆ PEŁNĄ TREŚĆ POLITYKI PRYWATNOŚCI 
          */}

        </div>
      </div>
    </div>
  );
};

export default PolitykaPrywatnosciPage;