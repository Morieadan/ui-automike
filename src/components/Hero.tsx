import { useEffect, useState } from 'react';

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-800"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-slide-up">
            Bienvenido
          </h1>
          <p className="text-xl text-white mb-8 animate-fade-in">
            Descubre el poder de las animaciones modernas
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold 
                           hover:bg-blue-50 transition-all duration-300 animate-scale-in">
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
};