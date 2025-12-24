
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulação de carregamento lento "artificial" para irritar o usuário
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-yellow-400 flex flex-col items-center justify-center z-50">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJidm81Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3ImZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/3o7bu3XilJ5BOiSGic/giphy.gif" 
          alt="Loading..."
          className="w-48 h-48 mb-4 border-8 border-red-600 border-dotted"
        />
        <h1 className="text-4xl font-bold text-blue-800 blink comic-sans">CARREGANDO O SUCESSO...</h1>
        <p className="mt-4 text-red-600 animate-bounce">Aguarde, estamos processando seus processos!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen force-overflow relative">
      <div className="bg-red-600 text-white p-2 text-center text-xs font-serif italic border-b-4 border-yellow-300">
        <div className="marquee-text font-bold">
           *** ATENÇÃO: GANHAMOS TODAS AS CAUSAS!!! LIGUE AGORA!!! 0800-TUBARAO-LEGAL *** ⚖️ 🦈 *** CUIDADO COM IMITAÇÕES!!! *** 
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        
        <main className="flex-1 bg-[#ffffcc] border-l-8 border-double border-blue-900">
          <Header />
          <Hero />
          
          <div className="p-8 space-y-20">
            <Services />
            
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-10 rounded-[100px] rotate-1 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] border-4 border-white">
                <h2 className="text-5xl font-black text-white papyrus mb-8 underline decoration-yellow-400 decoration-wavy">Nossos Clientes (Reais!)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 border-4 border-dashed border-red-500 -rotate-2">
                        <p className="comic-sans text-xl italic text-green-700">"Eles me ajudaram a processar minha sombra e ganhamos!"</p>
                        <p className="font-bold text-right mt-2 text-black">- João Do Pulo</p>
                    </div>
                    <div className="bg-black text-white p-4 border-4 border-dotted border-yellow-500 rotate-3">
                        <p className="papyrus text-xl">"O Dr. Tubarão é um tubarão mesmo! Mordeu o juiz e o processo acabou na hora."</p>
                        <p className="font-bold text-right mt-2 text-yellow-400">- Maria Socorro</p>
                    </div>
                </div>
            </div>

            <GeminiChat />
            <ContactForm />
          </div>
          
          <Footer />
        </main>
      </div>

      {/* Pop-up irritante aleatório */}
      <FloatingAd />
    </div>
  );
};

const FloatingAd: React.FC = () => {
    const [show, setShow] = useState(true);
    if (!show) return null;
    return (
        <div className="fixed bottom-20 right-5 w-64 bg-yellow-200 border-4 border-red-600 p-4 shadow-2xl z-40 animate-pulse">
            <button 
                onClick={() => setShow(false)}
                className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-8 h-8 font-bold border-2 border-white hover:bg-black"
            >X</button>
            <p className="font-bold text-red-700 comic-sans text-center">PRECISA DE DINHEIRO?</p>
            <img src="https://picsum.photos/200/100?grayscale" className="my-2 w-full" alt="Money" />
            <p className="text-xs text-center">Processamos qualquer um por R$ 50,00</p>
            <button className="bg-green-500 w-full mt-2 py-2 font-black text-white border-b-4 border-green-800 active:translate-y-1">CLIQUE AQUI!!!!</button>
        </div>
    );
}

export default App;
