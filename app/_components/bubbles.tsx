'use client'
import { useState, useEffect } from 'react'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 100, // Start below the viewport
      size: Math.random() * 30 + 10,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.3 + 0.1
    }))
    setBubbles(initialBubbles)

    // Animation loop
    const interval = setInterval(() => {
      setBubbles(prev => prev.map(bubble => ({
        ...bubble,
        y: bubble.y - bubble.speed,
        // Reset bubble position when it goes off screen
        ...(bubble.y < -20 ? {
          y: 120,
          x: Math.random() * 100,
          size: Math.random() * 30 + 10,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.3 + 0.1
        } : {})
      })))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-amber-500"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transform: `scale(${1 + Math.sin(bubble.y / 30) * 0.2})`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      ))}
    </div>
  )
}

export default Bubbles 