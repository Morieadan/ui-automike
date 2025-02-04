import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Gestión Inteligente de Grúas';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let currentText = '';
    let currentIndex = 0;

    const typeWriter = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(typeWriter);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, []);

  return (
    <div className="relative min-h-screen bg-neurodark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neuropurple/20 to-neurodark/90" />
      
      <div className="video-hero-placeholder absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 
                     overflow-hidden whitespace-nowrap border-r-4 border-white
                     animate-typewriter">
          {text}
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl text-center animate-fade-in">
          Optimiza tus operaciones de asistencia vial con el ERP más avanzado del mercado
        </p>
        
        <Button 
          className="bg-neuroorange hover:bg-neuroorange/90 text-white px-8 py-6 rounded-full
                     transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]
                     flex items-center gap-2 text-lg animate-scale-in"
        >
          Solicitar Demo
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};