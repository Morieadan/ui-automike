import { Card } from './Card';

export const Features = () => {
  const features = [
    {
      title: "Diseño Moderno",
      description: "Interfaces limpias y atractivas con las últimas tendencias en diseño web."
    },
    {
      title: "Animaciones Suaves",
      description: "Transiciones y efectos fluidos que mejoran la experiencia del usuario."
    },
    {
      title: "Totalmente Responsive",
      description: "Adaptable a cualquier dispositivo y tamaño de pantalla."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Características
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