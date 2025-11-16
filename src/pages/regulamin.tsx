// pages/regulamin.tsx
import React from 'react';

const RegulaminPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8 underline decoration-blue-500">
          Regulamin Sklepu Internetowego Biotywacja
        </h1>

        <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            <strong>Data ostatniej aktualizacji:</strong> 20 sierpnia 2025
          </p>

          <h2 className="font-bold">§ 1. Informacja</h2>
          <p>
            Sklep Biotywacja jest w trakcie budowy. Pełny regulamin zostanie
            udostępniony wraz z uruchomieniem funkcjonalności zakupowych.
          </p>

          <h2 className="font-bold">§ 2. Kontakt</h2>
          <p>
            W sprawach związanych z przyszłym sklepem prosimy pisać na:
            <strong> kontakt@biotywacja.pl</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegulaminPage;
