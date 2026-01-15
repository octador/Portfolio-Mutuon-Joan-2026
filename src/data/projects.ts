/**
 * Données des projets pour le portfolio
 *
 * Pour utiliser vos propres images :
 * 1. Créez un dossier `public/images` à la racine du projet
 * 2. Ajoutez vos images avec des noms descriptifs (ex: project1.png, project2.jpg)
 * 3. Mettez à jour les chemins `imagePath` ci-dessous
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  stack: string[];
  imagePath: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-dashboard',
    title: 'E-commerce Dashboard',
    description: 'Un tableau de bord complet pour la gestion d\'une boutique en ligne. Interface utilisateur moderne avec visualisation des données en temps réel, gestion des commandes, des clients et des statistiques de vente.',
    shortDescription: 'Dashboard e-commerce avec visualisation de données et gestion d\'inventaire',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Prisma'],
    imagePath: '/images/ecommerce-dashboard.png',
    githubUrl: 'https://github.com/mon-username/ecommerce-dashboard',
    demoUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    featured: true,
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description: 'Application de gestion de tâches collaborative avec fonctionnalités avancées : organisation par projets, tags personnalisés, notifications en temps réel, et synchronisation multi-appareils.',
    shortDescription: 'Gestionnaire de tâches collaboratif avec notifications en temps réel',
    stack: ['Next.js', 'TypeScript', 'Socket.io', 'Zustand', 'SQLite'],
    imagePath: '/images/task-manager.png',
    githubUrl: 'https://github.com/mon-username/task-manager',
    demoUrl: 'https://task-manager-demo.vercel.app',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Application Météo',
    description: 'Application météo moderne avec prévisions sur 7 jours, alertes météo, localisation automatique, et support multi-villes. Interface intuitive avec animations fluides et thèmes sombre/clair.',
    shortDescription: 'App météo avec prévisions détaillées et animations',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API OpenWeatherMap'],
    imagePath: '/images/weather-app.png',
    githubUrl: 'https://github.com/mon-username/weather-app',
    demoUrl: 'https://weather-app-demo.vercel.app',
    featured: false,
  },
];

/**
 * Obtient tous les projets
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Obtient les projets en vedette
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Obtient un projet par son ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
