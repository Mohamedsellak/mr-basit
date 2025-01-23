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
      // Adjusted positioning for better responsiveness
      x: ((i * (75 / (images.length - 1))) + 12.5), // More centered spread
      y: Math.random() * 35 + 5, // 5-40% height with padding from top
      size: Math.random() * 140 + 160, // 160-300px base size
      rotation: Math.random() * 8 - 4, // -4 to +4 degrees
      scale: 0.98 + Math.random() * 0.08,
      opacity: 0.94 + Math.random() * 0.06,
      zIndex: Math.floor(Math.random() * 10)
    }))
    setStaticImages(initialImages)
  }, [])

  return (
    <div className="absolute inset-0">
      {/* Responsive container with better max-width handling */}
      <div className="relative w-full h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {staticImages.map((img) => (
          <div
            key={img.id}
            className="absolute transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2"
            style={{
              left: `${img.x}%`,
              top: `${img.y}%`,
              width: `clamp(120px, ${img.size}px, 25vw)`, // Responsive size
              height: `clamp(120px, ${img.size}px, 25vw)`, // Responsive size
              transform: `rotate(${img.rotation}deg) scale(${img.scale})`,
              opacity: img.opacity,
              zIndex: img.zIndex,
            }}
          >
            <div className="relative w-full h-full group">
              {/* Enhanced glass effect */}
              <div className="absolute inset-2 rounded-2xl bg-black/10 blur-lg transform 
                transition-all duration-500 group-hover:scale-105 group-hover:bg-black/15" />
              
              {/* Enhanced image container */}
              <div className="relative h-full rounded-2xl p-3 
                bg-gradient-to-b from-white/[0.07] to-transparent
                backdrop-blur-[3px]
                shadow-[0_8px_32px_rgb(0,0,0,0.12)] group-hover:shadow-[0_16px_48px_rgb(0,0,0,0.18)]
                border border-white/[0.08] group-hover:border-white/[0.12]
                transition-all duration-500 ease-out">
                <Image
                  src={img.src}
                  alt={`Product ${img.id + 1}`}
                  fill
                  className="object-contain p-2 transition-all duration-500
                    group-hover:brightness-110 group-hover:saturate-[1.05]
                    group-hover:contrast-[1.02]"
                  sizes="(max-width: 640px) 120px,
                         (max-width: 768px) 160px,
                         (max-width: 1024px) 200px,
                         300px"
                  priority
                />
              </div>

              {/* Enhanced hover effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
                bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent
                group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FloatingImages