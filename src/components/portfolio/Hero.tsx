import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

/**
 * Section Hero avec introduction et CTA
 */
export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponible pour de nouvelles opportunités
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Développeur Full Stack
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionné par la création d\'applications web modernes et performantes. 
          Spécialisé en React, Next.js et développement backend avec une attention 
          particulière pour l\'expérience utilisateur et la qualité du code.
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" onClick={scrollToProjects} className="min-w-[180px]">
            Voir mes projets
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[180px]">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Me contacter
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b py-8">
          <div>
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Années d\'expérience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">Projets réalisés</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Passion pour le code</div>
          </div>
        </div>
      </div>
    </section>
  );
}
