import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 新增：若同款＋同規格已存在，就只改數量
  const addToCart = (item) => {
    setCartItems(prev => {
      const idx = prev.findIndex(
        i => i.name === item.name &&
             i.size === item.size &&
             i.wrist === item.wrist
      );
      if (idx !== -1) {
        const newArr = [...prev];
        newArr[idx].quantity += item.quantity;
        return newArr;
      }
      return [...prev, item];
    });
  };

  // 刪除整列
  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  // 🆕 調整數量（下拉選單用）
  const updateQuantity = (index, quantity) => {
    setCartItems(prev =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
