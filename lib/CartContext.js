'use client'

import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item) =>
    setCart((prev) => (prev.find((i) => i.id === item.id) ? prev : [...prev, item]))

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id))

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
