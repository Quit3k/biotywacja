// pages/koszyk.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; // Pamiętaj o poprawnej ścieżce
import { X, ArrowRight } from 'lucide-react';

const KoszykPage = () => {
  const { cartItems, cartCount, totalPrice, updateQuantity, removeItem } = useCart();

  const formatPrice = (priceInCents: number) => {
    return (priceInCents / 100).toLocaleString('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    });
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8">Twój Koszyk</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-600">Twój koszyk jest pusty.</p>
            {/* ZMIANA: Zaktualizowano składnię Link */}
            <Link 
              href="/sklep"
              className="mt-6 inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Wróć do sklepu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Lista produktów w koszyku */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                  <div className="relative w-24 h-24 rounded-md overflow-hidden mr-4">
                    {/* ZMIANA: Zaktualizowano składnię Image */}
                    <Image src={item.image} alt={item.name} fill sizes="100px" className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-primary-600 font-semibold">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded-md text-center"
                    />
                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Podsumowanie zamówienia */}
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">Podsumowanie</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Liczba produktów:</span>
                  <span>{cartCount}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Do zapłaty:</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
              {/* ZMIANA: Zaktualizowano składnię Link */}
              <Link 
                href="/checkout"
                className="mt-6 w-full group bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Przejdź do płatności
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KoszykPage;