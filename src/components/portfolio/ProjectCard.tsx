import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

/**
 * Carte de projet avec preview et liens
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Image du projet */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img
          src={project.imagePath}
          alt={`Capture d'écran du projet ${project.title}`}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-primary-foreground">En vedette</Badge>
          </div>
        )}
      </div>

      <CardHeader className="flex-1">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.shortDescription}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stack technologique */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.stack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2 pt-0">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le code source de ${project.title} sur GitHub`}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.demoUrl && (
          <Button size="sm" asChild className="flex-1">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir la démo de ${project.title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Démo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
