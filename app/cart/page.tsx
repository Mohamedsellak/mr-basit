'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const { t } = useLanguage()  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    console.log('Initial cart load:', storedCart)
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }

    // Add storage event listener
    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem('cart')
      console.log('Storage changed:', updatedCart)
      if (updatedCart) {
        setCartItems(JSON.parse(updatedCart))
      } else {
        setCartItems([])
      }
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('cartUpdated', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdated', handleStorageChange)
    }
  }, [])

  const updateQuantity = (id: number, newQuantity: number) => {
    console.log('updateQuantity called:', { id, newQuantity })
    if (newQuantity < 1) return
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const removeItem = (id: number) => {
    console.log('removeItem called:', id)
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const clearCart = () => {
    console.log('clearCart called')
    setCartItems([])
    localStorage.removeItem('cart')
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white relative">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('cartTitle')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg">
              {t('emptyCart')}
            </p>
            <Link 
              href="/#products"
              className="inline-flex items-center gap-2 px-8 py-3 mt-8 bg-gradient-to-r from-amber-600 to-amber-700 
                text-white rounded-full font-medium hover:from-amber-500 hover:to-amber-600 
                transition-all duration-300 transform hover:scale-105"
            >
              {t('shopNow')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white relative">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            {t('cartTitle')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-4"></div>
          
          {/* Simple Warning Text */}
          <p className="text-amber-700 text-sm mt-4 font-medium animate-pulse inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full shadow-sm">
            <span className="text-xl">⚠️</span> 
            Warning: Cart items are stored temporarily it may be deleted once you leave the page
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300
                  animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6 flex gap-6">
                  {/* Product Image */}
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 group">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between mb-3">
                      <h3 className="text-gray-800 font-semibold text-lg">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-4 py-1.5 text-red-500 hover:text-white text-sm font-medium rounded-full
                          hover:bg-red-500 active:bg-red-600 transition-all duration-200 ease-in-out
                          border border-red-200 hover:border-red-500
                          cursor-pointer hover:scale-105 transform active:scale-95
                          shadow-sm hover:shadow"
                      >
                        {t('removeItem')}
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-amber-50 rounded-full text-amber-700 text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full bg-white border-2 border-amber-200 text-amber-700 
                            flex items-center justify-center font-bold text-lg select-none
                            hover:bg-amber-50 active:bg-amber-100 
                            hover:border-amber-300 active:border-amber-400
                            transition-all duration-200 ease-in-out
                            shadow-sm hover:shadow active:shadow-inner
                            cursor-pointer hover:scale-110 transform active:scale-95"
                        >
                          -
                        </button>
                        <span className="text-gray-800 font-medium text-lg w-6 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full bg-white border-2 border-amber-200 text-amber-700 
                            flex items-center justify-center font-bold text-lg select-none
                            hover:bg-amber-50 active:bg-amber-100 
                            hover:border-amber-300 active:border-amber-400
                            transition-all duration-200 ease-in-out
                            shadow-sm hover:shadow active:shadow-inner
                            cursor-pointer hover:scale-110 transform active:scale-95"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-gray-800 font-semibold text-xl tabular-nums">
                        {(item.price * item.quantity).toLocaleString()} <span className="text-sm font-medium text-gray-500">MAD</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl border border-amber-100 p-8 shadow-md hover:shadow-lg transition-all duration-300 sticky top-4">
              <h2 className="text-2xl text-gray-800 font-bold mb-6">{t('cartTitle')}</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>{t('total')}</span>
                  <span className="tabular-nums">{total.toLocaleString()} MAD</span>
                </div>
              </div>

              <div className="border-t border-amber-100 pt-4 mb-6">
                <div className="flex justify-between text-gray-800 text-xl font-bold">
                  <span>{t('total')}</span>
                  <span className="tabular-nums">{total.toLocaleString()} <span className="text-sm font-medium text-gray-500">MAD</span></span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/checkout"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full 
                    py-4 px-6 text-center font-medium text-lg block 
                    hover:from-amber-500 hover:to-amber-600 
                    active:from-amber-700 active:to-amber-800
                    transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                    shadow-lg shadow-amber-600/20 hover:shadow-amber-600/30"
                >
                  {t('checkout')}
                </Link>

                <button 
                  onClick={clearCart}
                  className="w-full px-6 py-3 bg-white text-red-500 rounded-full font-medium 
                    border-2 border-red-200 hover:border-red-500 hover:bg-red-50
                    active:bg-red-100 
                    transition-all duration-200 ease-in-out
                    cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t('clearCart')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 