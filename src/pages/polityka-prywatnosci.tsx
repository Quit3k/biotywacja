// pages/polityka-prywatnosci.tsx
import React from 'react';

const PolitykaPrywatnosciPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8 underline decoration-blue-500">
          Polityka Prywatności
        </h1>

        <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            <strong>Data ostatniej aktualizacji:</strong> 20 sierpnia 2025
          </p>

          <h2 className="font-bold">§ 1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Prywatności wyjaśnia zasady przetwarzania danych osobowych
            Użytkowników korzystających ze strony internetowej Biotywacja (dalej jako „Serwis”).
            Przetwarzamy wyłącznie dane podane dobrowolnie przez Użytkownika podczas korzystania
            z formularza kontaktowego.
          </p>

          <h2 className="font-bold">§ 2. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest <strong>Monika Kaput</strong>,
            adres kontaktowy: <strong>kontakt@biotywacja.pl</strong>.
          </p>

          <h2 className="font-bold">§ 3. Zakres i cel przetwarzania danych</h2>
          <p>Przetwarzamy wyłącznie następujące dane:</p>
          <ul className="list-disc ml-8">
            <li>imię (jeśli podane),</li>
            <li>adres e-mail,</li>
            <li>treść wiadomości wysłanej przez formularz kontaktowy.</li>
          </ul>
          <p>Dane te przetwarzamy wyłącznie w celu:</p>
          <ul className="list-disc ml-8">
            <li>udzielenia odpowiedzi na przesłaną wiadomość,</li>
            <li>kontaktu zwrotnego na prośbę Użytkownika.</li>
          </ul>

          <h2 className="font-bold">§ 4. Podstawa prawna przetwarzania</h2>
          <p>Przetwarzanie danych odbywa się na podstawie:</p>
          <ul className="list-disc ml-8">
            <li>
              <strong>art. 6 ust. 1 lit. f RODO</strong> – prawnie uzasadniony interes administratora,
              którym jest udzielenie odpowiedzi na wiadomość.
            </li>
          </ul>

          <h2 className="font-bold">§ 5. Okres przechowywania danych</h2>
          <p>
            Dane przechowywane są przez okres niezbędny do obsługi korespondencji, a następnie
            usuwane — najpóźniej po <strong>6 miesiącach</strong> od zakończenia kontaktu.
          </p>

          <h2 className="font-bold">§ 6. Prawa Użytkownika</h2>
          <p>Użytkownik ma prawo do:</p>
          <ul className="list-disc ml-8">
            <li>dostępu do swoich danych,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>wniesienia skargi do Prezesa UODO.</li>
          </ul>

          <h2 className="font-bold">§ 7. Dobrowolność podania danych</h2>
          <p>
            Podanie danych osobowych w formularzu kontaktowym jest dobrowolne, lecz niezbędne
            do uzyskania odpowiedzi.
          </p>

          <h2 className="font-bold">§ 8. Zabezpieczenia</h2>
          <p>
            Dane są przetwarzane z zachowaniem środków technicznych i organizacyjnych zapewniających
            bezpieczeństwo zgodnie z obowiązującymi przepisami prawa.
          </p>

          <h2 className="font-bold">§ 9. Kontakt w sprawie danych</h2>
          <p>
            Wszelkie pytania dotyczące przetwarzania danych prosimy kierować na adres:
            <strong> kontakt@biotywacja.pl</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolitykaPrywatnosciPage;
