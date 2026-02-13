
import React from 'react';
import { useLanguage } from '../App';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl gold-gradient font-black mb-4">{t.contact.title}</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-12 text-right">
            <div className="bg-white p-10 rounded-xl shadow-xl">
              <h3 className="text-2xl text-royalGold font-black mb-8">{t.contact.infoTitle}</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-end gap-6">
                  <div><h4 className="font-bold">{t.contact.whatsapp}</h4><p>0763651889</p></div>
                  <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">📱</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-xl text-right">
            <h3 className="text-2xl text-charcoal font-black mb-8">{t.contact.formTitle}</h3>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div><label className="block text-sm font-bold mb-2">{t.contact.nameLabel}</label><input type="text" className="w-full bg-ivory px-4 py-3 rounded-lg focus:outline-none" /></div>
              <div><label className="block text-sm font-bold mb-2">{t.contact.phoneLabel}</label><input type="tel" className="w-full bg-ivory px-4 py-3 rounded-lg focus:outline-none" /></div>
              <div><label className="block text-sm font-bold mb-2">{t.contact.msgLabel}</label><textarea className="w-full bg-ivory px-4 py-3 h-40 rounded-lg focus:outline-none"></textarea></div>
              <button className="gold-bg text-black w-full py-4 font-black rounded-lg">{t.contact.submit}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
