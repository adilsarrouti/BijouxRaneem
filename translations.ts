
import { Language } from './types';

export const translations: Record<Language, any> = {
  ar: {
    dir: 'rtl',
    font: 'font-arabic',
    nav: {
      home: 'الرئيسية',
      shop: 'المتجر',
      about: 'قصتنا',
      contact: 'تواصل معنا',
      account: 'حسابي',
      searchPlaceholder: 'ابحث عن قطعة أحلامك...',
    },
    hero: [
      {
        title: 'تميزك يبدأ من معصمك',
        subtitle: 'مجموعة الساعات السويسرية الأكثر طلباً في المغرب الآن.',
        badge: 'إصدار محدود 👑',
        cta: 'اكتشف الساعات'
      },
      {
        title: 'لحظات العمر تستحق الألماس',
        subtitle: 'خواتم مرصعة بأجود أنواع الأحجار الكريمة، لذكرى لا تُنسى.',
        badge: 'الأكثر مبيعاً 🔥',
        cta: 'تصفح المجوهرات'
      }
    ],
    features: {
      shipping: 'شحن مجاني لكافة المدن',
      returns: 'إرجاع سهل خلال 15 يوماً',
      support: 'دعم فني ملكي 24/7',
      quality: 'ضمان الجودة والأصالة',
    },
    sections: {
      categories: 'أقسامنا الفاخرة',
      bestSellers: 'الأكثر مبيعاً',
      newArrivals: 'وصل حديثاً',
      testimonials: 'ماذا يقول عشاق رنيم',
      brands: 'شركاؤنا في الفخامة',
      newsletter: 'انضمي للنشرة الملكية',
      newsletterDesc: 'احصلي على خصم 10% على أول طلب لكِ عند الاشتراك.',
      subscribe: 'اشتراك الآن',
      related: 'منتجات قد تنال إعجابك',
    },
    urgency: {
      banner: '⏳ عرض خاص: ينتهي الليلة - احجز قطعتك الآن | ⚠️ المخزون محدود جداً | 🎁 هدية ملكية مجانية',
      flashTitle: 'فرصة لا تعوض - التشكيلة الجديدة',
      flashSubtitle: '"الفخامة الحقيقية لا تنتظر أحداً... اقتنِ قطعة العمر اليوم"',
      cta: 'ابدأ التسوق الآن'
    },
    shop: {
      title: 'المعرض الملكي',
      subtitle: 'تصفح تشكيلتنا الحصرية من أجود الساعات والمجوهرات',
      filterAll: 'الكل',
      filterWatch: 'ساعات',
      filterJewelry: 'مجوهرات',
      viewDetail: 'عرض التفاصيل',
      buyNow: 'اشتري الآن',
      addToCart: 'أضف للسلة',
      sortBy: 'ترتيب حسب',
      sortPriceLow: 'السعر: من الأقل للأعلى',
      sortPriceHigh: 'السعر: من الأعلى للأقل',
      sortNewest: 'الأحدث أولاً',
      filters: 'الفلاتر',
      priceRange: 'نطاق السعر',
      rating: 'التقييم',
      noProducts: 'لم يتم العثور على منتجات تطابق بحثك.',
    },
    product: {
      invest: 'استثمارك في أناقتك',
      priceSpecial: 'سعر خاص لفترة محدودة',
      status: 'متوفر الآن',
      whatsappCTA: 'اطلبي عبر الواتساب الآن',
      guarantees: '✔️ توصيل مجاني | ✔️ معاينة قبل الدفع | ✔️ ضمان رنيم',
      tabs: {
        description: 'الوصف',
        specs: 'المواصفات',
        reviews: 'المراجعات'
      },
      quantity: 'الكمية',
      limitedStock: 'بقي فقط {n} قطع في المخزون!',
      addReview: 'أضف مراجعتك',
      wishlist: 'حفظ للمفضلة',
    },
    cart: {
      title: 'حقيبة التسوق',
      empty: 'حقيبتك فارغة حالياً',
      total: 'المجموع الإجمالي',
      subtotal: 'المجموع الفرعي',
      checkout: 'إتمام الطلب',
      continue: 'متابعة التسوق',
      remove: 'إزالة',
      item: 'قطعة',
      summary: 'ملخص الطلب'
    },
    checkout: {
      title: 'الدفع والتحقق',
      shippingInfo: 'معلومات الشحن',
      fullName: 'الاسم الكامل',
      address: 'العنوان بالتفصيل',
      city: 'المدينة',
      phone: 'رقم الهاتف',
      paymentMethod: 'طريقة الدفع',
      cod: 'الدفع عند الاستلام (COD)',
      card: 'البطاقة البنكية',
      placeOrder: 'تأكيد الطلب الآن',
      success: 'تم استلام طلبك بنجاح! سنتصل بك قريباً.'
    },
    about: {
      title: 'قصة مجوهرات رنيم',
      quote: '"الفخامة ليست مجرد مظهر، بل هي تجربة تبدأ بأدق التفاصيل وتستمر مدى الحياة."',
      location: 'جذورنا في بنسليمان',
      p1: 'تأسست مجوهرات رنيم في قلب مدينة بنسليمان لتكون منارة للفخامة والرفعة في المغرب.',
      quality: 'جودة مضمونة',
      shipping: 'توصيل وطني'
    },
    contact: {
      title: 'تواصل مع مستشارك الملكي',
      infoTitle: 'معلومات التواصل',
      whatsapp: 'واتساب مباشرة',
      location: 'مقرنا الرئيسي',
      email: 'البريد الإلكتروني',
      formTitle: 'أرسل لنا رسالة',
      nameLabel: 'الاسم الكامل',
      phoneLabel: 'رقم الهاتف',
      msgLabel: 'رسالتك',
      submit: 'إرسال الطلب'
    },
  },
  fr: {
    dir: 'ltr',
    font: 'font-sans',
    nav: {
      home: 'Accueil',
      shop: 'Boutique',
      about: 'Notre Histoire',
      contact: 'Contact',
      account: 'Compte',
      searchPlaceholder: 'Recherchez votre pièce...',
    },
    hero: [
      {
        title: 'L\'élégance commence au poignet',
        subtitle: 'La collection de montres suisses la plus demandée au Maroc.',
        badge: 'ÉDITION LIMITÉE 👑',
        cta: 'Découvrir'
      },
      {
        title: 'Des diamants pour l\'éternité',
        subtitle: 'Bagues serties des pierres les plus précieuses.',
        badge: 'BEST-SELLER 🔥',
        cta: 'Voir les bijoux'
      }
    ],
    features: {
      shipping: 'Livraison gratuite partout',
      returns: 'Retours faciles (15j)',
      support: 'Support Royal 24/7',
      quality: 'Garantie d\'Authenticité',
    },
    sections: {
      categories: 'Nos Catégories',
      bestSellers: 'Meilleures Ventes',
      newArrivals: 'Nouveautés',
      testimonials: 'Avis de nos Clients',
      brands: 'Marques Partenaires',
      newsletter: 'Newsletter Royale',
      newsletterDesc: 'Bénéficiez de 10% de réduction sur votre premier achat.',
      subscribe: 'S\'abonner',
      related: 'Produits Similaires',
    },
    urgency: {
      banner: '⏳ Offre Spéciale : Finit ce soir | ⚠️ Stock limité | 🎁 Cadeau Royal offert',
      flashTitle: 'Opportunité Unique',
      flashSubtitle: '"Le vrai luxe n\'attend personne... Investissez dans l\'élégance aujourd\'hui"',
      cta: 'Acheter maintenant'
    },
    shop: {
      title: 'Galerie Royale',
      subtitle: 'Découvrez notre collection exclusive de montres et bijoux.',
      filterAll: 'Tout',
      filterWatch: 'Montres',
      filterJewelry: 'Bijoux',
      viewDetail: 'Détails',
      buyNow: 'Acheter',
      addToCart: 'Ajouter au panier',
      sortBy: 'Trier par',
      sortPriceLow: 'Prix: Croissant',
      sortPriceHigh: 'Prix: Décroissant',
      sortNewest: 'Nouveautés',
      filters: 'Filtres',
      priceRange: 'Gamme de prix',
      rating: 'Évaluation',
      noProducts: 'Aucun produit trouvé.',
    },
    product: {
      invest: 'Investissez dans votre style',
      priceSpecial: 'Prix spécial limité',
      status: 'En Stock',
      whatsappCTA: 'Commander via WhatsApp',
      guarantees: '✔️ Livraison Gratuite | ✔️ Paiement à la livraison | ✔️ Garantie Raneem',
      tabs: {
        description: 'Description',
        specs: 'Spécifications',
        reviews: 'Avis'
      },
      quantity: 'Quantité',
      limitedStock: 'Plus que {n} articles en stock !',
      addReview: 'Ajouter un avis',
      wishlist: 'Ajouter aux favoris',
    },
    cart: {
      title: 'Panier',
      empty: 'Votre panier est vide',
      total: 'Total Global',
      subtotal: 'Sous-total',
      checkout: 'Passer à la caisse',
      continue: 'Continuer les achats',
      remove: 'Supprimer',
      item: 'article',
      summary: 'Résumé de la commande'
    },
    checkout: {
      title: 'Paiement',
      shippingInfo: 'Informations de livraison',
      fullName: 'Nom complet',
      address: 'Adresse complète',
      city: 'Ville',
      phone: 'Téléphone',
      paymentMethod: 'Mode de paiement',
      cod: 'Paiement à la livraison',
      placeOrder: 'Confirmer la commande',
      success: 'Commande reçue avec succès ! Nous vous contacterons bientôt.'
    },
    about: {
      title: 'Histoire de Bijoux Raneem',
      quote: '"Le luxe n\'est pas qu\'une apparence, c\'est une expérience."',
      location: 'Nos racines à Benslimane',
      p1: 'Bijoux Raneem a été fondée au cœur de Benslimane pour être un phare du luxe au Maroc.',
      quality: 'Qualité Garantie',
      shipping: 'Livraison Nationale'
    },
    contact: {
      title: 'Contactez votre Conseiller Royal',
      infoTitle: 'Informations de Contact',
      whatsapp: 'WhatsApp Direct',
      location: 'Siège Social',
      email: 'Email',
      formTitle: 'Envoyez-nous un message',
      nameLabel: 'Nom Complet',
      phoneLabel: 'Téléphone',
      msgLabel: 'Votre Message',
      submit: 'Envoyer'
    }
  },
  en: {
    dir: 'ltr',
    font: 'font-sans',
    nav: {
      home: 'Home',
      shop: 'Shop',
      about: 'Our Story',
      contact: 'Contact Us',
      account: 'Account',
      searchPlaceholder: 'Search for your dream piece...',
    },
    hero: [
      {
        title: 'Elegance starts at the wrist',
        subtitle: 'The most requested Swiss watch collection in Morocco.',
        badge: 'LIMITED EDITION 👑',
        cta: 'Explore Watches'
      },
      {
        title: 'Diamonds for a lifetime',
        subtitle: 'Rings set with the finest precious stones.',
        badge: 'BESTSELLER 🔥',
        cta: 'Browse Jewelry'
      }
    ],
    features: {
      shipping: 'Free Nationwide Shipping',
      returns: '15-Day Easy Returns',
      support: '24/7 Royal Support',
      quality: 'Guaranteed Quality',
    },
    sections: {
      categories: 'Our Categories',
      bestSellers: 'Best Sellers',
      newArrivals: 'New Arrivals',
      testimonials: 'What Lovers Say',
      brands: 'Luxury Partners',
      newsletter: 'Royal Newsletter',
      newsletterDesc: 'Get 10% off your first order when you subscribe.',
      subscribe: 'Subscribe Now',
      related: 'Related Products',
    },
    urgency: {
      banner: '⏳ Special Offer: Ends tonight | ⚠️ Limited Stock | 🎁 Royal Gift included',
      flashTitle: 'Unique Opportunity',
      flashSubtitle: '"True luxury waits for no one... Invest in your presence today"',
      cta: 'Shop Now'
    },
    shop: {
      title: 'Royal Gallery',
      subtitle: 'Browse our exclusive collection of finest watches and jewelry.',
      filterAll: 'All',
      filterWatch: 'Watches',
      filterJewelry: 'Jewelry',
      viewDetail: 'View Details',
      buyNow: 'Buy Now',
      addToCart: 'Add to Cart',
      sortBy: 'Sort by',
      sortPriceLow: 'Price: Low to High',
      sortPriceHigh: 'Price: High to Low',
      sortNewest: 'Newest Arrivals',
      filters: 'Filters',
      priceRange: 'Price Range',
      rating: 'Rating',
      noProducts: 'No products found.',
    },
    product: {
      invest: 'Invest in your style',
      priceSpecial: 'Limited special price',
      status: 'In Stock',
      whatsappCTA: 'Order via WhatsApp Now',
      guarantees: '✔️ Free Shipping | ✔️ Pay on Delivery | ✔️ Raneem Warranty',
      tabs: {
        description: 'Description',
        specs: 'Specifications',
        reviews: 'Reviews'
      },
      quantity: 'Quantity',
      limitedStock: 'Only {n} items left in stock!',
      addReview: 'Add Review',
      wishlist: 'Save to Wishlist',
    },
    cart: {
      title: 'Shopping Bag',
      empty: 'Your bag is empty',
      total: 'Total',
      subtotal: 'Subtotal',
      checkout: 'Checkout',
      continue: 'Continue Shopping',
      remove: 'Remove',
      item: 'item',
      summary: 'Order Summary'
    },
    checkout: {
      title: 'Checkout',
      shippingInfo: 'Shipping Information',
      fullName: 'Full Name',
      address: 'Detailed Address',
      city: 'City',
      phone: 'Phone Number',
      paymentMethod: 'Payment Method',
      cod: 'Cash on Delivery (COD)',
      placeOrder: 'Confirm Order',
      success: 'Order placed successfully! We will contact you soon.'
    },
    about: {
      title: 'Raneem Jewelry Story',
      quote: '"Luxury is not just an appearance, it is an experience starting from details."',
      location: 'Roots in Benslimane',
      p1: 'Bijoux Raneem was founded in Benslimane to be a beacon of luxury in Morocco.',
      quality: 'Guaranteed Quality',
      shipping: 'National Delivery'
    },
    contact: {
      title: 'Contact Your Royal Advisor',
      infoTitle: 'Contact Information',
      whatsapp: 'Direct WhatsApp',
      location: 'Main Office',
      email: 'Email',
      formTitle: 'Send us a message',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone Number',
      msgLabel: 'Your Message',
      submit: 'Submit'
    }
  }
};
