import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-purple-600 mt-4 rounded ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};