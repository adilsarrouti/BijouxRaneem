
import React from 'react';
import { Logo } from '../constants';
import { useLanguage } from '../App';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <Logo size={100} className="mx-auto mb-8" />
        <h1 className="font-serif text-5xl md:text-7xl gold-gradient font-black mb-6">{t.about.title}</h1>
        <p className="text-2xl text-charcoal/80 italic mb-20">{t.about.quote}</p>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <img src="https://images.unsplash.com/photo-1573408302185-91275f923bb1?auto=format&fit=crop&q=80&w=1000" className="rounded-lg shadow-2xl" />
          <div className="space-y-8 text-right">
            <h2 className="text-3xl text-royalGold font-black">{t.about.location}</h2>
            <p className="text-xl text-charcoal/70 leading-relaxed">{t.about.p1}</p>
            <div className="grid grid-cols-2 gap-8 text-center pt-8">
              <div className="p-6 bg-ivory rounded-lg font-bold">{t.about.quality}</div>
              <div className="p-6 bg-ivory rounded-lg font-bold">{t.about.shipping}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
