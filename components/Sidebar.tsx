
import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-20 bg-yellow-400 p-2 flex flex-row md:flex-col items-center gap-4 border-r-4 border-black">
      <div className="bg-red-600 text-white p-2 font-bold rotate-90 hidden md:block whitespace-nowrap -mt-20 mb-20 text-4xl comic-sans">
        PROMOÇÃO!!!
      </div>
      
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible w-full">
          {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className="min-w-[50px] h-10 bg-white border-2 border-black flex items-center justify-center font-black text-blue-800 animate-bounce" style={{animationDelay: `${i*100}ms`}}>
                  {i}º
              </div>
          ))}
      </div>
      
      <div className="mt-auto hidden md:block">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjE1NzUzZGVhZGI0MzNiODU1ZGRhZTUzNDAwZjk4ZDc2NmM2YjUzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Xoyp69BtuF1JK/giphy.gif" alt="Legal" className="w-full" />
      </div>
    </aside>
  );
};
