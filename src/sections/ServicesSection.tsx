import { Code, Brain, Palette } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

const services = [
  {
    icon: <Palette size={40} />,
    title: "Web Design",
    description: "Creating beautiful, responsive, and user-friendly websites with modern UI/UX principles and the latest design trends."
  },
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Building robust and scalable web applications using modern frameworks and best practices in full-stack development."
  },
  {
    icon: <Brain size={40} />,
    title: "Machine Learning",
    description: "Developing intelligent solutions using cutting-edge ML algorithms and deep learning techniques for real-world problems."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title="My Services" 
          subtitle="Specialized solutions tailored to your needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 dark:border-primary-800"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-transparent bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};