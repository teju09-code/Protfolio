import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavLink {
  id: string;
  text: string;
}

const navLinks: NavLink[] = [
  { id: 'home', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skills', text: 'Skills' },
  { id: 'projects', text: 'Projects' },
  { id: 'contact', text: 'Contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update header background on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Account for header height
        behavior: 'smooth',
      });
      closeMenu();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold text-gray-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Tejasri<span className="text-purple-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  activeSection === link.id 
                    ? 'text-purple-600' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.text}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg mt-4 py-4 px-4 absolute left-0 right-0 animate-fade-in">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block text-base font-medium transition-colors hover:text-purple-600 ${
                    activeSection === link.id 
                      ? 'text-purple-600' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};