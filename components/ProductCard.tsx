
import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../App';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { t, lang } = useLanguage();

  const getLocalizedName = () => {
    if (lang === 'ar') return product.nameAr;
    if (lang === 'fr') return product.nameFr;
    return product.nameEn;
  };

  return (
    <div 
      onClick={onClick}
      className="group product-card-white border border-lightGray/30 rounded-lg overflow-hidden flex flex-col relative cursor-pointer"
    >
      <div className="aspect-[1/1.2] overflow-hidden relative">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {product.isFeatured && (
            <div className="bg-black text-royalGold text-[8px] px-3 py-1 border border-royalGold/30 uppercase font-black tracking-widest">
              Limited 👑
            </div>
          )}
          {product.isBestseller && (
            <div className="bg-deepRed text-white text-[8px] px-3 py-1 uppercase font-black tracking-widest">
              Hot 🔥
            </div>
          )}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2">
          <button className="bg-white text-black py-2.5 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-royalGold transition-colors">
            {t.shop.addToCart}
          </button>
        </div>
      </div>

      <div className="p-8 text-center flex flex-col flex-1">
        <div className="flex justify-center gap-1 mb-2">
          {[1,2,3,4,5].map(star => (
            <svg key={star} className="w-3 h-3 text-royalGold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-royalGold text-[9px] uppercase font-black tracking-[0.3em] mb-2 block">{product.category}</span>
        <h3 className="font-serif text-xl text-charcoal font-bold mb-4 line-clamp-1">{getLocalizedName()}</h3>
        <div className="mt-auto pt-4 border-t border-lightGray/50">
          <div className="font-serif font-black text-2xl text-royalGold">{product.price.toLocaleString()} DH</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
