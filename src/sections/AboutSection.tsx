import { personalDetails } from '../data/portfolio-data';
import { SectionTitle } from '../components/SectionTitle';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background and what drives me"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
            <img 
              src="/image.jpeg" 
              alt="Tejasri Gottipati" 
              className="w-full h-auto rounded-lg transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          {/* Content section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              I'm <span className="text-purple-600">Tejasri Gottipati</span>, a Full-Stack Developer & ML Enthusiast
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {personalDetails.about}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Name:</strong> {personalDetails.name}
                </span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Email:</strong> {personalDetails.email}
                </span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Location:</strong> {personalDetails.location}
                </span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Specialty:</strong> {personalDetails.title}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-purple-600 text-white text-center rounded-md font-medium hover:bg-purple-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Hire Me
              </a>
              <a 
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-transparent border border-purple-600 text-purple-600 dark:text-purple-400 text-center rounded-md font-medium hover:bg-purple-600 hover:text-white transition-colors"
>
  Download Resume
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};