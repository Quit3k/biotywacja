// pages/polityka-cookies.tsx
import React from 'react';

const PolitykaCookiesPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8 underline decoration-blue-500">
          Polityka Plików Cookies
        </h1>

        <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            <strong>Data ostatniej aktualizacji:</strong> 20 sierpnia 2025
          </p>

          <h2 className="font-bold">§ 1. Informacje ogólne</h2>
          <p>
            Serwis Biotywacja korzysta z plików cookies wyłącznie w zakresie niezbędnym
            do prawidłowego funkcjonowania strony internetowej.
          </p>

          <h2 className="font-bold">§ 2. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies to niewielkie pliki tekstowe przechowywane na urządzeniu Użytkownika.
            Umożliwiają prawidłowe wyświetlanie i działanie strony.
          </p>

          <h2 className="font-bold">§ 3. Rodzaje stosowanych plików cookies</h2>
          <p>W ramach strony stosowane są wyłącznie:</p>
          <ul className="list-disc ml-8">
            <li><strong>cookies techniczne</strong> – niezbędne do działania strony,</li>
            <li>cookies związane z zapamiętaniem podstawowych ustawień przeglądarki.</li>
          </ul>
          <p>Nie stosujemy cookies marketingowych, analitycznych ani profilujących.</p>

          <h2 className="font-bold">§ 4. Zgoda na cookies</h2>
          <p>
            Korzystanie ze strony oznacza zgodę na używanie plików cookies technicznych.
            Użytkownik może w każdej chwili usunąć je poprzez ustawienia przeglądarki.
          </p>

          <h2 className="font-bold">§ 5. Zmiana ustawień cookies</h2>
          <p>
            Użytkownik może samodzielnie zarządzać plikami cookies w ustawieniach swojej
            przeglądarki, w tym: blokować zapisywanie cookies, usuwać je lub ustawić
            powiadomienia o próbie zapisania ciasteczka.
          </p>

          <h2 className="font-bold">§ 6. Kontakt</h2>
          <p>
            W razie pytań dotyczących polityki cookies prosimy o kontakt:
            <strong> kontakt@biotywacja.pl</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolitykaCookiesPage;
