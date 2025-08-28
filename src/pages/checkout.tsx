// pages/checkout.tsx
import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext'; // Pamiętaj o poprawnej ścieżce
import { Lock } from 'lucide-react';

const CheckoutPage = () => {
  const { cartItems, totalPrice } = useCart();

  const formatPrice = (priceInCents: number) => {
    return (priceInCents / 100).toLocaleString('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    });
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Kolumna z formularzem */}
          <div>
            <h1 className="text-3xl font-bold font-poppins text-gray-900 mb-6">Dane Zamówienia</h1>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Imię i nazwisko</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adres e-mail</label>
                <p className="text-xs text-gray-500 mb-1">Na ten adres wyślemy Twój produkt cyfrowy.</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="twoj@email.com"
                />
              </div>
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full group bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Lock className="mr-3 h-5 w-5" />
                  Przejdź do płatności
                </button>
              </div>
            </form>
          </div>

          {/* Kolumna z podsumowaniem */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold border-b pb-4 mb-4">Twoje zamówienie</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4">
                      <Image src={item.image} alt={item.name} layout="fill" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.quantity} x {formatPrice(item.price)}</p>
                    </div>
                  </div>
                  <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between font-bold text-xl">
                <span>Suma:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;