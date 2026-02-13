
import React, { useState, useMemo } from 'react';
// Fix: Import Logo alongside PRODUCTS
import { PRODUCTS, Logo } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { useLanguage } from '../App';

interface ShopPageProps {
  onProductClick: (product: Product) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ onProductClick }) => {
  const { t, lang } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'watch' | 'jewelry'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'priceLow' | 'priceHigh'>('newest');
  const [maxPrice, setMaxPrice] = useState<number>(20000);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    
    // Filter by Category
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    // Filter by Price
    result = result.filter(p => p.price <= maxPrice);
    
    // Sorting
    return [...result].sort((a, b) => {
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      return 0; // Default (Mocking newest by original order)
    });
  }, [categoryFilter, sortBy, maxPrice]);

  return (
    <div className="py-8 bg-ivory min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-charcoal/40 mb-10 border-b border-lightGray/20 pb-4">
          <button className="hover:text-royalGold">{t.nav.home}</button>
          <span>/</span>
          <span className="text-royalGold">{t.nav.shop}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-72 space-y-10">
            <div>
              <h3 className="font-serif text-xl font-black mb-6 border-b border-royalGold/20 pb-2 uppercase tracking-tighter">
                {t.shop.filters}
              </h3>
              
              {/* Category Filter */}
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase font-black tracking-widest text-charcoal/60">{t.sections.categories}</h4>
                <div className="flex flex-col gap-3 font-bold text-sm">
                  {(['all', 'watch', 'jewelry'] as const).map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`text-right hover:text-royalGold transition-colors flex items-center justify-between group ${categoryFilter === cat ? 'text-royalGold' : 'text-charcoal/50'}`}
                    >
                      <span className={`w-2 h-2 rounded-full border border-royalGold mr-2 ${categoryFilter === cat ? 'bg-royalGold' : ''}`}></span>
                      <span>{cat === 'all' ? t.shop.filterAll : cat === 'watch' ? t.shop.filterWatch : t.shop.filterJewelry}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mt-10 space-y-4">
                <h4 className="text-[10px] uppercase font-black tracking-widest text-charcoal/60">{t.shop.priceRange}</h4>
                <input 
                  type="range" 
                  min="0" 
                  max="20000" 
                  step="500" 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full accent-royalGold h-1 bg-royalGold/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between font-serif font-black text-xs text-royalGold">
                   <span>0 DH</span>
                   <span>{maxPrice.toLocaleString()} DH</span>
                </div>
              </div>

              {/* Static Promo Banner in Sidebar */}
              <div className="mt-12 bg-black p-6 rounded-sm border border-royalGold/20 text-center">
                 <span className="text-royalGold text-[10px] uppercase font-black tracking-widest block mb-4">Royal Gift 🎁</span>
                 <p className="text-white text-xs font-arabic mb-6">احصل على تغليف ملكي مجاني اليوم فقط مع كل طلب!</p>
                 <Logo size={40} className="mx-auto opacity-50" />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6 border-b border-lightGray/20 pb-6">
              <div className="text-right sm:text-left">
                <h1 className="font-serif text-4xl gold-gradient font-black">{t.shop.title}</h1>
                <p className="text-[10px] text-charcoal/40 uppercase tracking-widest mt-1">Showing {filteredProducts.length} unique pieces</p>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase font-black tracking-widest text-charcoal/40">{t.shop.sortBy}:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-lightGray/50 rounded-sm text-xs font-bold px-4 py-2 focus:outline-none focus:border-royalGold"
                >
                  <option value="newest">{t.shop.sortNewest}</option>
                  <option value="priceLow">{t.shop.sortPriceLow}</option>
                  <option value="priceHigh">{t.shop.sortPriceHigh}</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => onProductClick(product)} 
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center space-y-4">
                <span className="text-6xl grayscale opacity-20">🔎</span>
                <p className="font-bold text-charcoal/40">{t.shop.noProducts}</p>
                <button 
                  onClick={() => {setCategoryFilter('all'); setMaxPrice(20000);}}
                  className="text-royalGold font-black text-xs uppercase tracking-widest border-b border-royalGold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
