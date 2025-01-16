'use client'

import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Language } from '../i18n/translations'

const languageNames = {
  en: 'English',
  fr: 'Français',
  dar: 'الدارجة',
}

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/95 backdrop-blur-xl rounded-full px-4 py-2
          shadow-lg shadow-amber-900/10 border border-amber-100 text-gray-600 hover:text-amber-700 
          transition-all duration-200 ease-out group"
      >
        <div className="relative">
          <svg className="w-5 h-5 transition-transform duration-200 ease-out group-hover:scale-110" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <div className="absolute -inset-2 bg-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 
            transition-opacity duration-200 group-hover:animate-ping-slow"></div>
        </div>
        <span className="text-sm font-medium">{languageNames[language]}</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg 
          border border-gray-100 py-1 min-w-[120px] animate-in slide-in-from-top-2 duration-200">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`w-full px-4 py-2 text-sm text-left hover:bg-amber-50 transition-colors
                ${language === code ? 'text-amber-700 font-medium' : 'text-gray-700'}`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector 