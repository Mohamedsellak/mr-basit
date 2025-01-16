'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Traditional Moroccan Lamp",
    price: 1299,
    image: "/1.webp",
    category: "Lighting"
  },
  {
    id: 2,
    name: "Handwoven Berber Carpet",
    price: 2499,
    image: "/2.webp",
    category: "Textiles"
  },
  {
    id: 3,
    name: "Ceramic Tea Set",
    price: 899,
    image: "/3.webp",
    category: "Pottery"
  },
  {
    id: 4,
    name: "Decorative Pillow Cover",
    price: 599,
    image: "/4.webp",
    category: "Home Decor"
  },
  {
    id: 5,
    name: "Brass Wall Mirror",
    price: 1899,
    image: "/5.webp",
    category: "Decor"
  },
  {
    id: 6,
    name: "Traditional Teapot",
    price: 799,
    image: "/6.webp",
    category: "Kitchen"
  }
]

const FeaturedProducts = () => {
  const { t } = useLanguage()
  const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({})

  const addToCart = (product: Product) => {
    // Get existing cart
    const existingCart = localStorage.getItem('cart')
    let cart = existingCart ? JSON.parse(existingCart) : []

    // Check if product already exists in cart
    const existingItem = cart.find((item: any) => item.id === product.id)

    if (existingItem) {
      // If exists, increment quantity
      cart = cart.map((item: any) => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      // If not exists, add new item with quantity 1
      cart.push({ ...product, quantity: 1 })
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart))

    // Show visual feedback
    setAddedItems(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }))
    }, 1500)

    // Trigger events for cart component to update
    window.dispatchEvent(new Event('storage'))
    window.dispatchEvent(new Event('cartUpdated'))
  }
  
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-amber-50">
      {/* Moroccan Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-700 text-lg font-medium tracking-[0.2em] uppercase mb-4">
            {t('shop')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('featuredProducts')}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id}>
              <div className="bg-white backdrop-blur-sm rounded-2xl border border-amber-100 
                overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Product Image */}
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-amber-700 text-sm tracking-wider uppercase font-medium">
                      {product.category}
                    </p>
                    <h4 className="text-xl text-gray-800 font-semibold line-clamp-2">
                      {product.name}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl text-gray-700 font-medium">
                      {product.price.toLocaleString()} <span className="text-sm">MAD</span>
                    </p>
                    <button 
                      className={`px-6 py-2 bg-gradient-to-r text-white rounded-full font-medium text-sm
                        transition-all duration-300 relative
                        ${addedItems[product.id]
                          ? 'from-green-600 to-green-700 hover:from-green-500 hover:to-green-600'
                          : 'from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600'
                        }`}
                      onClick={() => addToCart(product)}
                    >
                      <span className={`inline-flex items-center gap-2 transition-transform duration-300 ${
                        addedItems[product.id] ? 'scale-0' : 'scale-100'
                      }`}>
                        {t('addToCart')}
                      </span>
                      <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                        addedItems[product.id] ? 'scale-100' : 'scale-0'
                      }`}>
                        ✓
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 border border-amber-600 
              text-amber-700 rounded-full hover:bg-amber-50 transition-colors duration-300"
          >
            {t('viewDetails')}
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 