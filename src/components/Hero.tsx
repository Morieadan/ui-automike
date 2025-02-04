import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Gestión Inteligente de Grúas';
  const [letters, setLetters] = useState<string[]>([]);
  const title = "NeuroCrane";

  useEffect(() => {
    setShowTitle(true);
    
    // Animación secuencial de letras
    const letterArray = title.split('');
    let currentIndex = 0;
    
    const letterInterval = setInterval(() => {
      if (currentIndex < letterArray.length) {
        setLetters(prev => [...prev, letterArray[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(letterInterval);
      }
    }, 200); // 200ms entre cada letra

    // Mostrar el resto del contenido después de la animación del título
    const contentTimer = setTimeout(() => {
      setShowContent(true);
      
      let currentText = '';
      let textIndex = 0;

      const typeWriter = setInterval(() => {
        if (textIndex < fullText.length) {
          currentText += fullText[textIndex];
          setText(currentText);
          textIndex++;
        } else {
          clearInterval(typeWriter);
        }
      }, 100);

      return () => clearInterval(typeWriter);
    }, 3000);

    return () => {
      clearInterval(letterInterval);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-neurodark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neuropurple/20 to-neurodark/90" />
      
      <div className="video-hero-placeholder absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-12 flex text-neurolight">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] animate-color-shift
                         ${index === letters.length - 1 && letters.length === title.length ? 'animate-letter-bounce' : ''}
                       `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        
        {showContent && (
          <>
            <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 
                         overflow-hidden whitespace-nowrap border-r-4 border-white
                         animate-typewriter">
              {text}
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl text-center animate-fade-in">
              Optimiza tus operaciones de asistencia vial con el ERP más avanzado del mercado
            </p>
            
            <div className="flex gap-6 items-center">
              <Button 
                className="bg-neuropurple hover:bg-neuropurple/90 text-white px-8 py-6 rounded-full
                         transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]
                         flex items-center gap-2 text-lg animate-scale-in"
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button 
                variant="ghost"
                className="text-white hover:bg-white/10 px-8 py-6 rounded-full
                         flex items-center gap-2 text-lg animate-scale-in"
              >
                Ver Video
                <Play className="w-5 h-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};