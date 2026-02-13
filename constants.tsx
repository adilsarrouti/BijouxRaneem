
import React from 'react';
import { Product } from './types';

export const Logo = ({ size = 64, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M70 60L85 45L100 65L115 45L130 60V85H70V60Z" fill="#D4AF37" />
    <circle cx="100" cy="40" r="6" fill="#D4AF37" />
    <circle cx="70" cy="55" r="4" fill="#D4AF37" />
    <circle cx="130" cy="55" r="4" fill="#D4AF37" />
    <text x="50%" y="145" fontFamily="Playfair Display" fontSize="100" fontWeight="700" fill="#D4AF37" textAnchor="middle">R</text>
  </svg>
);

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Diamond Solitaire',
    nameAr: 'خاتم الألماس الملكي',
    nameFr: 'Solitaire Diamant Royal',
    nameEn: 'Royal Diamond Solitaire',
    category: 'jewelry',
    price: 12500,
    originalPrice: 15000,
    description: 'A masterpiece of elegance. This 2-carat solitaire diamond is set in a crown of 18k solid gold, designed to capture every ray of light.',
    descriptionAr: 'تحفة فنية من الأناقة. هذا الخاتم المرصع بألماسة واحدة عيار 2 قيراط مثبت في تاج من الذهب الخالص عيار 18، مصمم ليلتقط كل شعاع من الضوء.',
    descriptionFr: 'Un chef-d\'œuvre d\'élégance. Ce diamant solitaire de 2 carats est serti dans une couronne d\'or massif 18 carats, conçu pour capturer chaque rayon de lumière.',
    descriptionEn: 'A masterpiece of elegance. This 2-carat solitaire diamond is set in a crown of 18k solid gold, designed to capture every ray of light.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1603561591411-071c7f159312?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1603561591411-071c7f159312?auto=format&fit=crop&q=80&w=1200'
    ],
    specs: [
      { label: 'Metal', value: '18k Solid Yellow Gold' },
      { label: 'Stone', value: '2.0 Carat Natural Diamond' },
      { label: 'Clarity', value: 'VVS1' },
      { label: 'Weight', value: '4.5g' }
    ],
    isFeatured: true,
    stockCount: 3,
    isBestseller: true,
    reviews: [
      { user: 'Laila M.', rating: 5, comment: 'قطعة مذهلة، التغليف كان رائعاً جداً.', date: '2024-01-15' },
      { user: 'Zineb H.', rating: 5, comment: 'Magnifique bague, encore plus belle en vrai.', date: '2024-02-10' }
    ]
  },
  {
    id: '2',
    name: 'Majestic Gold Chronograph',
    nameAr: 'ساعة الكرونوغراف الفاخرة',
    nameFr: 'Chronographe Or Majestueux',
    nameEn: 'Majestic Gold Chronograph',
    category: 'watch',
    price: 8900,
    originalPrice: 11000,
    description: 'Precision meets luxury. This automatic movement watch features a scratch-resistant sapphire crystal and a genuine leather strap.',
    descriptionAr: 'الدقة تلتقي بالفخامة. تتميز هذه الساعة ذات الحركة الأوتوماتيكية بزجاج ياقوت مقاوم للخدش وحزام من الجلد الطبيعي.',
    descriptionFr: 'La précision rencontre le luxe. Cette montre à mouvement automatique est dotée d\'un verre saphir résistant aux rayures et d\'un bracelet en cuir véritable.',
    descriptionEn: 'Precision meets luxury. This automatic movement watch features a scratch-resistant sapphire crystal and a genuine leather strap.',
    image: 'https://images.unsplash.com/photo-1524592093837-8f355b19b565?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1524592093837-8f355b19b565?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200'
    ],
    specs: [
      { label: 'Movement', value: 'Automatic Swiss Made' },
      { label: 'Case Material', value: 'Gold Plated Stainless Steel' },
      { label: 'Water Resistance', value: '10 ATM' }
    ],
    isFeatured: true,
    stockCount: 5,
    reviews: [
      { user: 'Ahmed S.', rating: 5, comment: 'ساعة فخمة جداً، التوصيل كان سريعاً لبنسليمان.', date: '2024-03-05' }
    ]
  },
  {
    id: '3',
    name: 'Emerald Harmony Necklace',
    nameAr: 'قلادة زمرد الهارموني',
    nameFr: 'Collier Harmonie Émeraude',
    nameEn: 'Emerald Harmony Necklace',
    category: 'jewelry',
    price: 15000,
    originalPrice: 18500,
    description: 'A symbol of rebirth and love. This necklace features deep Colombian emeralds surrounded by a halo of brilliant-cut diamonds.',
    descriptionAr: 'رمز للحب والأمل. تتميز هذه القلادة بزمرد كولومبي عميق محاط بهالة من الألماس اللامع.',
    descriptionFr: 'Un symbole de renaissance et d\'amour. Ce collier présente des émeraudes colombiennes profondes entourées d\'un halo de diamants taille brillant.',
    descriptionEn: 'A symbol of rebirth and love. This necklace features deep Colombian emeralds surrounded by a halo of brilliant-cut diamonds.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1611085583191-a3b1a30a8a0a?auto=format&fit=crop&q=80&w=1200'
    ],
    specs: [
      { label: 'Gemstone', value: 'Natural Colombian Emerald' },
      { label: 'Carat Weight', value: '3.2 ct' },
      { label: 'Chain', value: '18k White Gold' }
    ],
    isFeatured: true,
    isBestseller: true
  }
];
