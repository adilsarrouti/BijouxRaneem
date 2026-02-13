
import React, { useState, useRef, useEffect } from 'react';
import { getStylingAdvice } from '../services/geminiService';
import { StylistMessage } from '../types';
import { useLanguage } from '../App';

const AIStylist: React.FC = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<StylistMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const welcome = {
      ar: 'أهلاً بكم في مجوهرات رنيم. كيف يمكن للمستشار الملكي مساعدتكم اليوم؟',
      fr: 'Bienvenue chez Bijoux Raneem. Comment votre conseiller royal peut-il vous aider aujourd\'hui ?',
      en: 'Welcome to Bijoux Raneem. How can your royal advisor assist you today?'
    };
    setMessages([{ role: 'model', text: welcome[lang] }]);
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: StylistMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    const advice = await getStylingAdvice([...messages, userMsg], lang);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: advice || '...' }]);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-8 left-8 z-50 gold-bg p-4 rounded-full shadow-2xl border-2 border-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-8 z-50 w-[350px] md:w-[450px] h-[550px] bg-black border-2 border-royalGold shadow-2xl rounded-2xl flex flex-col overflow-hidden">
          <div className="p-4 border-b border-royalGold/30 flex justify-between items-center bg-royalGold/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center font-bold text-black">R</div>
              <div className="text-right">
                <h4 className="text-royalGold text-xs font-bold">Royal Advisor</h4>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-royalGold">X</button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-deepRed text-white' : 'bg-white/10 text-ivory'}`}>{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-black">
            <div className="flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} className="flex-1 bg-white/5 border border-royalGold/30 rounded px-4 py-2 text-ivory text-sm" placeholder="..." />
              <button onClick={handleSend} className="gold-bg p-2 rounded text-black"></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIStylist;
