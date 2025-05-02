import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education } from '../data/portfolio-data';

interface EducationCardProps {
  education: Education;
  index: number;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  return (
    <div className="flex relative group">
      {/* Timeline dot and line */}
      <div className="mr-8 relative">
        <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white shadow-md z-10">
          <GraduationCap size={18} />
        </div>
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 translate-x-[-50%] h-full"></div>
      </div>
      
      {/* Content */}
      <div 
        className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-600 mb-8 w-full transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-2px] ${
          index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'
        }`}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{education.degree}</h3>
          <span className="text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">{education.duration}</span>
        </div>
        <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">{education.institution}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{education.description}</p>
      </div>
    </div>
  );
};