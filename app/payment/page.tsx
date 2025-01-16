'use client'

import { useLanguage } from '../i18n/LanguageContext'

export default function PaymentMethodsPage() {
  const { t } = useLanguage()
  
  const codSteps = [
    t('placeOrderStep'),
    t('confirmOrderStep'),
    t('payOnDeliveryStep')
  ]

  const bankSteps = [
    t('chooseTransferStep'),
    t('getBankDetailsStep'),
    t('sendConfirmationStep'),
    t('processOrderStep')
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
            {t('paymentTitle')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-md p-8 space-y-8">
            {/* Cash on Delivery */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('paymentCodTitle')}
              </h2>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">💰</span>
                  <div>
                    <p className="text-gray-600">
                      {t('paymentCodDesc')}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">
                    {t('paymentProcess')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {codSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Bank Transfer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('bankTransfer')}
              </h2>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🏦</span>
                  <div>
                    <p className="text-gray-600">
                      {t('bankTransferDesc')}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">
                    {t('paymentProcess')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {bankSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Available Options */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {t('paymentOptions')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-amber-100 flex items-center gap-4">
                  <span className="text-4xl">💳</span>
                  <span className="text-gray-600">{t('bankTransfer')}</span>
                </div>
                <div className="bg-white rounded-xl p-6 border border-amber-100 flex items-center gap-4">
                  <span className="text-4xl">💰</span>
                  <span className="text-gray-600">{t('paymentCodTitle')}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 