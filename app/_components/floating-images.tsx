'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface StaticImage {
  id: number
  src: string
  x: number
  y: number
  size: number
  rotation: number
  scale: number
  opacity: number
  zIndex: number
}

const images = [
  '/1.webp',
  '/2.webp',
  '/3.webp',
  '/5.webp',
  '/6.webp',
  '/7.webp',
  '/4.webp',
  '/8.webp',
]

const FloatingImages = () => {
  const [staticImages, setStaticImages] = useState<StaticImage[]>([])

  useEffect(() => {
    const initialImages = images.map((src, i) => ({
      id: i,
      src,
      // Spread images across the full width with better spacing
      x: ((i * (80 / (images.length - 1))) + 10) + (Math.random() * 4 - 2), // 10-90% width
      y: Math.random() * 40, // 0-40% of container height for more vertical spread
      size: Math.random() * 120 + 140, // 140-260px - slightly larger
      rotation: Math.random() * 10 - 5, // -5 to +5 degrees - more subtle rotation
      scale: 0.98 + Math.random() * 0.1,
      opacity: 0.92 + Math.random() * 0.08, // Higher base opacity
      zIndex: Math.floor(Math.random() * 10)
    }))
    setStaticImages(initialImages)
  }, [])

  return (
    <div className="absolute inset-0">
      {/* Images container */}
      <div className="relative w-full h-full max-w-[1400px] mx-auto px-4">
        {staticImages.map((img) => (
          <div
            key={img.id}
            className="absolute transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{
              left: `${img.x}%`,
              top: `${img.y}%`,
              width: `${img.size}px`,
              height: `${img.size}px`,
              transform: `rotate(${img.rotation}deg) scale(${img.scale})`,
              opacity: img.opacity,
              zIndex: img.zIndex,
            }}
          >
            <div className="relative w-full h-full group">
              {/* Glass effect background */}
              <div className="absolute inset-2 rounded-2xl bg-black/5 blur-md transform transition-transform duration-500 group-hover:scale-105" />
              
              {/* Image container */}
              <div className="relative h-full rounded-2xl p-3 bg-white/[0.02] backdrop-blur-[2px]
                shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:shadow-[0_12px_40px_rgb(0,0,0,0.16)]
                border border-white/[0.05] group-hover:border-white/[0.08]
                transition-all duration-500 ease-out">
                <Image
                  src={img.src}
                  alt={`Product ${img.id + 1}`}
                  fill
                  className="object-contain p-2 transition-all duration-500
                    group-hover:brightness-105 group-hover:saturate-[1.02]"
                  sizes="(max-width: 768px) 140px, 260px"
                  priority
                />
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FloatingImages