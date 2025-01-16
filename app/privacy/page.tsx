'use client'

import { useLanguage } from '../i18n/LanguageContext'

export default function PrivacyPage() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white relative">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[url('/moroccan-pattern-dark.png')] bg-repeat bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            {t('privacyPolicy')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-md p-8 space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('introduction')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('privacyIntro')}
              </p>
            </section>

            {/* Information Collection */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('informationCollection')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {t('informationCollectionDesc')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>{t('personalInfo')}</li>
                  <li>{t('contactInfo')}</li>
                  <li>{t('shippingInfo')}</li>
                  <li>{t('paymentInfo')}</li>
                </ul>
              </div>
            </section>

            {/* Information Usage */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('informationUsage')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('informationUsageDesc')}
              </p>
            </section>

            {/* Information Protection */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('informationProtection')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('informationProtectionDesc')}
              </p>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('cookies')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('cookiesDesc')}
              </p>
            </section>

            {/* Third Party Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('thirdPartyServices')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('thirdPartyServicesDesc')}
              </p>
            </section>

            {/* Contact */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('contact')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('privacyContact')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 