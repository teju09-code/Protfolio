import { useState } from 'react';
import { skills } from '../data/portfolio-data';
import { SectionTitle } from '../components/SectionTitle';
import { SkillBar } from '../components/SkillBar';

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ml', label: 'ML & AI' },
    { id: 'tools', label: 'tools' }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technical expertise I've developed throughout my journey"
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              <SkillBar skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};