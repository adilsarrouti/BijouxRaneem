
export interface ProductReview {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  nameEn: string;
  category: 'jewelry' | 'watch';
  price: number;
  originalPrice?: number;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  images?: string[];
  specs?: {
    label: string;
    value: string;
  }[];
  isFeatured?: boolean;
  stockCount?: number;
  isBestseller?: boolean;
  reviews?: ProductReview[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface StylistMessage {
  role: 'user' | 'model';
  text: string;
}

export type Language = 'ar' | 'fr' | 'en';
