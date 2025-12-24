
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] overflow-hidden bg-black flex items-center justify-center">
      {/* Imagem esticada e de baixa qualidade propositalmente */}
      <img 
        src="https://picsum.photos/1200/800?lawyer" 
        alt="Advogado sério" 
        className="absolute inset-0 w-full h-full object-fill opacity-40 blur-[1px]"
      />
      
      <div className="relative z-10 text-center p-4">
        <div className="bg-white/10 backdrop-blur-sm p-10 border-[10px] border-double border-yellow-400 -skew-x-12">
            <h2 className="text-7xl font-bold text-yellow-300 comic-sans drop-shadow-lg animate-pulse">
                JUSTIÇA A QUALQUER CUSTO!
            </h2>
            <p className="text-3xl text-red-500 font-serif mt-6 bg-yellow-200 px-4 inline-block transform skew-x-12">
                "Não descansamos enquanto não pegarmos o que é seu (por direito)"
            </p>
            
            <div className="mt-12 flex gap-4 justify-center flex-wrap">
                <button className="bg-green-600 text-white text-3xl px-12 py-6 rounded-none border-l-[20px] border-green-900 font-black hover:bg-red-600 transform hover:rotate-180 transition-all">
                    CONTRATAR AGORA!
                </button>
                <button className="bg-transparent border-4 border-white text-white text-xl px-8 py-4 italic underline">
                    Ver vídeos de vitórias
                </button>
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#ffffcc] to-transparent"></div>
    </section>
  );
};
