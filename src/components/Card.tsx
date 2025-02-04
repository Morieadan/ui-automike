interface CardProps {
  title: string;
  description: string;
  delay: number;
}

export const Card = ({ title, description, delay }: CardProps) => {
  return (
    <div 
      className="animate-on-scroll bg-neuropurple/10 backdrop-blur-sm border border-neuropurple/20
                 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300
                 hover:shadow-neuropurple/20 hover:border-neuropurple/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-3 text-white font-montserrat">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};