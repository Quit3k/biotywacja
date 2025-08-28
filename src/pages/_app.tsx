// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { CartProvider } from '../context/CartContext'; // <-- 1. DODAJ TEN IMPORT
import '../index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 2. OWIŃ WSZYSTKO W CartProvider
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;