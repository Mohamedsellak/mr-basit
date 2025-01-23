'use client'

import Image from 'next/image'
import { useLanguage } from '../i18n/LanguageContext'

const AboutSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-amber-50/30 to-white/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-amber-800 text-lg font-medium tracking-[0.2em] uppercase mb-4">
            {t('aboutTitle')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('aboutTitle')}
          </h3>
          <div className="w-24 h-1 bg-amber-700/70 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-800">
            <p className="text-lg leading-relaxed backdrop-blur-sm bg-white/40 p-6 rounded-xl">
              {t('aboutDescription')}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 border border-amber-200/50 rounded-xl 
                bg-white/70 backdrop-blur-sm shadow-sm
                hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-amber-800 mb-2">20+</div>
                <div className="text-sm text-gray-800">Master Artisans</div>
              </div>
              <div className="text-center p-4 border border-amber-200/50 rounded-xl 
                bg-white/70 backdrop-blur-sm shadow-sm
                hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-amber-800 mb-2">100+</div>
                <div className="text-sm text-gray-800">Unique Designs</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg
            before:absolute before:inset-0 before:bg-gradient-to-t 
            before:from-black/30 before:to-transparent before:z-10
            after:absolute after:inset-0 after:bg-amber-500/10 after:mix-blend-overlay">
            <Image
              src="/6.webp"
              alt="Moroccan Craftsman at Work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection