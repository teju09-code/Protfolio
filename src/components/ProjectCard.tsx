import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/portfolio-data';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div 
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex space-x-4">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-gray-900 hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="View demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-gray-900 hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="View code"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};