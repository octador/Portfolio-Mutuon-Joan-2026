import { ProjectCard } from './ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

/**
 * Grille de projets en vedette
 */
export function ProjectsGrid() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Récents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus significatifs, 
            mettant en valeur mes compétences en développement web.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Lien vers tous les projets */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Vous souhaitez voir plus de projets ?
          </p>
          <a
            href="https://github.com?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Voir tous mes projets sur GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
