// src/context/CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// --- Definicje typów ---
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

// --- Tworzenie Kontekstu ---
const CartContext = createContext<CartContextType | undefined>(undefined);

// --- "Dostawca" (Provider) - komponent z całą logiką ---
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Wczytaj koszyk z localStorage przy pierwszym załadowaniu
  useEffect(() => {
    const storedCart = localStorage.getItem('biotywacja-cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Zapisz koszyk w localStorage za każdym razem, gdy się zmieni
  useEffect(() => {
    localStorage.setItem('biotywacja-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (itemToAdd: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        // Jeśli produkt już jest w koszyku, zwiększ jego ilość
        return prevItems.map(item =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Jeśli produktu nie ma, dodaj go z ilością 1
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantity, clearCart, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// --- Własny "Hook" - ułatwienie dostępu do koszyka ---
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};