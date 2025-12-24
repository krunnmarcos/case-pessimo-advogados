
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 p-20 mt-20 border-t-[30px] border-red-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
            <h4 className="text-white text-3xl mb-4 font-black">ADVOCACIA TUBARÃO ®</h4>
            <p className="text-xs leading-none">
                Todos os direitos reservados para nós. Se você copiar esse design, nós vamos te processar usando nosso próprio serviço gratuito de processos aleatórios. Este site foi feito com o que há de pior em tecnologia de 1998.
            </p>
            <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
            </div>
        </div>
        
        <div>
            <h5 className="text-white font-bold mb-2">LINKS QUE NÃO FUNCIONAM:</h5>
            <ul className="text-[10px] space-y-1">
                <li><a href="#" className="hover:line-through">Processar Mãe</a></li>
                <li><a href="#" className="hover:line-through">Processar Pai</a></li>
                <li><a href="#" className="hover:line-through">Processar Cachorro</a></li>
                <li><a href="#" className="hover:line-through">Processar Você Mesmo</a></li>
            </ul>
        </div>
        
        <div className="flex flex-col items-center justify-center border-4 border-double border-white p-4">
            <p className="text-white font-black text-center text-lg">CONTADOR DE VISITAS:</p>
            <div className="bg-white text-black font-mono text-4xl p-2 tracking-widest mt-2">
                000000001
            </div>
            <p className="text-[8px] mt-2">Você é o nosso primeiro cliente (hoje)</p>
        </div>
      </div>
      
      <div className="mt-20 text-center opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[8px]">Design by: Meus Sobrinho que entende de computação (1994-2024)</p>
      </div>
    </footer>
  );
};
