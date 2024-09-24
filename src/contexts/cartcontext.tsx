'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Property } from '@/types'

type CartItem = {
  property: Property
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (property: Property) => void
  removeFromCart: (propertyId: string) => void
  updateQuantity: (propertyId: string, quantity: number) => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.property.price * item.quantity, 0)
    setTotal(newTotal)
  }, [cart])

  const addToCart = (property: Property) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.property.id === property.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.property.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { property, quantity: 1 }]
    })
  }

  const removeFromCart = (propertyId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.property.id !== propertyId))
  }

  const updateQuantity = (propertyId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(propertyId)
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.property.id === propertyId ? { ...item, quantity } : item
        )
      )
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}