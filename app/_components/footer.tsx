'use client'

import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export default function Footer() {
  const { t } = useLanguage()

  const footerSections: FooterSection[] = [
    {
      title: String(t('aboutStore')),
      links: [
        { label: String(t('aboutStore')), href: '/#about' },
        { label: String(t('paymentMethods')), href: '/cod' },
        { label: String(t('shippingDelivery')), href: '/shipping' },
        { label: String(t('faq')), href: '/faq' },
      ]
    },
    {
      title: String(t('termsConditions')),
      links: [
        { label: String(t('termsConditions')), href: '/terms' },
        { label: String(t('returnPolicy')), href: '/returns' },
        { label: String(t('privacyPolicy')), href: '/privacy' },
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-white to-amber-50 relative">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <h3 className="text-2xl font-bold text-gray-800">
                {String(t('heroTitle'))}
              </h3>
              <p className="text-sm text-amber-700 font-medium">
                {String(t('heroTitle'))}
              </p>
            </Link>
            <p className="text-gray-600 text-sm">
              {String(t('aboutDescription'))}
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-gray-800 font-semibold">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-amber-700 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-gray-800 font-semibold">
              {String(t('contact'))}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-amber-700">📍</span>
                <span>{t('contactTitle')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-700">📱</span>
                <span>{t('contactTitle')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-700">✉️</span>
                <span>{t('email')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-amber-100">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} {String(t('heroTitle'))}. {String(t('allRightsReserved'))}
          </p>
        </div>
      </div>
    </footer>
  )
} 