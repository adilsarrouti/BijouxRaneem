
import React, { useState } from 'react';
import { useApp } from '../App';

const CheckoutPage: React.FC = () => {
  const { t, cart, navigate, lang } = useApp();
  const [isSuccess, setIsSuccess] = useState(false);
  
  // حالة تخزين بيانات النموذج
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    phone: '',
    address: ''
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. تنسيق قائمة المنتجات
    const itemsList = cart.map(item => {
      const itemName = lang === 'ar' ? item.nameAr : item.nameEn;
      return `• ${itemName} | الكمية: ${item.quantity} | السعر: ${item.price} DH`;
    }).join('\n');

    // 2. إنشاء الرسالة المنسقة
    const message = `
👑 *طلب جديد - مجوهرات رنيم* 👑
--------------------------------
👤 *بيانات العميل:*
- الاسم: ${formData.fullName}
- المدينة: ${formData.city}
- الهاتف: ${formData.phone}
- العنوان: ${formData.address}

🛍️ *تفاصيل الطلب:*
${itemsList}

💰 *المجموع الإجمالي:* ${total.toLocaleString()} DH
--------------------------------
تم الإرسال من متجر رنيم الإلكتروني ✨
    `.trim();

    // 3. رقم الهاتف (بدون أصفار أو رموز زائدة)
    const whatsappNumber = '212763651889'; // الرقم المغربي المذكور
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 4. فتح واتساب في نافذة جديدة وإظهار حالة النجاح
    window.open(whatsappUrl, '_blank');
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="py-32 text-center bg-white">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-5xl mx-auto mb-8 animate-bounce">✓</div>
        <h1 className="text-4xl font-serif font-black mb-4">{t.checkout.success}</h1>
        <p className="text-charcoal/60 mb-8 font-arabic px-6">لقد تم توجيه طلبك إلى الواتساب، المرجو الضغط على "إرسال" في التطبيق لتأكيده.</p>
        <button onClick={() => navigate('home')} className="text-royalGold font-black uppercase tracking-widest mt-8 border-b-2 border-royalGold">
          {t.nav.home}
        </button>
      </div>
    );
  }

  return (
    <div className="py-20 bg-ivory min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="font-serif text-5xl font-black gold-gradient text-center mb-16">{t.checkout.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-sm shadow-xl text-right order-2 lg:order-1">
            <h2 className="text-2xl font-serif font-black mb-10 text-royalGold border-b pb-4">{t.checkout.shippingInfo}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 opacity-60">{t.checkout.fullName}</label>
                <input 
                  required 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  type="text" 
                  className="w-full bg-ivory px-4 py-3 border-b-2 border-transparent focus:border-royalGold outline-none transition-all" 
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 opacity-60">{t.checkout.city}</label>
                  <input 
                    required 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full bg-ivory px-4 py-3 border-b-2 border-transparent focus:border-royalGold outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 opacity-60">{t.checkout.phone}</label>
                  <input 
                    required 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    className="w-full bg-ivory px-4 py-3 border-b-2 border-transparent focus:border-royalGold outline-none transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 opacity-60">{t.checkout.address}</label>
                <textarea 
                  required 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-ivory px-4 py-3 h-32 border-b-2 border-transparent focus:border-royalGold outline-none transition-all"
                ></textarea>
              </div>
              
              <div className="pt-8 border-t">
                <h3 className="text-lg font-bold mb-6">{t.checkout.paymentMethod}</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-end gap-4 p-4 border border-royalGold bg-royalGold/5 cursor-pointer">
                    <span className="font-bold">{t.checkout.cod}</span>
                    <input type="radio" name="payment" defaultChecked className="accent-royalGold w-4 h-4" />
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full gold-bg text-black py-5 font-black uppercase tracking-widest mt-10 hover:brightness-110 shadow-2xl transition-all">
                {t.checkout.placeOrder}
              </button>
            </form>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-serif font-black mb-6 border-b pb-4 text-right">{t.cart.summary}</h3>
              <div className="max-h-96 overflow-y-auto pr-2 space-y-4 no-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-right">
                    <div className="text-right">
                      <p className="font-bold text-sm">{(item.price * item.quantity).toLocaleString()} DH</p>
                      <p className="text-[10px] opacity-40">{item.quantity} x {item.price.toLocaleString()} DH</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold text-xs max-w-[150px]">{lang === 'ar' ? item.nameAr : item.nameEn}</p>
                      <img src={item.image} className="w-12 h-12 object-cover rounded" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t flex justify-between items-center font-black text-2xl text-royalGold">
                <span>{total.toLocaleString()} DH</span>
                <span>{t.cart.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
