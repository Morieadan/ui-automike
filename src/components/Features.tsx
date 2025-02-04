import { Card } from './Card';
import { useEffect, useRef } from 'react';

export const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Gestión en Tiempo Real",
      description: "Monitoreo y control de toda tu flota de grúas en un solo lugar"
    },
    {
      title: "Optimización de Rutas",
      description: "Algoritmos inteligentes para maximizar la eficiencia de tus servicios"
    },
    {
      title: "Reportes Avanzados",
      description: "Análisis detallado del rendimiento y métricas clave del negocio"
    }
  ];

  return (
    <div ref={featuresRef} className="py-20 bg-gradient-to-b from-neurodark to-neurogray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-montserrat">
          ¿Por qué nuestro ERP?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};