import { personalDetails } from '../data/portfolio-data';
import { SectionTitle } from '../components/SectionTitle';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's work together"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other requests or questions, don't hesitate to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalDetails.location}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <a 
                    href={`mailto:${personalDetails.email}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +91 6294224340
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};