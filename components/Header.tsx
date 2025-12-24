
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 p-0 m-0 border-b-[15px] border-yellow-500 flex flex-col items-center">
      <div className="bg-white w-full py-4 text-center">
        <h1 className="text-6xl font-black text-red-600 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.5)] comic-sans italic uppercase scale-y-150">
          Advocacia Tubarão & Associados
        </h1>
      </div>
      
      <nav className="flex flex-wrap justify-around w-full py-2 bg-gradient-to-b from-blue-700 to-black">
        {['HOME', 'SERVIÇOS', 'QUEM SOMOS?', 'PROCESSOS', 'DICAS GRATIS', 'CONTATO'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-white font-bold text-xs p-2 hover:bg-white hover:text-black border border-transparent hover:border-red-500 transition-all duration-[2000ms] hover:scale-150"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};
