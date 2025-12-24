
import React, { useState } from 'react';
import { BAD_ADVICE_PROMPTS } from '../constants';

export const LawsuitGenerator: React.FC = () => {
  const [result, setResult] = useState('');

  const generate = () => {
    const random = BAD_ADVICE_PROMPTS[Math.floor(Math.random() * BAD_ADVICE_PROMPTS.length)];
    setResult(random);
  };

  return (
    <div className="bg-[#000080] border-8 border-double border-white p-6 my-10 shadow-[inset_0_0_50px_rgba(255,255,255,0.2)]">
      <h3 className="text-white text-3xl font-black comic-sans text-center mb-4 italic">GERADOR DE FORTUNA INSTANTÂNEA</h3>
      <p className="text-yellow-300 text-xs text-center mb-6">NÃO PENSE, APENAS PROCESSE!</p>
      
      <div className="flex flex-col gap-4">
        <button 
          onClick={generate}
          className="bg-red-600 text-white p-6 text-2xl font-black hover:bg-yellow-400 hover:text-black transition-colors border-4 border-white"
        >
          GERAR CAUSA GANHA MILIONÁRIA!
        </button>
        
        {result && (
          <div className="bg-yellow-100 border-4 border-black p-4 mt-4 relative animate-bounce">
             <div className="absolute -top-4 -left-4 bg-black text-white p-1 text-[10px] font-bold rotate-12">VEREDITO:</div>
             <p className="text-red-900 font-black papyrus text-2xl text-center uppercase">{result}</p>
             <p className="text-[10px] text-blue-800 mt-4 text-center">Valor estimado da indenização: R$ 5.000.000.000,00</p>
          </div>
        )}
      </div>
    </div>
  );
};
