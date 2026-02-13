
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

interface HeroProps {
  onShopClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  const { t, lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=2000',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=2000'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = t.hero[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }}>
            <div className="absolute inset-0 luxury-overlay"></div>
          </div>
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <span className="inline-block text-royalGold text-xs tracking-[0.5em] mb-8 uppercase font-bold border-y border-royalGold/30 py-2">
          {slide.badge}
        </span>
        <h1 className="font-serif text-5xl md:text-8xl mb-8 gold-gradient font-black leading-tight">
          {slide.title}
        </h1>
        <p className="text-lg md:text-2xl text-ivory/90 mb-12 max-w-2xl mx-auto">
          {slide.subtitle}
        </p>
        <button onClick={onShopClick} className="gold-bg text-black font-black px-12 py-5 rounded-sm hover:scale-105 transition-all text-xl">
          {slide.cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;
