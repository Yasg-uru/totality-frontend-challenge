'use client'


import { useCart } from '@/contexts/cartcontext'
import Link from 'next/link'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.property.id} className="mb-4 pb-4 border-b">
              <h3 className="font-bold">{item.property.title}</h3>
              <p>${item.property.price} / night</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.property.id, item.quantity - 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity} night(s)</span>
                <button
                  onClick={() => updateQuantity(item.property.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.property.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">Total: ${total}</p>
            <Link
              href="/checkout"
              className="block mt-4 bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}