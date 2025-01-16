'use client'

import Image from 'next/image'
import Link from 'next/link'
import FloatingImages from './floating-images'
import Bubbles from './bubbles'
import { useLanguage } from '../i18n/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white min-h-[85vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:24px_24px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/20 to-transparent"></div>
        <Bubbles />
      </div>
      
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <span className="text-amber-700 text-sm font-medium tracking-[0.2em] uppercase 
                inline-block py-1.5 px-3 bg-amber-50/80 rounded-[1rem] rounded-br-[0.2rem] rounded-tl-[0.2rem]
                animate-scale-pulse"
              >
                {t('heroTitle')}
              </span>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-800 inline-block animate-slide-in-right [animation-delay:200ms]">Mr. Basit's</span> 
                <span className="block mt-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 
                  text-transparent bg-clip-text animate-gradient animate-slide-in-right [animation-delay:400ms]">
                  {t('heroTitle')}
                </span>
              </div>
            </div>
            
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl
              animate-slide-in-right [animation-delay:600ms]">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right [animation-delay:800ms]">
              <Link 
                href="#products" 
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 
                  bg-gradient-to-r from-amber-600 to-amber-700 
                  text-white rounded-[1rem] rounded-br-[0.5rem] rounded-tl-[2rem]
                  hover:from-amber-500 hover:to-amber-600 
                  transition-all duration-300 text-sm font-medium
                  shadow-lg shadow-amber-600/10 hover:shadow-amber-500/20 transform hover:-translate-y-0.5
                  hover:scale-105"
              >
                <span>{t('shopNow')}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="#about" 
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 
                  text-amber-700 hover:text-amber-800 transition-colors duration-300 text-sm
                  hover:scale-105 rounded-[1rem] rounded-tr-[0.5rem] rounded-bl-[2rem]
                  border border-amber-200 hover:border-amber-300 hover:bg-amber-50/50"
              >
                {t('about')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative h-[400px] 
              rounded-none rounded-tr-[10rem] rounded-bl-[8rem] overflow-hidden 
              animate-float 
              shadow-[0_20px_50px_-10px_rgba(251,146,60,0.15),_-20px_0_30px_-15px_rgba(251,146,60,0.2),_20px_0_30px_-15px_rgba(251,146,60,0.2)]
              hover:shadow-[0_20px_50px_-10px_rgba(251,146,60,0.25),_-25px_0_35px_-15px_rgba(251,146,60,0.3),_25px_0_35px_-15px_rgba(251,146,60,0.3)]
              transition-shadow duration-500
              before:absolute before:inset-0 before:bg-gradient-to-t before:from-amber-900/20 
              before:via-amber-800/5 before:to-transparent before:z-10
              after:absolute after:inset-0 after:bg-amber-500/10 after:mix-blend-overlay
              border-2 border-amber-100/50">
              <Image
                src="/8.webp"
                alt="Moroccan Crafts"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100/40 rounded-tr-[6rem] 
              blur-2xl animate-glow shadow-[inset_-15px_0_20px_rgba(251,146,60,0.2)]"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200/40 rounded-bl-[6rem] 
              blur-2xl animate-glow [animation-delay:2s] shadow-[inset_15px_0_20px_rgba(251,146,60,0.2)]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-24 h-24 bg-amber-300/30 rounded-tr-[4rem] 
              blur-2xl animate-glow [animation-delay:1s] shadow-[inset_-10px_0_15px_rgba(251,146,60,0.2)]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-24 h-24 bg-amber-400/30 rounded-bl-[4rem] 
              blur-2xl animate-glow [animation-delay:3s] shadow-[inset_10px_0_15px_rgba(251,146,60,0.2)]"></div>
          </div>
        </div>

        {/* Floating Images Section */}
        <div className="relative h-[250px] mt-12 animate-fade-in">
          <FloatingImages />
        </div>
      </div>
    </section>
  )
}

export default Hero
