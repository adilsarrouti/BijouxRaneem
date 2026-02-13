
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useApp } from '../App';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const { t, lang, addToCart, navigate } = useApp();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const productImages = product.images || [product.image];
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  const getLocalizedName = () => (lang === 'ar' ? product.nameAr : lang === 'fr' ? product.nameFr : product.nameEn);
  const getLocalizedDesc = () => (lang === 'ar' ? product.descriptionAr : lang === 'fr' ? product.descriptionFr : product.descriptionEn);

  useEffect(() => {
    setActiveImageIndex(0);
    setQuantity(1);
    setActiveTab('description');
  }, [product.id]);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('checkout');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-ivory py-4 border-b border-lightGray/20">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-charcoal/40">
            <button onClick={() => navigate('home')} className="hover:text-royalGold">{t.nav.home}</button>
            <span>/</span>
            <button onClick={() => navigate('shop')} className="hover:text-royalGold">{t.nav.shop}</button>
            <span>/</span>
            <span className="text-royalGold">{getLocalizedName()}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-6">
            <div className="relative aspect-square bg-ivory overflow-hidden rounded-sm luxury-shadow group">
              <img src={productImages[activeImageIndex]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {productImages.map((img, idx) => (
                <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`flex-shrink-0 w-20 h-20 border-2 ${activeImageIndex === idx ? 'border-royalGold' : 'border-transparent opacity-60'}`}>
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 text-right">
            <div>
              <span className="text-royalGold text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">{product.category}</span>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-black mb-6">{getLocalizedName()}</h1>
              <div className="flex items-center justify-end gap-6">
                {product.originalPrice && <span className="text-charcoal/30 line-through text-xl">{product.originalPrice.toLocaleString()} DH</span>}
                <span className="text-4xl font-serif font-black gold-gradient">{product.price.toLocaleString()} DH</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-6 border-y border-lightGray/30 py-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/60">{t.product.quantity}</span>
              <div className="flex items-center border border-charcoal/20">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 hover:bg-ivory">-</button>
                <span className="px-6 font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 hover:bg-ivory">+</button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                 <button onClick={() => addToCart(product, quantity)} className="flex-1 gold-bg text-black py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all">
                  {t.shop.addToCart}
                </button>
                <button onClick={() => setIsWishlisted(!isWishlisted)} className={`px-6 border transition-all ${isWishlisted ? 'bg-deepRed border-deepRed text-white' : 'border-lightGray hover:border-royalGold text-charcoal'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
              <button onClick={handleBuyNow} className="bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-charcoal">
                {t.shop.buyNow}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 border border-lightGray/30"><span className="text-xl">🚚</span><p className="text-[9px] font-black mt-2">{t.features.shipping}</p></div>
              <div className="p-4 border border-lightGray/30"><span className="text-xl">🛡️</span><p className="text-[9px] font-black mt-2">{t.features.quality}</p></div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-lightGray/30 pt-10">
          <div className="flex justify-center gap-8 mb-10">
            {(['description', 'specs', 'reviews'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 text-[10px] font-black uppercase tracking-widest ${activeTab === tab ? 'text-royalGold border-b-2 border-royalGold' : 'text-charcoal/40'}`}>
                {t.product.tabs[tab]}
              </button>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-right text-lg text-charcoal/70 leading-relaxed font-arabic">
            {activeTab === 'description' && <p>{getLocalizedDesc()}</p>}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-2 gap-6">
                {product.specs?.map((s, i) => (
                  <div key={i} className="flex justify-between border-b pb-2">
                    <span className="font-bold">{s.value}</span>
                    <span className="text-xs text-royalGold">{s.label}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {product.reviews?.map((r, i) => (
                  <div key={i} className="bg-ivory/30 p-4 rounded text-sm">
                    <p className="italic mb-2">"{r.comment}"</p>
                    <span className="text-royalGold font-black">{r.user}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
