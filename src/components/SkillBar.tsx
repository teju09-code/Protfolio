import React from 'react';
import { Skill } from '../data/portfolio-data';
import { Code, Server, Database, Brain, GitBranch, Box, Cloud, Trello, Eye, MessageCircle } from 'lucide-react'


interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  // Mapping of skill icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    'code': <Code size={20} />,
    'server': <Server size={20} />,
    'database': <Database size={20} />,
    'brain': <Brain size={20} />,
    'git-branch': <GitBranch size={20} />,
    'box': <Box size={20} />,
    'cloud': <Cloud size={20} />,
    'trello': <Trello size={20} />,
    'eye': <Eye size={20} />,
    'message-circle': <MessageCircle size={20} />
  };

  // Calculate width based on proficiency (1-10)
  const barWidth = `${skill.proficiency * 10}%`;

  // Determine category color
  const categoryColors = {
    'frontend': 'text-blue-600',
    'backend': 'text-purple-600',
    'ml': 'text-teal-600',
    'tools': 'text-amber-600'
  };

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <div className={`mr-2 ${categoryColors[skill.category]}`}>
          {iconMap[skill.icon]}
        </div>
        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getCategoryColorClass(skill.category)} rounded-full transition-all duration-1000`} 
          style={{ 
            width: barWidth,
            animation: 'growBar 1.5s ease-out' 
          }}
        ></div>
      </div>
    </div>
  );
};

// Helper function to get the appropriate color class based on skill category
const getCategoryColorClass = (category: string): string => {
  switch (category) {
    case 'frontend':
      return 'bg-blue-600';
    case 'backend':
      return 'bg-purple-600';
    case 'ml':
      return 'bg-teal-600';
    case 'tools':
      return 'bg-amber-600';
    default:
      return 'bg-gray-600';
  }
};