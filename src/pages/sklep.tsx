// pages/sklep.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Award } from 'lucide-react';
import sanityClient from '../sanityClient';
import { useCart } from '../context/CartContext'; // ZMIANA: Importujemy nasz koszyk

// --- Definicje typów ---
interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  images: { asset: { url: string } }[];
  price: number;
  originalPrice?: number;
  shortDescription: string;
  bestseller?: boolean;
}

interface SklepPageProps {
  products: Product[];
}

// --- Komponent Strony Sklepu ---
const SklepPage = ({ products }: SklepPageProps) => {
  const { addItem } = useCart(); // ZMIANA: Wyciągamy funkcję 'addItem' z naszego koszyka

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation(); // ZMIANA: Zatrzymujemy kliknięcie, aby nie przeniosło nas na stronę produktu
    e.preventDefault();

    const itemToAdd = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].asset.url,
    };
    addItem(itemToAdd);
    // W przyszłości można tu dodać jakieś powiadomienie "Dodano do koszyka!"
    console.log('Dodano do koszyka:', itemToAdd);
  };

  const formatPrice = (priceInCents: number) => (priceInCents / 100).toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });

  return (
    <div className="bg-white">
      {/* ... Sekcja Hero bez zmian ... */}
      <section className="py-20 text-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-poppins">Sklep Biotywacji</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Odkryj sprawdzone narzędzia i materiały oparte na najnowszych badaniach naukowych. Każdy produkt to klucz do Twojej transformacji.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product._id} className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex flex-col">
                <Link href={`/sklep/${product.slug.current}`} className="flex flex-col flex-grow">
                  <div className="relative h-64 overflow-hidden">
                    {product.bestseller && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          Bestseller
                        </div>
                      </div>
                    )}
                    <Image
                      src={product.images[0].asset.url}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl font-bold text-primary-600 font-poppins">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xl text-gray-400 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* ZMIANA: Przycisk zamieniony na button z funkcją onClick */}
                      <button 
                        onClick={(e) => handleAddToCart(e, product)}
                        className="group w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                      >
                        <ShoppingCart className="mr-3 h-6 w-6" />
                        Dodaj do koszyka
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SklepPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await sanityClient.fetch(`
    *[_type == "product"] {
      _id,
      name,
      slug,
      images[]{ asset->{url} },
      price,
      originalPrice,
      shortDescription,
      bestseller
    }
  `);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};