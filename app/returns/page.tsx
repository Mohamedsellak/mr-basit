'use client'

import { useLanguage } from '../i18n/LanguageContext'

export default function ReturnPolicyPage() {
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
            {t('returnPolicyTitle')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-md p-8 space-y-8">
            {/* Policy Description */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {t('returnPolicyDesc')}
              </p>
            </div>

            {/* Return Conditions */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('returnConditions')}
              </h2>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <p className="text-gray-600 mb-4">
                  {t('returnTimeLimit')}
                </p>
              </div>
            </div>

            {/* Return Process */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('returnProcess')}
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-amber-100">
                  <p className="text-gray-600 mb-2">
                    {t('returnContact')}
                  </p>
                  <p className="text-gray-600">
                    {t('returnInstructions')}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-amber-100">
                  <p className="text-gray-600 mb-2">
                    {t('returnRefund')}
                  </p>
                  <p className="text-amber-700">
                    {t('returnDeduction')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 