import React from "react";
import LegalWrapper from "../components/LegalWrapper";

const PolitykaPrywatnosciPage = () => {
  return (
    <LegalWrapper>
      <h1>Polityka Prywatności</h1>

      <p><strong>Data ostatniej aktualizacji:</strong> 20 sierpnia 2025</p>

      <h2>§ 1. Informacje ogólne</h2>
      <p>
        Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych 
        przekazywanych przez użytkowników w związku z korzystaniem ze strony internetowej Biotywacja.
      </p>
      <p>
        Administratorem danych osobowych jest <strong>Monika Kaput-Gustek</strong>.
        Kontakt: <strong>biotywacja@gmail.com</strong>.
      </p>

      <h2>§ 2. Zakres przetwarzanych danych</h2>
      <p>W ramach strony przetwarzane są wyłącznie dane przekazane dobrowolnie przez użytkownika:</p>
      <ul>
        <li>imię (jeśli podane),</li>
        <li>adres e-mail,</li>
        <li>treść wiadomości z formularza kontaktowego.</li>
      </ul>

      <h2>§ 3. Cele i podstawy przetwarzania danych</h2>
      <ul>
        <li>udzielenie odpowiedzi na przesłane zapytanie (art. 6 ust. 1 lit. f RODO – uzasadniony interes administratora),</li>
        <li>prowadzenie korespondencji z użytkownikiem,</li>
        <li>archiwizacja wymiany wiadomości.</li>
      </ul>

      <h2>§ 4. Okres przechowywania danych</h2>
      <p>
        Dane przetwarzane są przez okres prowadzenia korespondencji, a następnie maksymalnie 12 miesięcy 
        w celach dowodowych związanych z ewentualnymi roszczeniami.
      </p>

      <h2>§ 5. Odbiorcy danych</h2>
      <p>
        Dane użytkownika mogą być powierzane wyłącznie podmiotom, które zapewniają obsługę techniczną strony 
        (hosting, infrastrukturę mailową). Dane nie są przekazywane dalej.
      </p>

      <h2>§ 6. Prawa użytkownika</h2>
      <ul>
        <li>prawo dostępu do danych,</li>
        <li>prawo sprostowania danych,</li>
        <li>prawo ograniczenia przetwarzania,</li>
        <li>prawo usunięcia danych („prawo do bycia zapomnianym”),</li>
        <li>prawo wniesienia skargi do Prezesa UODO.</li>
      </ul>

      <h2>§ 7. Kontakt</h2>
      <p>
        W sprawach dotyczących danych osobowych prosimy o kontakt: <strong>biotywacja@gmail.com</strong>
      </p>

    </LegalWrapper>
  );
};

export default PolitykaPrywatnosciPage;
