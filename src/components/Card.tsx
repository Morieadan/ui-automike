interface CardProps {
  title: string;
  description: string;
  delay: number;
}

export const Card = ({ title, description, delay }: CardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-3 text-blue-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};