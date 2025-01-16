'use client'

import { FormEvent, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const { t } = useLanguage()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission
    setTimeout(() => setFormStatus('sent'), 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]" />
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-amber-700/20 blur-3xl animate-gradient" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-amber-700 text-lg font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            {t('contact')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('contactTitle')}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Left Column - Social Media & Info */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white p-8 rounded-2xl border border-amber-100 hover:border-amber-200 transition-all duration-200 backdrop-blur-sm shadow-sm">
              <h4 className="text-gray-800 text-xl font-semibold mb-6">{t('contactTitle')}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contactTitle')}</p>
                    <p className="text-gray-800">123 Business Ave, Suite 100</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contactTitle')}</p>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('email')}</p>
                    <p className="text-gray-800">contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white p-8 rounded-2xl border border-amber-100 hover:border-amber-200 transition-all duration-200 backdrop-blur-sm shadow-sm">
              <h4 className="text-gray-800 text-xl font-semibold mb-6">{t('contactTitle')}</h4>
              <div className="grid grid-cols-3 gap-4">
                <a href="#" className="group flex flex-col items-center space-y-2 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-200">
                    <FaFacebookF className="w-5 h-5" />
                  </div>
                  <span className="text-xs">Facebook</span>
                </a>
                <a href="#" className="group flex flex-col items-center space-y-2 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-200">
                    <FaTwitter className="w-5 h-5" />
                  </div>
                  <span className="text-xs">Twitter</span>
                </a>
                <a href="#" className="group flex flex-col items-center space-y-2 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-200">
                    <FaInstagram className="w-5 h-5" />
                  </div>
                  <span className="text-xs">Instagram</span>
                </a>
                <a href="#" className="group flex flex-col items-center space-y-2 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-200">
                    <FaLinkedinIn className="w-5 h-5" />
                  </div>
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a href="#" className="group flex flex-col items-center space-y-2 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-200">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <span className="text-xs">WhatsApp</span>
                </a>
                <a href="#" className="group flex flex-col items-center space-y-2 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-200">
                    <FaTiktok className="w-5 h-5" />
                  </div>
                  <span className="text-xs">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-amber-100 hover:border-amber-200 transition-all duration-200 backdrop-blur-sm shadow-sm">
            <h4 className="text-gray-800 text-xl font-semibold mb-6">{t('contactDescription')}</h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-600"
                  >
                    {t('name')}
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-amber-100 rounded-xl 
                      text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent 
                      hover:border-amber-200 transition-all duration-200"
                    placeholder={t('name')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-600"
                  >
                    {t('email')}
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-amber-100 rounded-xl 
                      text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent 
                      hover:border-amber-200 transition-all duration-200"
                    placeholder={t('email')}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-600"
                >
                  {t('message')}
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-amber-100 rounded-xl 
                    text-gray-800 placeholder-gray-400 resize-none
                    focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent 
                    hover:border-amber-200 transition-all duration-200"
                  placeholder={t('message')}
                  required
                />
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  className="relative px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-medium 
                    hover:from-amber-500 hover:to-amber-600 active:from-amber-700 active:to-amber-800 
                    disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2
                    focus:ring-offset-white
                    transition-all duration-200
                    transform hover:scale-105 active:scale-95 group"
                >
                  <span className={`inline-flex items-center transition-all duration-200 ${formStatus === 'sending' ? 'opacity-0' : 'opacity-100'}`}>
                    {formStatus === 'sent' ? t('send') : t('send')}
                  </span>
                  {formStatus === 'sending' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 