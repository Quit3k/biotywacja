import React from 'react';
import { ShoppingCart, BookOpen, Download, Star, Users, Award } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "Kompletny Przewodnik po Biotywacji",
      description: "Naukowe podstawy motywacji i praktyczne narzędzia do transformacji życia",
      price: "149 zł",
      originalPrice: "199 zł",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 234,
      bestseller: true
    },
    {
      id: 2,
      title: "21-Dniowy Program Zmiany Nawyków",
      description: "Sprawdzone metody budowania pozytywnych nawyków opartych na neurobiologii",
      price: "89 zł",
      originalPrice: "129 zł",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 156,
      bestseller: false
    },
    {
      id: 3,
      title: "Psychologia Sukcesu - Audiobook",
      description: "10 godzin najlepszych technik mentalnych dla osiągnięcia celów życiowych",
      price: "79 zł",
      originalPrice: "99 zł",
      image: "https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 89,
      bestseller: false
    },
  ];

  return (
    <section id="sklep" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* ... (tło bez zmian) ... */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-32 opacity-8" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#wave5)"/><defs><linearGradient id="wave5" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.06"/><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.03"/></linearGradient></defs></svg>
        <div className="absolute top-32 right-20 w-18 h-18 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-15 animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-64 left-24 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-48 right-32 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-15 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-400 rounded-lg opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-12 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-lg opacity-12 animate-float" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-poppins leading-tight mb-6">
            Sklep z
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600"> artykułami naukowymi</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Odkryj sprawdzone narzędzia i materiały oparte na najnowszych badaniach naukowych. 
            Każdy produkt to klucz do Twojej transformacji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative flex flex-col">
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <Award className="h-4 w-4 mr-1" />
                    Bestseller
                  </div>
                </div>
              )}
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-4 leading-tight">
                  {product.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl md:text-4xl font-bold text-primary-600 font-poppins">
                        {product.price}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-semibold">
                        Oszczędzasz {parseInt(product.originalPrice) - parseInt(product.price)} zł
                      </div>
                    </div>
                  </div>

                  <button className="group w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                    <ShoppingCart className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    Dodaj do koszyka
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-400 rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full animate-float opacity-80" style={{animationDelay: '3s'}}></div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
              Nie znalazłeś tego czego szukasz?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Skontaktuj się ze mną, a stworzę dla Ciebie spersonalizowany program rozwoju osobistego.
            </p>
            {/* ZMIANA: Przycisk zamieniony na link prowadzący do #kontakt */}
            <a 
              href="#kontakt"
              className="group bg-gradient-to-r from-primary-600 to-purple-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto w-fit"
            >
              Skontaktuj się ze mną
              <Download className="ml-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;