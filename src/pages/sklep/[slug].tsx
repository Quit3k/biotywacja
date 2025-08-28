// pages/sklep/[slug].tsx
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import sanityClient from '../../sanityClient';
import { PortableText } from '@portabletext/react';
import { ShoppingCart, CheckCircle } from 'lucide-react';

// --- Definicje typów ---
interface Product {
  name: string;
  images: { asset: { url: string } }[];
  price: number;
  originalPrice?: number;
  body: any; // Typ dla "rich text" z Sanity
}

interface ProductPageProps {
  product: Product;
}

// --- Komponent Szablonu Produktu ---
const ProductPage = ({ product }: ProductPageProps) => {
  if (!product) {
    return <div>Ładowanie produktu...</div>;
  }

  const formatPrice = (priceInCents: number) => (priceInCents / 100).toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Kolumna ze zdjęciem */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            {product.images && product.images[0] && (
              <Image
                src={product.images[0].asset.url}
                alt={product.name}
                layout="fill"
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Kolumna z informacjami */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-4xl font-bold text-primary-600">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="prose lg:prose-lg max-w-none text-gray-700 mb-8">
              <PortableText value={product.body} />
            </div>

            {/* Przycisk - na razie placeholder, ożywimy go w Fazie 3 (Koszyk) */}
            <button className="w-full lg:w-auto bg-gradient-to-r from-primary-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <ShoppingCart className="mr-3 h-6 w-6" />
              Dodaj do koszyka
            </button>
            
            <div className="mt-6 text-sm text-gray-500 space-y-2">
                <div className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2"/><span>Produkt cyfrowy, natychmiastowa dostawa</span></div>
                <div className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2"/><span>Bezpieczna płatność obsługiwana przez Stripe</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// --- Mówimy Next.js, jakie strony produktów ma wygenerować ---
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "product" && defined(slug.current)]{
      "params": { "slug": slug.current }
    }`
  );
  return {
    paths,
    fallback: 'blocking',
  };
};

// --- Dla każdej strony pobieramy dane konkretnego produktu ---
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const product = await sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      images[]{ asset->{url} },
      price,
      originalPrice,
      body
    }`,
    { slug }
  );
  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};