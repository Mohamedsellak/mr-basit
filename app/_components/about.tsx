'use client'

import Image from 'next/image'
import { useLanguage } from '../i18n/LanguageContext'

const AboutSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-amber-50 to-white">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-amber-700 text-lg font-medium tracking-[0.2em] uppercase mb-4">
            {t('aboutTitle')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('aboutTitle')}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              {t('aboutDescription')}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 border border-amber-200 rounded-xl bg-white shadow-sm">
                <div className="text-3xl font-bold text-amber-700 mb-2">20+</div>
                <div className="text-sm text-gray-600">Master Artisans</div>
              </div>
              <div className="text-center p-4 border border-amber-200 rounded-xl bg-white shadow-sm">
                <div className="text-3xl font-bold text-amber-700 mb-2">100+</div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/6.webp"
              alt="Moroccan Craftsman at Work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 