export type Language = 'en' | 'fr' | 'dar'

// Separate types for string-only translations and array translations
export type StringTranslations = {
  // Navigation
  home: string
  shop: string
  cart: string
  about: string
  contact: string
  
  // Hero Section
  heroTitle: string
  heroSubtitle: string
  shopNow: string
  
  // About Section
  aboutTitle: string
  aboutDescription: string
  
  // Products Section
  featuredProducts: string
  addToCart: string
  viewDetails: string
  price: string
  
  // Cart
  cartTitle: string
  emptyCart: string
  total: string
  checkout: string
  removeItem: string
  clearCart: string
  
  // Contact
  contactTitle: string
  contactDescription: string
  name: string
  email: string
  message: string
  send: string
  
  // COD Page
  codPageTitle: string
  codPageDesc: string
  deliveryProcess: string
  shippingMethods: string
  privateDelivery: string
  privateDeliveryDescription: string
  days: string
  doorToDoor: string
  howItWorks: string
  orderStep: string
  orderStepDescription: string
  confirmStep: string
  confirmStepDescription: string
  payStep: string
  payStepDescription: string
  
  // Footer
  aboutStore: string
  paymentMethods: string
  shippingDelivery: string
  faq: string
  termsConditions: string
  returnPolicy: string
  privacyPolicy: string
  allRightsReserved: string

  // Privacy Policy
  introduction: string
  privacyIntro: string
  informationCollection: string
  informationCollectionDesc: string
  personalInfo: string
  contactInfo: string
  shippingInfo: string
  paymentInfo: string
  informationUsage: string
  informationUsageDesc: string
  informationProtection: string
  informationProtectionDesc: string
  cookies: string
  cookiesDesc: string
  thirdPartyServices: string
  thirdPartyServicesDesc: string
  privacyContact: string

  // Return Policy
  returnPolicyTitle: string
  returnPolicyDesc: string
  returnConditions: string
  returnTimeLimit: string
  returnProcess: string
  returnContact: string
  returnInstructions: string
  returnRefund: string
  returnDeduction: string

  // Terms of Use
  termsTitle: string
  termsDesc: string
  termsAccount: string
  termsProducts: string
  termsPayment: string
  termsShipping: string
  termsReturns: string
  termsLiability: string

  // Payment Methods
  paymentTitle: string
  paymentCodTitle: string
  paymentCodDesc: string
  bankTransfer: string
  bankTransferDesc: string
  paymentProcess: string
  paymentOptions: string
  placeOrderStep: string
  confirmOrderStep: string
  payOnDeliveryStep: string
  chooseTransferStep: string
  getBankDetailsStep: string
  sendConfirmationStep: string
  processOrderStep: string
}

export type ArrayTranslations = {
  accountTerms: string[]
  productTerms: string[]
  paymentTerms: string[]
  shippingTerms: string[]
  returnTerms: string[]
  liabilityTerms: string[]
}

export type TranslationSet = StringTranslations & ArrayTranslations

export type Translations = {
  [key in Language]: TranslationSet
}

export const translations: Translations = {
  en: {
    // Navigation
    home: 'Home',
    shop: 'Shop',
    cart: 'Cart',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Authentic Moroccan Crafts',
    heroSubtitle: 'Discover the beauty of traditional Moroccan artistry',
    shopNow: 'Shop Now',
    
    // About Section
    aboutTitle: 'About Us',
    aboutDescription: 'We bring you the finest Moroccan craftsmanship, carefully selected from skilled artisans across Morocco.',
    
    // Products Section
    featuredProducts: 'Featured Products',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    price: 'Price',
    
    // Cart
    cartTitle: 'Your Cart',
    emptyCart: 'Your cart is empty',
    total: 'Total',
    checkout: 'Checkout',
    removeItem: 'Remove',
    clearCart: 'Clear Cart',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Get in touch with us for any questions',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    
    // COD Page
    codPageTitle: 'Cash on Delivery (COD)',
    codPageDesc: 'Pay cash when you receive your order at your doorstep.',
    deliveryProcess: 'Delivery Process',
    shippingMethods: 'Available Shipping Methods',
    privateDelivery: 'Private Delivery Company',
    privateDeliveryDescription: 'Fast service that ensures delivery to your address within 1 to 3 days, depending on your location.',
    days: 'Days',
    doorToDoor: 'Door to Door',
    howItWorks: 'How it Works',
    orderStep: 'Place Order',
    orderStepDescription: 'Choose your products and place your order through our website',
    confirmStep: 'Confirmation',
    confirmStepDescription: 'We will call you to confirm your order and delivery details',
    payStep: 'Payment',
    payStepDescription: 'Pay cash when you receive your order at your doorstep',
    
    // Footer
    aboutStore: 'About Store',
    paymentMethods: 'Payment Methods',
    shippingDelivery: 'Shipping & Delivery',
    faq: 'FAQ',
    termsConditions: 'Terms & Conditions',
    returnPolicy: 'Return Policy',
    privacyPolicy: 'Privacy Policy',
    allRightsReserved: 'All rights reserved.',

    // Privacy Policy
    introduction: 'Introduction',
    privacyIntro: 'This Privacy Policy describes how we collect, use, and protect your personal information when you use our website.',
    informationCollection: 'Information Collection',
    informationCollectionDesc: 'We collect various types of information to provide and improve our services:',
    personalInfo: 'Personal information (name, email)',
    contactInfo: 'Contact information (phone number, address)',
    shippingInfo: 'Shipping information (delivery address)',
    paymentInfo: 'Payment information (payment method)',
    informationUsage: 'Information Usage',
    informationUsageDesc: 'We use your information to process orders, provide customer support, and improve our services.',
    informationProtection: 'Information Protection',
    informationProtectionDesc: 'We implement security measures to protect your personal information from unauthorized access.',
    cookies: 'Cookies',
    cookiesDesc: 'We use cookies to enhance your browsing experience and analyze website traffic.',
    thirdPartyServices: 'Third Party Services',
    thirdPartyServicesDesc: 'We may use third-party services to process payments and deliver products.',
    privacyContact: 'If you have any questions about our privacy policy, please contact us.',

    // Return Policy
    returnPolicyTitle: 'Return Policy',
    returnPolicyDesc: 'Our return and exchange policy is guaranteed for all our customers and includes all products displayed in our store.',
    returnConditions: 'Return Conditions',
    returnTimeLimit: 'Returns within 3 days and exchanges within 7 days from purchase date.',
    returnProcess: 'Return Process',
    returnContact: 'Please contact us through our contact page or phone numbers to request a return or exchange.',
    returnInstructions: 'Please photograph the product and send it along with your city, address, and order number.',
    returnRefund: 'Full refund if the received product differs completely from the product description on our website.',
    returnDeduction: '30% or minimum 25 MAD deduction if customer wants to return without any defect.',

    // Terms of Use
    termsTitle: 'Terms of Use',
    termsDesc: 'By using our website, you agree to these terms and conditions.',
    termsAccount: 'Account Terms',
    termsProducts: 'Product Terms',
    termsPayment: 'Payment Terms',
    termsShipping: 'Shipping Terms',
    termsReturns: 'Returns Terms',
    termsLiability: 'Liability',

    // Payment Methods
    paymentTitle: 'Payment Methods',
    paymentCodTitle: 'Cash on Delivery (COD)',
    paymentCodDesc: 'Pay cash when you receive your order at your doorstep.',
    bankTransfer: 'Bank Transfer',
    bankTransferDesc: 'Pay via bank transfer to our account.',
    paymentProcess: 'Payment Process',
    paymentOptions: 'Available Payment Options',
    placeOrderStep: 'Place your order through our website',
    confirmOrderStep: 'We will confirm your order by phone',
    payOnDeliveryStep: 'Pay cash when you receive your order',
    chooseTransferStep: 'Place your order and choose bank transfer',
    getBankDetailsStep: 'We will send you our bank details',
    sendConfirmationStep: 'Send us the transfer confirmation',
    processOrderStep: 'We will process your order upon payment confirmation',

    accountTerms: [
      'You must be at least 18 years old to create an account',
      'You are responsible for maintaining the security of your account',
      'You must provide accurate and complete information',
      'You must notify us of any unauthorized use of your account'
    ],
    productTerms: [
      'All product images are for illustration purposes only',
      'Product colors may vary slightly from the images shown',
      'We reserve the right to modify product specifications without notice',
      'Product availability is subject to change'
    ],
    paymentTerms: [
      'All prices are in Moroccan Dirham (MAD)',
      'Payment is required at the time of delivery for COD orders',
      'Bank transfer payments must be completed within 24 hours',
      'We do not store any payment card information'
    ],
    shippingTerms: [
      'Delivery times are estimates and not guaranteed',
      'Shipping costs are calculated based on delivery location',
      'We are not responsible for delays caused by customs or carriers',
      'Additional fees may apply for remote locations'
    ],
    returnTerms: [
      'Returns must be initiated within 3 days of delivery',
      'Products must be in original condition and packaging',
      'Shipping costs for returns are the responsibility of the customer',
      'Refunds will be processed within 7 business days'
    ],
    liabilityTerms: [
      'We are not liable for indirect or consequential damages',
      'Our total liability is limited to the purchase price of the product',
      'We do not guarantee the accuracy of product descriptions',
      'We reserve the right to modify these terms at any time'
    ]
  },
  fr: {
    // Navigation
    home: 'Accueil',
    shop: 'Boutique',
    cart: 'Panier',
    about: 'À propos',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Artisanat Marocain Authentique',
    heroSubtitle: 'Découvrez la beauté de l\'artisanat marocain traditionnel',
    shopNow: 'Acheter',
    
    // About Section
    aboutTitle: 'À Propos',
    aboutDescription: 'Nous vous apportons le meilleur de l\'artisanat marocain, soigneusement sélectionné auprès d\'artisans qualifiés à travers le Maroc.',
    
    // Products Section
    featuredProducts: 'Produits Vedettes',
    addToCart: 'Ajouter au Panier',
    viewDetails: 'Voir Détails',
    price: 'Prix',
    
    // Cart
    cartTitle: 'Votre Panier',
    emptyCart: 'Votre panier est vide',
    total: 'Total',
    checkout: 'Commander',
    removeItem: 'Supprimer',
    clearCart: 'Vider le Panier',
    
    // Contact
    contactTitle: 'Contactez-nous',
    contactDescription: 'Contactez-nous pour toute question',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    
    // COD Page
    codPageTitle: 'Paiement à la Livraison',
    codPageDesc: 'Payez en espèces à la réception de votre commande.',
    deliveryProcess: 'Processus de Livraison',
    shippingMethods: 'Méthodes de Livraison Disponibles',
    privateDelivery: 'Société de Livraison Privée',
    privateDeliveryDescription: 'Service rapide qui assure la livraison à votre adresse dans un délai de 1 à 3 jours, selon votre localisation.',
    days: 'Jours',
    doorToDoor: 'Porte à Porte',
    howItWorks: 'Comment ça Marche',
    orderStep: 'Commander',
    orderStepDescription: 'Choisissez vos produits et passez votre commande sur notre site',
    confirmStep: 'Confirmation',
    confirmStepDescription: 'Nous vous appellerons pour confirmer votre commande et les détails de livraison',
    payStep: 'Paiement',
    payStepDescription: 'Payez en espèces à la réception de votre commande',
    
    // Footer
    aboutStore: 'À Propos',
    paymentMethods: 'Modes de Paiement',
    shippingDelivery: 'Livraison',
    faq: 'FAQ',
    termsConditions: 'Conditions',
    returnPolicy: 'Retours',
    privacyPolicy: 'Confidentialité',
    allRightsReserved: 'Tous droits réservés.',

    // Privacy Policy
    introduction: 'Introduction',
    privacyIntro: 'Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles.',
    informationCollection: 'Collecte d\'Informations',
    informationCollectionDesc: 'Nous collectons différents types d\'informations pour fournir et améliorer nos services :',
    personalInfo: 'Informations personnelles (nom, email)',
    contactInfo: 'Informations de contact (téléphone, adresse)',
    shippingInfo: 'Informations de livraison (adresse de livraison)',
    paymentInfo: 'Informations de paiement (mode de paiement)',
    informationUsage: 'Utilisation des Informations',
    informationUsageDesc: 'Nous utilisons vos informations pour traiter les commandes et améliorer nos services.',
    informationProtection: 'Protection des Informations',
    informationProtectionDesc: 'Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles.',
    cookies: 'Cookies',
    cookiesDesc: 'Nous utilisons des cookies pour améliorer votre expérience de navigation.',
    thirdPartyServices: 'Services Tiers',
    thirdPartyServicesDesc: 'Nous pouvons utiliser des services tiers pour traiter les paiements et livrer les produits.',
    privacyContact: 'Si vous avez des questions sur notre politique de confidentialité, contactez-nous.',

    // Return Policy
    returnPolicyTitle: 'Politique de Retour',
    returnPolicyDesc: 'Notre politique de retour et d\'échange est garantie pour tous nos clients et inclut tous les produits affichés dans notre boutique.',
    returnConditions: 'Conditions de Retour',
    returnTimeLimit: 'Retours sous 3 jours et échanges sous 7 jours à partir de la date d\'achat.',
    returnProcess: 'Processus de Retour',
    returnContact: 'Veuillez nous contacter via notre page de contact ou nos numéros de téléphone pour demander un retour ou un échange.',
    returnInstructions: 'Veuillez photographier le produit et l\'envoyer avec votre ville, adresse et numéro de commande.',
    returnRefund: 'Remboursement complet si le produit reçu diffère complètement de la description sur notre site.',
    returnDeduction: 'Déduction de 30% ou minimum 25 MAD si le client souhaite retourner sans défaut.',

    // Terms of Use
    termsTitle: 'Conditions d\'Utilisation',
    termsDesc: 'En utilisant notre site, vous acceptez ces conditions.',
    termsAccount: 'Conditions du Compte',
    termsProducts: 'Conditions des Produits',
    termsPayment: 'Conditions de Paiement',
    termsShipping: 'Conditions de Livraison',
    termsReturns: 'Conditions de Retour',
    termsLiability: 'Responsabilité',

    // Payment Methods
    paymentTitle: 'Modes de Paiement',
    paymentCodTitle: 'Paiement à la Livraison',
    paymentCodDesc: 'Payez en espèces à la réception de votre commande.',
    bankTransfer: 'Virement Bancaire',
    bankTransferDesc: 'Payez par virement bancaire sur notre compte.',
    paymentProcess: 'Processus de Paiement',
    paymentOptions: 'Options de Paiement Disponibles',
    placeOrderStep: 'Passez votre commande sur notre site',
    confirmOrderStep: 'Nous confirmerons votre commande par téléphone',
    payOnDeliveryStep: 'Payez en espèces à la réception',
    chooseTransferStep: 'Passez votre commande et choisissez virement bancaire',
    getBankDetailsStep: 'Nous vous enverrons nos coordonnées bancaires',
    sendConfirmationStep: 'Envoyez-nous la confirmation du virement',
    processOrderStep: 'Nous traiterons votre commande après confirmation du paiement',

    accountTerms: [
      'Vous devez avoir au moins 18 ans pour créer un compte',
      'Vous êtes responsable de la sécurité de votre compte',
      'Vous devez fournir des informations exactes et complètes',
      'Vous devez nous signaler toute utilisation non autorisée de votre compte'
    ],
    productTerms: [
      'Toutes les images des produits sont à titre d\'illustration uniquement',
      'Les couleurs des produits peuvent légèrement varier des images montrées',
      'Nous nous réservons le droit de modifier les spécifications sans préavis',
      'La disponibilité des produits est sujette à changement'
    ],
    paymentTerms: [
      'Tous les prix sont en Dirham Marocain (MAD)',
      'Le paiement est requis à la livraison pour les commandes en contre-remboursement',
      'Les virements bancaires doivent être effectués sous 24 heures',
      'Nous ne stockons aucune information de carte de paiement'
    ],
    shippingTerms: [
      'Les délais de livraison sont estimatifs et non garantis',
      'Les frais de livraison sont calculés selon le lieu de livraison',
      'Nous ne sommes pas responsables des retards causés par la douane ou les transporteurs',
      'Des frais supplémentaires peuvent s\'appliquer pour les zones éloignées'
    ],
    returnTerms: [
      'Les retours doivent être initiés dans les 3 jours suivant la livraison',
      'Les produits doivent être dans leur état et emballage d\'origine',
      'Les frais de retour sont à la charge du client',
      'Les remboursements seront traités sous 7 jours ouvrés'
    ],
    liabilityTerms: [
      'Nous ne sommes pas responsables des dommages indirects ou consécutifs',
      'Notre responsabilité totale est limitée au prix d\'achat du produit',
      'Nous ne garantissons pas l\'exactitude des descriptions des produits',
      'Nous nous réservons le droit de modifier ces conditions à tout moment'
    ]
  },
  dar: {
    // Navigation
    home: 'Dar',
    shop: 'Hanout',
    cart: 'Quffa',
    about: '3lina',
    contact: 'Twassl M3ana',
    
    // Hero Section
    heroTitle: 'San3a Maghribiya Assila',
    heroSubtitle: 'Ktachf zwin san3a maghribiya taqlidiya',
    shopNow: 'Chri Daba',
    
    // About Section
    aboutTitle: '3lina',
    aboutDescription: 'Kanjibou likom ahsan san3a maghribiya, mkhtara b3inaya mn 3nd sonna3 mahrin f lmaghrib.',
    
    // Products Section
    featuredProducts: 'Montojat Moumayaza',
    addToCart: 'Zid l Quffa',
    viewDetails: 'Chof Tafassil',
    price: 'Taman',
    
    // Cart
    cartTitle: 'Quffa Dyalk',
    emptyCart: 'Quffa dyalk khawya',
    total: 'Lmajmou3',
    checkout: 'Kmml Chra',
    removeItem: 'Hyyd',
    clearCart: 'Khwi Quffa',
    
    // Contact
    contactTitle: 'Twassl M3ana',
    contactDescription: 'Twassl m3ana ila 3ndk chi soual',
    name: 'Smya',
    email: 'Imayl',
    message: 'Rissala',
    send: 'Ssift',
    
    // COD Page
    codPageTitle: 'Khlass 3nd Tawssil',
    codPageDesc: 'Khlass cash mlli twssl talab dyalk.',
    deliveryProcess: 'Tariqat Tawssil',
    shippingMethods: 'Toroq Tawssil lMotaha',
    privateDelivery: 'Charikat Tawssil Khassa',
    privateDeliveryDescription: 'Khidma sari3a li katdmn tawssil l 3onwan dyalk f moddat 1 l 3 ayam, 3la hsab lmakan dyalk.',
    days: 'Ayam',
    doorToDoor: 'Mn Dar l Dar',
    howItWorks: 'Kifach Katkhdm',
    orderStep: 'Dir Talab',
    orderStepDescription: 'Khtar lmontojat w dir talab 3la lmawqi3 dyalna',
    confirmStep: 'Taakid',
    confirmStepDescription: 'Ghadi n3ayto lik bach nakkdo talab w tafassil tawssil dyalk',
    payStep: 'Khlass',
    payStepDescription: 'Khlass mlli twssl talab dyalk',
    
    // Footer
    aboutStore: '3la lHanout',
    paymentMethods: 'Toroq lKhlass',
    shippingDelivery: 'Tawssil',
    faq: 'Asila Motadawila',
    termsConditions: 'Chorot w Ahkam',
    returnPolicy: 'Siyassat Rja3',
    privacyPolicy: 'Siyassat lKhossossiya',
    allRightsReserved: 'Jami3 lHoqoq Mahfoda',

    // Privacy Policy
    introduction: 'Moqaddima',
    privacyIntro: 'Had siyassa katcharh kifach kanjm3o w nst3mlo w nhafdo 3la lm3lomat dyalk chakhssiya mlli katkhdm lmawqi3 dyalna.',
    informationCollection: 'Jam3 lM3lomat',
    informationCollectionDesc: 'Kanjm3o anwa3 mokhtalifa mn lm3lomat bach nqddmo w nhssno lkhadamat dyalna:',
    personalInfo: 'M3lomat chakhssiya (smya, imayl)',
    contactInfo: 'M3lomat twassl (rqm tilifon, 3onwan)',
    shippingInfo: 'M3lomat tawssil (3onwan tawssil)',
    paymentInfo: 'M3lomat lkhlass (tariqat lkhlass)',
    informationUsage: 'Isti3mal lM3lomat',
    informationUsageDesc: 'Kanst3mlo lm3lomat dyalk bach n3aljo ttalabat w nqddmo lmossa3ada l zbouna.',
    informationProtection: 'Himayt lM3lomat',
    informationProtectionDesc: 'Kandiro ijraat amnya bach nhmiw lm3lomat dyalk chakhssiya mn ay wossol ghir msmoh bih.',
    cookies: 'Kookiz',
    cookiesDesc: 'Kanst3mlo kookiz bach nhssno tjrobat tassaffoh dyalk.',
    thirdPartyServices: 'Khadamat Taraf Talit',
    thirdPartyServicesDesc: 'Momkin nst3mlo khadamat taraf talit bach n3aljo lkhlass w nwsslo lmontojat.',
    privacyContact: 'Ila 3ndk chi soual 3la siyassat lkhossossiya dyalna, afak twassl m3ana.',

    // Return Policy
    returnPolicyTitle: 'Siyasat Rja3 w Tbdal',
    returnPolicyDesc: 'Siyasat rja3 w tbdal dyalna madmouna l gaa3 zbnayna w katkhoss gaa3 lmontojat li kayn f lhanot dyalna.',
    returnConditions: 'Chorot Rja3',
    returnTimeLimit: 'Rja3 f 3 ayam w tbdal f 7 ayam mn tarikh chra.',
    returnProcess: 'Tariqat Rja3',
    returnContact: 'Afak twassl m3ana 3la tariq safhat twassl wla 3la rqm tilifon bach tatlob rja3 wla tbdal.',
    returnInstructions: 'Afak sawwr lmontoj w ssifto m3a lmdina, l3onwan w raqm talab dyalk.',
    returnRefund: 'Rja3 lflous kamlin ila kan lmontoj mokhtalif 3la dak li mchroh f lmawqi3.',
    returnDeduction: 'Nqass 30% wla 25 drhm 3la laqal ila bra lmochteri yrja3 bla 3ib.',

    // Terms of Use
    termsTitle: 'Chorot lKhidma',
    termsDesc: 'Mlli katkhdm lmawqi3 dyalna, rak mwafq 3la had chorot.',
    termsAccount: 'Chorot lHissab',
    termsProducts: 'Chorot lMontojat',
    termsPayment: 'Chorot lKhlass',
    termsShipping: 'Chorot Tawssil',
    termsReturns: 'Chorot Rja3',
    termsLiability: 'Massouliya',

    // Payment Methods
    paymentTitle: 'Toroq lKhlass',
    paymentCodTitle: 'Khlass 3nd Tawssil',
    paymentCodDesc: 'Khlass mlli twssl talab dyalk.',
    bankTransfer: 'Tahwil Banki',
    bankTransferDesc: 'Khlass 3la tariq tahwil lflous l lbank dyalna.',
    paymentProcess: 'Tariqat lKhlass',
    paymentOptions: 'Toroq lKhlass lMotaha',
    placeOrderStep: 'Dir talab 3la lmawqi3 dyalna',
    confirmOrderStep: 'Ghadi n3ayto lik bach nakkdo talab dyalk',
    payOnDeliveryStep: 'Khlass mlli ywssl talab dyalk',
    chooseTransferStep: 'Dir talab w khtar tahwil banki',
    getBankDetailsStep: 'Ghadi n3tiwk m3lomat lbank dyalna',
    sendConfirmationStep: 'Ssift lina taakid tahwil',
    processOrderStep: 'Ghadi n3aljo talab dyalk mn b3d ma nakkdo lkhlass',

    accountTerms: [
      'Khassek tkoun 3ndek 3la l2a9al 18 3am bach tsaweb hissab',
      'Nta msoul 3la lhifad 3la aman lhissab dyalek',
      'Khassek t3ti m3loumat shihha w kamla',
      'Khassek t3lemna ila kan chi wahed khdem lhissab dyalek bla idn'
    ],
    productTerms: [
      'Ga3 swaer dlmontojat hiya ghir lltwdih',
      'Alwan lmontojat ymken tkoun mkhtalfa chwiya 3la swaer',
      '3ndna lha9 nbedlo mwasafat lmontoj bla ich3ar',
      'Tofor lmontojat 9abel llteghyir'
    ],
    paymentTerms: [
      'Ga3 latmina bderham lmeghribi',
      'Lkhlass khasso ykoun 3nd twssil bnnisba ddef3 3nd listilam',
      'Ttahwil lbanki khasso ytm f derf 24 sa3a',
      'Makankhezno hta m3loma dlbita9a lbankiya'
    ],
    shippingTerms: [
      'We9t twssil t9ribi w machi medmoun',
      'Taman chhen kaythsseb 3la hssab blassa twssil',
      'Mamsoulinch 3la ta2khir li kaysebbo jjmarik wla charikat na9l',
      'Ymken tzad mssarif idafiya llmana6i9 lb3ida'
    ],
    returnTerms: [
      'Khass rja3 yetleb f derf 3 ayam mn twssil',
      'Khass lmontoj ykoun f halto lassliya w teglifo lassli',
      'Mssarif rja3 3la hssab zzboun',
      'Red lflous ghadi ytm f derf 7 ayam dl3amal'
    ],
    liabilityTerms: [
      'Mamssoulinch 3la ladrar ghir lmoubachira',
      'Lmassouliya dyalna mhdouda f taman chra dlmontoj',
      'Makandemnoch di99at wassf lmontojat',
      '3ndna lha9 nbedlo had chorot f ay we9t'
    ]
  }
}

export type TranslationKey = keyof typeof translations.en 