'use client'

import { useLanguage } from '../i18n/LanguageContext'

export default function CodPage() {
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
            {t('codPageTitle')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-md p-8 space-y-8">
            {/* Delivery Process */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('deliveryProcess')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('codPageDesc')}
              </p>
            </div>

            {/* Shipping Methods */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('shippingMethods')}
              </h2>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  {t('privateDelivery')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('privateDeliveryDescription')}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-amber-700">
                    <span className="text-2xl">⚡️</span>
                    <span className="font-medium">1-3 {t('days')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <span className="text-2xl">🚚</span>
                    <span className="font-medium">{t('doorToDoor')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How it Works */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('howItWorks')}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white rounded-xl p-6 border border-amber-100 text-center">
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t('orderStep')}</h3>
                  <p className="text-gray-600 text-sm">{t('orderStepDescription')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-amber-100 text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t('confirmStep')}</h3>
                  <p className="text-gray-600 text-sm">{t('confirmStepDescription')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-amber-100 text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t('payStep')}</h3>
                  <p className="text-gray-600 text-sm">{t('payStepDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 