'use client';

import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { ProjectsGrid } from '@/components/portfolio/ProjectsGrid';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';
import { Code, Zap, Layers, Smartphone } from 'lucide-react';

/**
 * Page d'accueil du portfolio
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* Section À propos */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mes compétences et mon expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">
                  Node.js, API REST, Prisma, SQLite/PostgreSQL
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">
                  Figma, UI/UX, Responsive Design, Accessibilité
                </p>
              </div>

              <div className="p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Outils</h3>
                <p className="text-sm text-muted-foreground">
                  Git, Docker, CI/CD, Tests, Performance
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4">Mon parcours</h3>
              <p className="text-muted-foreground leading-relaxed">
                Après une formation en développement web, j\'ai pu travailler sur divers 
                projets allant de la création de sites vitrines au développement 
                d\'applications complexes. Passionné par les nouvelles technologies, 
                je m\'efforce de rester à jour avec les dernières tendances du développement web.
              </p>
            </div>
          </div>
        </section>

        <ProjectsGrid />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
