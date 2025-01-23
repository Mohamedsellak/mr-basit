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
    <section id="contact" className="py-20 bg-gradient-to-b from-white/30 to-amber-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-800 text-lg font-medium tracking-[0.2em] uppercase mb-4 
            inline-block py-2 px-4 rounded-lg bg-white/50 backdrop-blur-sm border border-amber-200/30">
            {t('contact')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contactTitle')}
          </h3>
          <div className="w-24 h-1 bg-amber-700/70 mx-auto relative">
            <div className="absolute -left-3 -top-1 w-3 h-3 rounded-full bg-amber-600/70"></div>
            <div className="absolute -right-3 -top-1 w-3 h-3 rounded-full bg-amber-600/70"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Left Column - Social Media & Info */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-100/50 
              hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl
              group">
              <h4 className="text-gray-900 text-xl font-semibold mb-6">{t('contactTitle')}</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="w-12 h-12 rounded-xl bg-amber-100/50 flex items-center justify-center text-amber-700
                    group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-800 font-medium">{t('contactTitle')}</p>
                    <p className="text-gray-800">123 Business Ave, Suite 100</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="w-12 h-12 rounded-xl bg-amber-100/50 flex items-center justify-center text-amber-700
                    group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-800 font-medium">{t('contactTitle')}</p>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="w-12 h-12 rounded-xl bg-amber-100/50 flex items-center justify-center text-amber-700
                    group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-800 font-medium">{t('email')}</p>
                    <p className="text-gray-800">contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-100/50 
              hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
              <h4 className="text-gray-900 text-xl font-semibold mb-6">{t('contactTitle')}</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: FaFacebookF, name: 'Facebook' },
                  { icon: FaTwitter, name: 'Twitter' },
                  { icon: FaInstagram, name: 'Instagram' },
                  { icon: FaLinkedinIn, name: 'LinkedIn' },
                  { icon: FaWhatsapp, name: 'WhatsApp' },
                  { icon: FaTiktok, name: 'TikTok' }
                ].map((social, index) => (
                  <a key={index} href="#" className="group flex flex-col items-center space-y-2 text-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-amber-100/50 flex items-center justify-center
                      group-hover:bg-amber-200/50 group-hover:scale-110 group-hover:text-amber-700 
                      transition-all duration-300">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-100/50 
            hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
            <h4 className="text-gray-900 text-xl font-semibold mb-6">{t('contactDescription')}</h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t('name')}
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full px-4 py-3 bg-white/60 border border-amber-100/50 rounded-xl 
                      text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-transparent 
                      hover:border-amber-200/50 transition-all duration-300"
                    placeholder={String(t('name'))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t('email')}
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full px-4 py-3 bg-white/60 border border-amber-100/50 rounded-xl 
                      text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-transparent 
                      hover:border-amber-200/50 transition-all duration-300"
                    placeholder={String(t('email'))}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700"
                >
                  {t('message')}
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/60 border border-amber-100/50 rounded-xl 
                    text-gray-800 placeholder-gray-400 resize-none
                    focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-transparent 
                    hover:border-amber-200/50 transition-all duration-300"
                  placeholder={String(t('message'))}
                  required
                />
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  className="relative px-8 py-3 bg-amber-600/90 hover:bg-amber-700/90 text-white 
                    rounded-xl font-medium backdrop-blur-sm
                    disabled:bg-gray-400/90 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:ring-offset-2
                    focus:ring-offset-white/80
                    transition-all duration-300
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