import React from 'react';
import { education, certifications } from '../data/portfolio-data';
import { SectionTitle } from '../components/SectionTitle';
import { EducationCard } from '../components/EducationCard';
import { Award } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="My academic journey and professional credentials"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h3>
            <div className="relative pl-8">
              {education.map((item, index) => (
                <EducationCard key={index} education={item} index={index} />
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award size={20} className="mr-2 text-purple-600" />
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li 
                  key={index} 
                  className="flex items-start"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}
                >
                  <div className="h-2 w-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};