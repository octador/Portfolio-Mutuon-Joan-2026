# Portfolio Professionnel

Portfolio moderne et responsive développé avec Next.js 15, TypeScript, Tailwind CSS et shadcn/ui.

## 🚀 Fonctionnalités

- **Design Responsive**: S'adapte parfaitement à tous les écrans (mobile, tablette, desktop)
- **Navigation Intuitive**: Header sticky avec menu mobile
- **Section Projets**: Grille de projets avec cartes interactives
- **Formulaire de Contact**: Interface de contact avec validation
- **Accessibilité**: Labels ARIA, navigation clavier, texte alternatif pour les images
- **Thème Dark/Light**: Support des thèmes via next-themes
- **Performance**: Optimisé pour les meilleurs scores Core Web Vitals

## 🛠️ Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Composants UI**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/votre-username/portfolio.git
cd portfolio
```

### 2. Installer les dépendances

```bash
npm install
# ou
yarn install
# ou
bun install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 🏗️ Build de production

```bash
npm run build
# ou
yarn build
# ou
bun run build
```

Le site sera optimisé et exporté dans le dossier `out` (export statique).

**Note importante** : Ce projet est configuré pour l'export statique (`output: "export"`), ce qui est parfait pour Netlify.

## 📁 Structure du Projet

```
portfolio/
├── public/
│   └── images/              # Images statiques des projets
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   ├── components/
│   │   ├── portfolio/       # Composants du portfolio
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectsGrid.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # Composants shadcn/ui
│   └── data/
│       └── projects.ts      # Données des projets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Personnalisation

### Modifier les projets

Les données des projets sont dans `src/data/projects.ts`. Vous pouvez :

1. **Ajouter un nouveau projet** :
```typescript
{
  id: 'nouveau-projet',
  title: 'Titre du projet',
  description: 'Description détaillée',
  shortDescription: 'Description courte',
  stack: ['Techno1', 'Techno2'],
  imagePath: '/images/nouveau-projet.png',
  githubUrl: 'https://github.com/votre-repo',
  demoUrl: 'https://demo-url.com',
  featured: true,
}
```

2. **Modifier l'image d'un projet** :
   - Créez votre image (format 1344x768 recommandé)
   - Placez-la dans `public/images/`
   - Mettez à jour le chemin `imagePath` dans `src/data/projects.ts`

3. **Supprimer un projet** : Retirez simplement l'objet du tableau `projects`

### Modifier le contenu

- **En-tête et titre** : Modifiez `src/components/portfolio/Hero.tsx`
- **Section À propos** : Modifiez `src/app/page.tsx`
- **Informations de contact** : Modifiez `src/components/portfolio/ContactSection.tsx`

### Modifier le style

Les couleurs et le thème sont configurés dans `tailwind.config.ts`. Vous pouvez :

1. Changer les couleurs primaires
2. Modifier les fonts
3. Ajuster les breakpoints

## 🚀 Déploiement sur Netlify

### Prérequis

- Un compte Netlify (gratuit)
- Un dépôt GitHub avec votre code

### Étape par étape

#### 1. Initialiser et push sur GitHub

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit - Portfolio avec Next.js 15"

# Ajouter le remote (remplacez par votre repo)
git remote add origin https://github.com/votre-username/portfolio.git

# Push sur GitHub
git branch -M main
git push -u origin main
```

#### 2. Créer un nouveau site sur Netlify

1. Connectez-vous à [Netlify](https://app.netlify.com)
2. Cliquez sur **"New site"** dans le menu
3. Sélectionnez **"Import from Git"**
4. Choisissez **GitHub** et autorisez Netlify si demandé
5. Sélectionnez votre dépôt `portfolio` dans la liste

#### 3. Configurer le build

Dans la configuration du build sur Netlify :

- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node.js version**: `18` (ou automatique)

**Note importante** :
- Le projet utilise l'export statique (`output: "export"` dans `next.config.ts`)
- Le dossier `out` est automatiquement créé par le build
- Pas besoin de configuration supplémentaire

#### 4. Déployer

Cliquez sur **"Deploy site"**. Netlify va :
- Cloner votre dépôt
- Installer les dépendances (`npm install`)
- Builder le projet (`npm run build`)
- Déployer le site

Le déploiement devrait réussir sans erreur car le projet est configuré pour l'export statique.

#### 5. Configurer le domaine personnalisé (optionnel)

1. Allez dans **Site settings**
2. Cliquez sur **"Domain management"**
3. Ajoutez votre domaine personnalisé
4. Suivez les instructions DNS de Netlify

## 🔧 Configuration des variables d'environnement (optionnel)

Si votre portfolio nécessite des variables d'environnement (API keys, etc.) :

1. Dans Netlify, allez sur votre site
2. **Site settings** → **Build & deploy** → **Environment variables**
3. Ajoutez vos variables :

```
NEXT_PUBLIC_API_URL=votre_url_api
NEXT_PUBLIC_API_KEY=votre_api_key
```

## ⚡ Build Hooks (optionnel)

Les build hooks permettent de déclencher un nouveau déploiement automatiquement :

1. **Site settings** → **Build & deploy** → **Build hooks**
2. Cliquez sur **"Add build hook"**
3. Donnez un nom (ex: "Update content")
4. Copiez l'URL générée

Vous pouvez ensuite utiliser cette URL dans vos scripts CI/CD pour déclencher des déploiements.

## 🧪 Tests et Validation

### Checklist de validation avant déploiement

- [ ] Lancer `npm run dev` et vérifier que tout fonctionne localement
- [ ] Tester la navigation (desktop et mobile)
- [ ] Vérifier que toutes les images s'affichent correctement
- [ ] Tester les liens (GitHub, démo, réseaux sociaux)
- [ ] Vérifier que le formulaire de contact fonctionne (visuellement)
- [ ] Tester le mode sombre/clair
- [ ] Vérifier l'accessibilité (navigation clavier, lecteur d'écran)
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari)
- [ ] Vérifier sur différents appareils (mobile, tablette, desktop)
- [ ] Tester avec Chrome DevTools Lighthouse
- [ ] Vérifier que tous les textes alternatifs (alt) sont présents
- [ ] Confirmer que les meta tags sont corrects

### Tests responsive

Utilisez les outils du navigateur pour tester différentes tailles d'écran :
- **Mobile**: 375px (iPhone SE), 390px (iPhone 12/13/14)
- **Tablette**: 768px (iPad)
- **Desktop**: 1024px, 1440px, 1920px

## 📊 Performance

Le portfolio est optimisé pour la performance :

- Lazy loading des images
- Optimisation du code JavaScript
- CSS critique inline
- Compression automatique

Pour vérifier la performance, utilisez Google Lighthouse ou PageSpeed Insights.

## 🐛 Résolution de problèmes

### Erreurs de déploiement Netlify

#### Problème : "Les journaux de déploiement sont actuellement indisponibles"

**Solution** : Ce problème a été résolu en configurant le projet pour l'export statique. Les modifications apportées sont :

1. **next.config.ts** - Configuré avec `output: "export"` et `images.unoptimized: true`
2. **netlify.toml** - Publish directory défini sur `out`
3. **package.json** - Script build modifié pour l'export statique
4. **Suppression des routes API** - Les API routes ne sont pas compatibles avec l'export statique

Le build fonctionne maintenant correctement et génère le dossier `out` avec tous les fichiers statiques nécessaires.

#### Problème : Le build échoue sur Netlify

```bash
# Nettoyer les caches et rebuild
rm -rf .next out node_modules
npm install
npm run build
```

Vérifiez que :
- Le build command est `npm run build`
- Le publish directory est `out`
- Node.js version est correct (18 ou supérieur)

### Problème : Le build échoue en local

```bash
# Nettoyer les caches
rm -rf .next out node_modules

# Réinstaller les dépendances
npm install

# Builder à nouveau
npm run build
```

### Problème : Images ne s'affichent pas

- Vérifiez que les images sont dans `public/images/`
- Vérifiez les chemins dans `src/data/projects.ts`
- Assurez-vous que `images.unoptimized: true` est dans `next.config.ts`
- Assurez-vous que les noms de fichiers sont corrects

### Problème : Erreur de déploiement Netlify

- Vérifiez le build command et publish directory
- Consultez les logs de déploiement dans Netlify
- Assurez-vous que toutes les dépendances sont dans package.json
- Vérifiez que le dossier `out` est généré par le build local

## 📝 Licence

Ce projet est sous licence MIT. N'hésitez pas à l'utiliser comme base pour votre propre portfolio.

## 🤝 Contribuer

Les contributions sont les bienvenues ! Si vous trouvez un bug ou avez une suggestion d'amélioration :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📧 Contact

Pour toute question ou collaboration, n'hésitez pas à me contacter via le formulaire sur le site ou par email à contact@example.com.

---

Développé avec ❤️ et Next.js 15
