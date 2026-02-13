
import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AIStylist from './components/AIStylist';
import { PRODUCTS, Logo } from './constants';
import { Product, Language, CartItem } from './types';
import { translations } from './translations';

// Page Components
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

// Context
interface AppContextType {
  lang: Language;
  t: any;
  setLang: (l: Language) => void;
  cart: CartItem[];
  addToCart: (p: Product, q?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, q: number) => void;
  navigate: (page: PageType, data?: any) => void;
  currentPage: PageType;
}

type PageType = 'home' | 'shop' | 'about' | 'contact' | 'detail' | 'cart' | 'checkout';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

// Simplified for hook usage in translations
export const useLanguage = () => {
  const { lang, t, setLang } = useApp();
  return { lang, t, setLang };
};

const MainApp: React.FC = () => {
  const { t, currentPage, navigate, selectedProduct } = useApp() as any;

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <ShopPage onProductClick={(p) => navigate('detail', p)} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'detail':
        return selectedProduct ? <ProductDetailPage product={selectedProduct} /> : <Hero onShopClick={() => navigate('shop')} />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'home':
      default:
        return (
          <>
            <Hero onShopClick={() => navigate('shop')} />
            
            {/* Value Propositions */}
            <div className="bg-white py-12 border-b border-lightGray/20">
              <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: '🚚', title: t.features.shipping },
                  { icon: '🛡️', title: t.features.quality },
                  { icon: '🔄', title: t.features.returns },
                  { icon: '💎', title: t.features.support },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-charcoal/60">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency Banner */}
            {t.urgency && (
              <div className="bg-deepRed text-white py-4 overflow-hidden shadow-2xl relative z-10">
                <div className="flex justify-center items-center gap-12 animate-pulse font-bold text-sm whitespace-nowrap px-4">
                  <span>{t.urgency.banner}</span>
                </div>
              </div>
            )}

            {/* Featured Categories */}
            <section className="py-24 bg-ivory">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="font-serif text-5xl font-black gold-gradient mb-4 uppercase tracking-tighter">{t.sections.categories}</h2>
                  <div className="w-20 h-1 bg-royalGold mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: t.shop.filterWatch, img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800' },
                    { title: t.shop.filterJewelry, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800' },
                    { title: t.sections.newArrivals, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800' },
                  ].map((cat, idx) => (
                    <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer shadow-xl" onClick={() => navigate('shop')}>
                      <img src={cat.img} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-125" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <h3 className="text-white font-serif text-4xl font-black mb-4 drop-shadow-2xl">{cat.title}</h3>
                        <span className="text-royalGold text-xs font-black uppercase tracking-[0.5em] border-b border-royalGold/50 pb-2">{t.shop.viewDetail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Section / Best Sellers */}
            <section className="py-24 bg-white relative">
              <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                  <span className="text-royalGold text-sm uppercase tracking-[0.5em] mb-4 font-black">Luxury Picks</span>
                  <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-black mb-6 uppercase tracking-tighter">{t.sections.bestSellers}</h2>
                  <p className="font-arabic text-charcoal/50 max-w-lg italic">{t.urgency ? `"${t.urgency.flashSubtitle}"` : ''}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} onClick={() => navigate('detail', product)} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-ivory text-charcoal ${t.font} selection:bg-royalGold selection:text-black`}>
      <Header 
        onNavigate={(p) => navigate(p)} 
        activePage={currentPage} 
      />
      <main className="pt-24">{renderPage()}</main>
      
      {/* Footer */}
      <footer className="bg-black py-24 border-t border-royalGold/20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-right">
          <div className="flex flex-col items-center md:items-end">
             <Logo size={80} className="mb-6" />
             <p className="font-bold text-ivory/60 mt-4 max-w-xs text-[10px]">Bijoux Raneem - Benslimane. Luxury royale in every detail.</p>
          </div>
          <div>
            <h4 className="text-royalGold font-black uppercase tracking-widest mb-10 border-b border-royalGold/10 pb-4 text-xs">Navigation</h4>
            <ul className="space-y-4 text-ivory/40 font-bold text-[11px] uppercase tracking-widest">
              <li><button onClick={() => navigate('shop')} className="hover:text-royalGold">{t.nav.shop}</button></li>
              <li><button onClick={() => navigate('about')} className="hover:text-royalGold">{t.nav.about}</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-royalGold">{t.nav.contact}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-royalGold font-black uppercase tracking-widest mb-10 border-b border-royalGold/10 pb-4 text-xs">Help</h4>
            <ul className="space-y-4 text-ivory/40 font-bold text-[11px] uppercase tracking-widest">
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-royalGold font-black uppercase tracking-widest mb-10 border-b border-royalGold/10 pb-4 text-xs">Connect</h4>
            <p className="text-ivory/40 text-[11px]">Benslimane, Morocco</p>
            <p className="text-royalGold font-bold mt-2">support@raneem.ma</p>
          </div>
        </div>
      </footer>
      <AIStylist />
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    document.documentElement.dir = translations[lang]?.dir || 'rtl';
    document.documentElement.lang = lang;
  }, [lang]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  
  const updateQuantity = (id: string, q: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, q) } : i));
  };

  const navigate = (page: PageType, data?: any) => {
    if (page === 'detail' && data) setSelectedProduct(data);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const contextValue = {
    lang, t: translations[lang] || translations['ar'], setLang,
    cart, addToCart, removeFromCart, updateQuantity,
    navigate, currentPage, selectedProduct
  } as any;

  return (
    <AppContext.Provider value={contextValue}>
      <MainApp />
    </AppContext.Provider>
  );
};

export default App;
