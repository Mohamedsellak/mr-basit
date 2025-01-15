'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

// This is mock data - in a real app, this would come from your cart state management
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Traditional Moroccan Lamp",
    price: 1299,
    image: "/1.webp",
    quantity: 1,
    category: "Lighting"
  },
  {
    id: 2,
    name: "Handwoven Berber Carpet",
    price: 2499,
    image: "/2.webp",
    quantity: 1,
    category: "Textiles"
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-black">
      {/* Moroccan Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-6">
            Your Cart
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/80 text-xl mb-8">Your cart is empty</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-black rounded-full font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-6"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-white/90 font-semibold">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-amber-500/90 text-sm mb-4">{item.category}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-white/20 text-white/80 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-white/80">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-white/20 text-white/80 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-white/80 font-light">
                          {(item.price * item.quantity).toLocaleString()} <span className="text-sm">MAD</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-6">
                <h2 className="text-xl text-white/90 font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal</span>
                    <span>{total.toLocaleString()} MAD</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between text-white/90 text-lg font-semibold">
                    <span>Total</span>
                    <span>{total.toLocaleString()} MAD</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-amber-500 text-black rounded-full py-3 px-6 text-center font-medium block hover:bg-amber-400 transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 