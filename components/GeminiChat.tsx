
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const GeminiChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askLawyer = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: "Você é o Dr. Tubarão, um advogado agressivo, que dá conselhos absurdos e usa muitos termos técnicos errados em português. Seu objetivo é convencer o usuário a processar qualquer um, inclusive a própria família, por motivos fúteis. Seja rude e use gírias de bandido misturadas com jurídico arcaico. SEMPRE diga que o usuário vai ganhar milhões de reais.",
          temperature: 1,
        }
      });
      setResponse(result.text || 'O sistema de justiça falhou (erro de rede)!');
    } catch (err) {
      setResponse('ERRO JUDICIAL: O juiz não quer que você saiba a verdade.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#000080] border-8 border-double border-white p-6 my-10 shadow-[inset_0_0_50px_rgba(255,255,255,0.2)]">
      <h3 className="text-white text-3xl font-black comic-sans text-center mb-4 italic">CONSELHO JURÍDICO DA IA (INTELIGENCIA AGRESSIVA)</h3>
      <p className="text-yellow-300 text-xs text-center mb-6">Fale com o robô-advogado Dr. Tubarão 3000</p>
      
      <div className="flex flex-col gap-4">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-white text-blue-900 p-4 border-4 border-red-500 font-bold"
          placeholder="Ex: Meu vizinho olhou feio pro meu gato, o que eu faço?"
          rows={3}
        />
        <button 
          onClick={askLawyer}
          disabled={loading}
          className="bg-red-600 text-white p-4 font-black hover:bg-yellow-400 hover:text-black transition-colors disabled:opacity-50"
        >
          {loading ? 'PENSANDO EM COMO ROUBAR... ops, GANHAR...' : 'OBTER VEREDITO MILIONÁRIO!'}
        </button>
        
        {response && (
          <div className="bg-yellow-100 border-4 border-black p-4 mt-4 relative animate-in fade-in slide-in-from-bottom-5">
             <div className="absolute -top-4 -left-4 bg-black text-white p-1 text-[10px] font-bold rotate-12">RESPOSTA OFICIAL:</div>
             <p className="text-red-900 font-black papyrus text-lg whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};
