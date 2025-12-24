
import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="bg-white p-4 border-[20px] border-outset border-gray-400 shadow-inner">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4 bg-blue-800 text-white p-2">FORMULARIO DE CONTATO (DIFICIL)</h2>
        <p className="text-center text-xs text-red-600 mb-6 italic underline">Preencha tudo em LETRAS MAIÚSCULAS para ser atendido.</p>
        
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-10">
            <div className="relative">
                <label className="block text-right pr-4 font-bold text-blue-900 mb-1">QUAL SEU NOME COMPLETO? (IGUAL NO RG)</label>
                <input 
                    type="text" 
                    className="w-full bg-pink-100 border-b-8 border-red-500 p-4 focus:bg-green-100 outline-none text-2xl" 
                    placeholder="DIGITE AQUI..."
                />
            </div>
            
            <div className="grid grid-cols-2 gap-0">
                <div className="bg-black p-4">
                    <label className="text-white text-[10px]">EMAIL (OPCIONAL MAS OBRIGATORIO):</label>
                    <input type="email" className="w-full text-black bg-gray-500 border-none" />
                </div>
                <div className="bg-yellow-400 p-4">
                     <label className="text-black text-[10px]">TELEFONE DO VIZINHO:</label>
                    <input type="tel" className="w-full bg-white border-4 border-blue-600" />
                </div>
            </div>

            <div>
                <label className="block mb-2 font-mono bg-black text-green-500 p-1">DESCREVA SEU CRIME OU PROBLEMA:</label>
                <textarea 
                    rows={1} 
                    className="w-full border-4 border-dashed border-purple-500 p-2 italic bg-blue-50 text-blue-900 resize-none overflow-hidden"
                ></textarea>
                <p className="text-[10px] text-gray-400 mt-1">Limite de 10 caracteres por vez.</p>
            </div>
            
            <div className="flex items-center gap-2 bg-red-100 p-2 border border-red-900">
                <input type="checkbox" className="w-10 h-10" />
                <span className="text-[9px]">EU ACEITO QUE O DR. TUBARAO VENDA MEUS DADOS PARA EMPRESAS DE TELEMARKETING E QUE ELE POSSA USAR MEU NOME EM VAO.</span>
            </div>
            
            <button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white text-5xl font-black py-10 shadow-[10px_10px_0px_0px_rgba(0,0,255,1)] hover:translate-x-4 hover:-translate-y-4 transition-transform active:scale-50">
                ENVIAR AGORA!!!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
