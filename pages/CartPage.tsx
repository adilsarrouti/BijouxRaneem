
import React from 'react';
import { useApp } from '../App';

const CartPage: React.FC = () => {
  const { t, lang, cart, removeFromCart, updateQuantity, navigate } = useApp();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="py-32 text-center bg-white">
        <span className="text-8xl opacity-20 block mb-8">🛍️</span>
        <h1 className="text-4xl font-serif font-black mb-8">{t.cart.empty}</h1>
        <button onClick={() => navigate('shop')} className="gold-bg text-black px-12 py-4 font-black uppercase tracking-widest">
          {t.cart.continue}
        </button>
      </div>
    );
  }

  return (
    <div className="py-20 bg-ivory min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl font-black gold-gradient text-center mb-16">{t.cart.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-sm shadow-sm flex items-center gap-6 text-right">
                <img src={item.image} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{lang === 'ar' ? item.nameAr : item.nameEn}</h3>
                  <p className="text-royalGold font-serif font-black">{item.price.toLocaleString()} DH</p>
                  <div className="flex items-center justify-end gap-4 mt-4">
                    <button onClick={() => removeFromCart(item.id)} className="text-deepRed text-xs font-bold border-b border-deepRed">{t.cart.remove}</button>
                    <div className="flex items-center border border-lightGray">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1">-</button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-sm shadow-xl h-fit sticky top-32 text-right">
            <h2 className="text-2xl font-serif font-black mb-8 border-b pb-4">{t.cart.summary}</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-bold">{subtotal.toLocaleString()} DH</span>
                <span className="text-charcoal/40 text-sm">{t.cart.subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-black text-royalGold pt-4 border-t">
                <span>{subtotal.toLocaleString()} DH</span>
                <span>{t.cart.total}</span>
              </div>
            </div>
            <button onClick={() => navigate('checkout')} className="w-full gold-bg text-black py-5 font-black uppercase tracking-widest animate-glow">
              {t.cart.checkout}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
