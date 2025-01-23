'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const FloatingAd = ({ imageUrl, onClose, index, style }: {
  imageUrl: string
  onClose: () => void
  index: number
  style: React.CSSProperties
}) => {
  return (
    <div 
      className="absolute"
      style={{ 
        animationDelay: `${index * 0.2}s`,
        ...style
      }}
    >
      <div className="animate-bounce-slow group">
        <div className="relative border-2 border-orange-200/70 rounded-xl p-2 
                      transition-all duration-500 ease-out
                      hover:scale-105 hover:border-orange-300 hover:z-50
                      hover:shadow-[0_0_15px_rgba(251,146,60,0.3)]">
          <button 
            onClick={onClose}
            className="absolute -top-3 -right-3 bg-red-500/90 hover:bg-red-600 text-white 
                      rounded-full w-7 h-7 flex items-center justify-center text-lg
                      transition-all duration-300 opacity-0 group-hover:opacity-100
                      shadow-md z-[60] hover:scale-110"
          >
            ×
          </button>
          <div className="relative w-[160px] h-[110px] overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt="Advertisement"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-105"
              sizes="160px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Ads() {
  const [mounted, setMounted] = useState(false)
  const [ads, setAds] = useState([
    { 
      id: 1, 
      imageUrl: '/1.webp',
      style: { 
        transform: 'rotate(-8deg)',
        right: '20px',
        top: '90px',
        zIndex: 30
      }
    },
    { 
      id: 2, 
      imageUrl: '/2.webp',
      style: { 
        transform: 'rotate(12deg)',
        right: '50px',
        top: '120px',
        zIndex: 20
      }
    },
    { 
      id: 3, 
      imageUrl: '/3.webp',
      style: { 
        transform: 'rotate(-15deg)',
        right: '100px',
        top: '60px',
        zIndex: 10
      }
    },
  ])

  useEffect(() => {
    setMounted(true)
  }, [])

  const removeAd = (id: number) => {
    setAds(prevAds => prevAds.filter(ad => ad.id !== id))
  }

  if (!mounted) return null

  return (
    <div className="fixed top-0 right-0 z-[50] animate-fade-in">
      {ads.map((ad, index) => (
        <FloatingAd
          key={ad.id}
          imageUrl={ad.imageUrl}
          onClose={() => removeAd(ad.id)}
          index={index}
          style={ad.style}
        />
      ))}
    </div>
  )
}
