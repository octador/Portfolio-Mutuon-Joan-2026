# Portfolio Joan Mutuon - Développeur Web

Portfolio professionnel simple en HTML, CSS et JavaScript, conçu pour être élégant, moderne et facile à déployer.

## 📋 Description

Ce portfolio est un site statique multi-pages présentant le profil, les compétences, les projets et les informations de contact de Joan Mutuon, développeur web.

**Caractéristiques :**
- ✅ HTML5 sémantique et accessible
- ✅ CSS3 moderne (Flexbox, Grid, Variables CSS)
- ✅ JavaScript vanilla (pas de framework)
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Menu mobile fonctionnel
- ✅ Formulaire de contact avec validation
- ✅ Animations subtiles et professionnelles
- ✅ Prêt pour le déploiement sur Netlify

## 📁 Structure du projet

```
portfolio-simple/
│
├── index.html          # Page d'accueil
├── about.html          # Page À propos
├── skills.html         # Page Compétences
├── projects.html       # Page Projets
├── contact.html        # Page Contact
├── README.md           # Documentation
│
├── css/
│   └── style.css       # Feuille de style principale
│
├── js/
│   └── script.js       # JavaScript principal
│
└── assets/
    └── images/        # Répertoire pour les images
```

## 🎨 Design et Style

### Palette de couleurs
- **Couleur principale :** #2d3748 (Gris foncé)
- **Couleur secondaire :** #718096 (Gris moyen)
- **Couleur d'accent :** #38b2ac (Teal/Turquoise)
- **Fond :** #ffffff (Blanc)
- **Fond alternatif :** #f7fafc (Gris très clair)

### Typographie
- **Police :** Inter (Google Fonts)
- **Tailles :** Responsive, de 16px (base) à 3.5rem (titres principaux)

### Composants
- Navigation avec menu hamburger (mobile)
- Cartes pour projets et compétences
- Barres de progression animées
- Badges/Tags pour les technologies
- Formulaire avec validation en temps réel

## 🚀 Déploiement sur Netlify

### Méthode 1: Via GitHub (Recommandé)

1. **Initialiser un repository Git**
   ```bash
   cd portfolio-simple
   git init
   git add .
   git commit -m "Initial commit - Portfolio Joan Mutuon"
   ```

2. **Créer un repository sur GitHub**
   - Allez sur [github.com](https://github.com)
   - Créez un nouveau repository (par exemple: `portfolio`)
   - Copiez l'URL du repository

3. **Connecter et pousser le code**
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Déployer sur Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Connectez-vous avec votre compte GitHub
   - Cliquez sur "Add new site" > "Import an existing project"
   - Sélectionnez votre repository GitHub
   - Les paramètres de build par défaut sont corrects (pas de build command)
   - Cliquez sur "Deploy site"

### Méthode 2: Drag & Drop

1. **Préparer les fichiers**
   ```bash
   # Assurez-vous que tous les fichiers sont dans portfolio-simple/
   ```

2. **Déployer sur Netlify**
   - Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)
   - Glissez-déposez le dossier `portfolio-simple` dans la zone indiquée
   - Attendez le déploiement (quelques secondes)

3. **Personnaliser le site** (Optionnel)
   - Changez le nom du site dans les paramètres Netlify
   - Configurez votre propre domaine personnalisé si nécessaire

## 📝 Personnalisation

### Modifier les informations

1. **Modifier le nom et les informations**
   - Ouvrez chaque fichier HTML
   - Remplacez "Joan Mutuon" par votre nom
   - Modifiez les emails et les liens

2. **Modifier les couleurs**
   - Ouvrez `css/style.css`
   - Modifiez les variables CSS dans la section `:root`
   ```css
   :root {
       --color-primary: #2d3748;      /* Votre couleur principale */
       --color-secondary: #718096;    /* Votre couleur secondaire */
       --color-accent: #38b2ac;       /* Votre couleur d'accent */
   }
   ```

3. **Modifier les projets**
   - Ouvrez `projects.html`
   - Ajoutez, modifiez ou supprimez des cartes de projet
   - Mettez à jour les liens GitHub

4. **Modifier les compétences**
   - Ouvrez `skills.html`
   - Ajustez les pourcentages et les descriptions
   - Ajoutez ou supprimez des compétences

### Ajouter des images

1. **Placez vos images** dans le dossier `assets/images/`

2. **Référencez-les** dans le HTML :
   ```html
   <img src="assets/images/votre-image.jpg" alt="Description de l'image">
   ```

## ✨ Fonctionnalités JavaScript

### Menu Mobile
- Toggle automatique sur mobile/tablette
- Fermeture lors du clic sur un lien
- Fermeture lors du clic en dehors du menu

### Validation du Formulaire
- Validation en temps réel
- Messages d'erreur clairs
- Validation d'email avec expression régulière
- Simulation d'envoi (à remplacer par un backend réel)

### Animations
- Apparition des éléments au scroll
- Animation des barres de progression
- Transitions subtiles sur les interactions
- Smooth scroll pour les liens ancrés

## 🌐 Navigation

Le site comprend 5 pages principales :

1. **Accueil (`index.html`)**
   - Présentation courte
   - CTA vers les projets et le contact
   - Aperçu des services

2. **À propos (`about.html`)**
   - Présentation détaillée
   - Parcours professionnel (timeline)
   - Valeurs professionnelles

3. **Compétences (`skills.html`)**
   - HTML5 (structure sémantique, accessibilité, SEO)
   - CSS3 (Flexbox, Grid, animations, responsive)
   - JavaScript (ES6+, DOM, Fetch API)
   - Autres compétences (responsive design, bonnes pratiques)

4. **Projets (`projects.html`)**
   - Cartes de projets avec titres, descriptions
   - Technologies utilisées (tags)
   - Liens GitHub (fictifs mais personnalisables)

5. **Contact (`contact.html`)**
   - Formulaire avec validation
   - Informations de contact
   - Liens vers les réseaux sociaux

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styling, Flexbox, Grid, Variables CSS
- **JavaScript ES6+** : Interactivité et validation
- **Google Fonts** : Police Inter
- **Netlify** : Hébergement et déploiement

## 📱 Responsive Design

Le site est optimisé pour :
- **Mobile** (< 480px)
- **Tablette** (481px - 768px)
- **Desktop** (> 768px)

Breakpoints utilisés :
```css
@media (max-width: 768px)  /* Tablette et en dessous */
@media (max-width: 480px)  /* Mobile */
```

## ♿ Accessibilité

- Balises sémantiques HTML5
- Attributs ARIA appropriés
- Labels pour les formulaires
- Navigation au clavier
- Contraste des couleurs respecté
- Support pour les lecteurs d'écran

## 📄 Licence

Ce portfolio est un modèle libre de droit. Vous pouvez l'utiliser, le modifier et le distribuer selon vos besoins.

## 👨‍💻 Développeur

**Joan Mutuon** - Développeur Web

---

**Note :** Ce portfolio est prêt à être personnalisé et déployé. N'oubliez pas de remplacer les informations fictives par vos propres informations avant de le mettre en ligne.
