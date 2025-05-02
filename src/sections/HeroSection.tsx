import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { personalDetails } from '../data/portfolio-data';

export const HeroSection = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const roles = ['Full-Stack Developer', 'ML Enthusiast', 'AI Passionate'];

  useEffect(() => {
    const typingElement = typingRef.current;
    if (!typingElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden bg-gradient-radial from-primary-100 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20"></div>
      
      <div className="container mx-auto px-4 md:px-8 h-screen flex items-center justify-center relative z-10">
        <div className="max-w-4xl text-center">
          <p className="text-accent-600 dark:text-accent-400 font-medium mb-4 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">
            {personalDetails.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm a <span ref={typingRef} className="text-primary-600 dark:text-primary-400 font-semibold"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Passionate about creating innovative solutions using cutting-edge technologies. 
            Specializing in full-stack development, machine learning, and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-medium hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-full font-medium border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown className="text-primary-600 dark:text-primary-400" />
      </div>
    </section>
  );
};