import React from 'react';
import { ShoppingCart, Award, Download } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "Kompletny Przewodnik po Biotywacji",
      description: "Naukowe podstawy motywacji i praktyczne narzędzia do transformacji życia",
      price: "149 zł",
      originalPrice: "199 zł",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      bestseller: true
    },
    {
      id: 2,
      title: "21-Dniowy Program Zmiany Nawyków",
      description: "Sprawdzone metody budowania pozytywnych nawyków opartych na neurobiologii",
      price: "89 zł",
      originalPrice: "129 zł",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Psychologia Sukcesu - Audiobook",
      description: "10 godzin najlepszych technik mentalnych",
      price: "79 zł",
      originalPrice: "99 zł",
      image: "https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  ];

  return (
    <section
      id="sklep"
      className="
        py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 
        relative overflow-hidden 
        hidden sm:block
      "
    >

      {/* 🔥 PEŁNA BLOKADA INTERAKCJI */}
      <div className="absolute inset-0 z-30 pointer-events-none"></div>

      {/* 🔥 LEKKI BLUR + PRZYCIEMNIENIE */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[4px] z-20 pointer-events-none"></div>

      {/* 🔥 DIAGONALNY PASEK – OD LEWEGO DO PRAWEGO */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div
          className="
            absolute bottom-0 left-0 
            w-[200%] h-40
            bg-white/35 backdrop-blur-sm 
            rotate-[-32deg]
            origin-bottom-left
          "
        />
      </div>

      {/* 🔥 POPUP */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
        <div className="bg-white shadow-2xl rounded-3xl px-12 py-10 text-center max-w-lg border border-gray-200">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Wkrótce dostępne
          </h2>
          <p className="text-xl text-gray-600">
            Sekcja sklepu jest w przygotowaniu.  
          </p>
        </div>
      </div>

      {/* 🔥 ORYGINALNA ZAWARTOŚĆ – NIETKNIĘTA, NIEKLIKLANA */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 pointer-events-none">

        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-poppins text-gray-900 mb-6">
            Sklep z
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              {" "}artykułami naukowymi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odkryj sprawdzone narzędzia i materiały oparte na nauce.
          </p>
        </div>

        {/* Produkty (pełne, nieusunięte, ale nieklikalne) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">

              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 
                    rounded-full text-sm font-bold flex items-center animate-float"
                  >
                    <Award className="h-4 w-4 mr-1" /> Bestseller
                  </div>
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Dolny box */}
        <div className="text-center opacity-100">
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Nie znalazłeś tego czego szukasz?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Skontaktuj się ze mną…
            </p>

            <a 
              href="#kontakt"
              className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-12 py-6 rounded-full text-xl font-semibold inline-block"
            >
              Skontaktuj się ze mną
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Shop;
