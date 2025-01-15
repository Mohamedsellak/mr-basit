'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CartItem {
  id: number
  quantity: number
}

const Navbar = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const pathname = usePathname()

  // Cart state management
  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }

    // Listen for cart updates
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cart' && e.newValue) {
        setCartItems(JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm mx-auto px-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-lg shadow-amber-900/10 border border-amber-100">
        <div className="py-2 px-6">
          <div className="flex items-center justify-around h-16 relative">
            {/* Home */}
            <Link 
              href="/"
              className="flex flex-col items-center space-y-1.5 text-gray-600 hover:text-amber-700 
                transition-all duration-200 ease-out group relative py-1.5"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform duration-200 ease-out group-hover:scale-110" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <div className="absolute -inset-2 bg-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200 group-hover:animate-ping-slow"></div>
              </div>
              <span className="text-xs font-medium tracking-wide">Home</span>
            </Link>

            {/* Products */}
            <Link
              href="/#products"
              className="flex flex-col items-center space-y-1.5 text-gray-600 hover:text-amber-700 
                transition-all duration-200 ease-out group relative py-1.5"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform duration-200 ease-out group-hover:scale-110" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <div className="absolute -inset-2 bg-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200 group-hover:animate-ping-slow"></div>
              </div>
              <span className="text-xs font-medium tracking-wide">Shop</span>
            </Link>

            {/* Cart */}
            <div className="relative -top-8">
              <Link 
                href="/cart"
                className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl 
                  shadow-amber-500/20 transition-all duration-300 ease-out transform hover:scale-110 active:scale-95
                  hover:shadow-amber-500/30 hover:-translate-y-1 active:translate-y-0
                  ${pathname === '/cart' 
                    ? 'bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800' 
                    : 'bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700'
                  }`}
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full 
                    flex items-center justify-center shadow-lg shadow-red-500/30 border border-red-400/50
                    animate-in slide-in-from-top-2 duration-200 font-semibold">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>

            {/* About */}
            <Link
              href="/#about"
              className="flex flex-col items-center space-y-1.5 text-gray-600 hover:text-amber-700 
                transition-all duration-200 ease-out group relative py-1.5"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform duration-200 ease-out group-hover:scale-110" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="absolute -inset-2 bg-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200 group-hover:animate-ping-slow"></div>
              </div>
              <span className="text-xs font-medium tracking-wide">About</span>
            </Link>

            {/* Contact */}
            <Link
              href="/#contact"
              className="flex flex-col items-center space-y-1.5 text-gray-600 hover:text-amber-700 
                transition-all duration-200 ease-out group relative py-1.5"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform duration-200 ease-out group-hover:scale-110" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute -inset-2 bg-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200 group-hover:animate-ping-slow"></div>
              </div>
              <span className="text-xs font-medium tracking-wide">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 