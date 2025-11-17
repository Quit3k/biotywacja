import React from "react";
import LegalWrapper from "../components/LegalWrapper";

const PolitykaCookiesPage = () => {
  return (
    <LegalWrapper>
      <h1>Polityka Plików Cookies</h1>

      <p><strong>Data ostatniej aktualizacji:</strong> 20 sierpnia 2025</p>

      <h2>§ 1. Informacje ogólne</h2>
      <p>
        Strona Biotywacja korzysta wyłącznie z plików cookies niezbędnych do prawidłowego działania serwisu. 
        Nie stosujemy cookies analitycznych, marketingowych ani profilujących.
      </p>

      <h2>§ 2. Czym są pliki cookies?</h2>
      <p>
        Pliki cookies to niewielkie pliki tekstowe przechowywane na urządzeniu użytkownika, 
        umożliwiające prawidłowe działanie strony.
      </p>

      <h2>§ 3. Stosowane pliki cookies</h2>
      <ul>
        <li>cookies techniczne – niezbędne do działania strony,</li>
        <li>cookies związane z zapisaniem ustawień przeglądarki.</li>
      </ul>

      <h2>§ 4. Zgoda na cookies</h2>
      <p>
        Korzystanie ze strony oznacza zgodę na używanie niezbędnych cookies technicznych.
      </p>

      <h2>§ 5. Zarządzanie cookies</h2>
      <p>
        Użytkownik może samodzielnie zarządzać plikami cookies w ustawieniach przeglądarki: blokować je, 
        usuwać lub włączać powiadomienia o próbie ich zapisania.
      </p>

      <h2>§ 6. Kontakt</h2>
      <p>
        W sprawach związanych z polityką cookies prosimy o kontakt: <strong>biotywacja@gmail.com</strong>
      </p>

    </LegalWrapper>
  );
};

export default PolitykaCookiesPage;
