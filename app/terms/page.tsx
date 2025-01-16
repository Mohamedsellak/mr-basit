'use client'

import { useLanguage } from '../i18n/LanguageContext'

interface Section {
  title: string;
  items: string[];
}

export default function TermsPage() {
  const { t } = useLanguage()
  
  const sections: Section[] = [
    {
      title: t('termsAccount') as string,
      items: t('accountTerms', { returnObjects: true }) as string[]
    },
    {
      title: t('termsProducts') as string,
      items: t('productTerms', { returnObjects: true }) as string[]
    },
    {
      title: t('termsPayment') as string,
      items: t('paymentTerms', { returnObjects: true }) as string[]
    },
    {
      title: t('termsShipping') as string,
      items: t('shippingTerms', { returnObjects: true }) as string[]
    },
    {
      title: t('termsReturns') as string,
      items: t('returnTerms', { returnObjects: true }) as string[]
    },
    {
      title: t('termsLiability') as string,
      items: t('liabilityTerms', { returnObjects: true }) as string[]
    }
  ]
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white relative">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            {t('termsTitle')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('termsDesc')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-md p-8 space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h2>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {section.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 