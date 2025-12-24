
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  { id: 1, title: 'Divórcio Express', description: 'Separamos você em 24h ou seu dinheiro de volta (em créditos na loja).' },
  { id: 2, title: 'Causa Ganhada?', description: 'Se você já ganhou, nós garantimos que continue ganhando.' },
  { id: 3, title: 'Processos Aleatórios', description: 'Quer processar seu vizinho por que ele respira alto? Nós fazemos isso.' },
  { id: 4, title: 'Defesa de Multas', description: 'Multas de trânsito, de condomínio e de biblioteca.' },
  { id: 5, title: 'Ocultação de Bens', description: 'Onde está o dinheiro? Nem nós saberemos!' },
  { id: 6, title: 'Adoção de Adultos', description: 'Para quem quer um herdeiro rico de última hora.' }
];

export const Services: React.FC = () => {
  return (
    <section id="serviços" className="bg-indigo-900 p-8 rounded-tr-[200px] border-l-4 border-yellow-400">
      <h3 className="text-4xl text-center text-white papyrus mb-10 decoration-red-500 underline uppercase italic">
        O QUE FAZEMOS POR VOCÊ (POR DINHEIRO):
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-10">
        {services.map((s) => (
          <div 
            key={s.id} 
            className="bg-[#333] p-6 border-4 border-white transform hover:scale-75 transition-transform duration-75 flex flex-col items-center text-center"
          >
            <div className="text-6xl mb-4 bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center">
                ⚖️
            </div>
            <h4 className="text-2xl font-black text-yellow-300 comic-sans uppercase mb-2">
              {s.title}
            </h4>
            <p className="text-gray-300 font-mono text-sm leading-tight">
              {s.description}
            </p>
            <button className="mt-4 bg-red-700 text-white p-1 text-[8px] hover:text-[40px] transition-all">
                SAIBA MENOS
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
