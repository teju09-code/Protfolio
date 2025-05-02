import { projects } from '../data/portfolio-data';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};