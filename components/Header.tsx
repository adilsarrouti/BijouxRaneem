
import React, { useState } from 'react';
import { Logo } from '../constants';
import { useApp } from '../App';
import { Language } from '../types';

interface HeaderProps {
  onNavigate: (page: any) => void;
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang, setLang, cart } = useApp();

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'shop', label: t.nav.shop },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-black/95 text-ivory border-b border-royalGold/20 h-24 backdrop-blur-xl transition-all">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 border-r border-royalGold/20 pr-4 mr-2">
            {(['ar', 'fr', 'en'] as Language[]).map(l => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-black uppercase tracking-tighter w-8 h-8 rounded-full border transition-all flex items-center justify-center ${
                  lang === l ? 'bg-royalGold text-black border-royalGold' : 'text-royalGold border-royalGold/30 hover:bg-royalGold/10'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-royalGold hover:text-white transition-all hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>
            <button onClick={() => handleNav('cart')} className="text-royalGold hover:text-white relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-deepRed text-white text-[9px] px-1.5 py-0.5 rounded-full font-black animate-pulse">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-xl px-10 hidden lg:flex flex-col gap-2">
          <nav className="flex items-center justify-center gap-8 font-bold text-[11px] tracking-widest uppercase">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`transition-all duration-300 ${activePage === item.id ? 'text-royalGold' : 'hover:text-royalGold text-ivory/60'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div onClick={() => handleNav('home')} className="flex items-center gap-4 cursor-pointer group">
           <div className="flex flex-col items-end leading-none">
             <span className="font-serif text-2xl gold-gradient font-black tracking-tighter">RANEEM</span>
             <span className="font-arabic text-[9px] text-royalGold/60 font-bold uppercase tracking-widest">Bijoux</span>
           </div>
           <Logo size={45} className="group-hover:scale-110 transition-transform" />
        </div>
        
        <button className="lg:hidden mr-4 text-royalGold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-black border-b border-royalGold/20 p-8 space-y-6 flex flex-col items-center">
          {navItems.map(item => (
            <button key={item.id} onClick={() => handleNav(item.id)} className="text-xl font-bold">{item.label}</button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
