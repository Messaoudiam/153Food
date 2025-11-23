# 153 Food - Site Vitrine Restaurant

Site vitrine moderne et responsive pour le restaurant 153 Food situé à Lyon 5ème.

## Technologies Utilisées

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique strict
- **Tailwind CSS v4** - Framework CSS avec approche mobile-first
- **shadcn/ui** - Composants UI réutilisables
- **Lucide React** - Icônes modernes

## Structure du Projet

```
153-food/
├── app/
│   ├── layout.tsx          # Layout principal avec navigation et footer
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux et variables Tailwind
│   ├── menu/
│   │   └── page.tsx        # Page Menu
│   └── contact/
│       └── page.tsx        # Page Contact
├── components/
│   ├── navigation.tsx      # Composant de navigation responsive
│   ├── footer.tsx          # Composant footer
│   └── ui/                 # Composants shadcn/ui
├── lib/
│   ├── config.ts           # Configuration du restaurant (infos, SEO)
│   └── utils.ts            # Utilitaires (fonction cn)
└── public/
    └── images/             # Images du site
```

## Installation et Démarrage

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Autres commandes

```bash
# Build de production
npm run build

# Démarrer le serveur de production
npm start

# Linting
npm run lint

# Formater le code avec Prettier
npx prettier --write .
```

## Approche Mobile-First

Toutes les pages ont été conçues avec une approche mobile-first :

- Classes Tailwind par défaut = mobile
- Breakpoints : `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

## Configuration

### Informations du Restaurant

Modifier les informations du restaurant dans `/lib/config.ts` :

```typescript
export const restaurantInfo = {
  name: '153 Food',
  address: { ... },
  contact: { ... },
  hours: { ... },
  social: { ... }
}
```

### Métadonnées SEO

Les métadonnées SEO globales sont également dans `/lib/config.ts` :

```typescript
export const siteConfig = {
  name: '153 Food',
  description: '...',
  url: '...',
  keywords: [...]
}
```

## Pages

### Page d'Accueil (/)

- Hero section avec CTA
- Section caractéristiques (4 cartes)
- Section CTA secondaire
- Horaires et localisation

### Page Menu (/menu)

- Catalogue complet des plats
- 6 catégories : Burgers, Sandwiches, Salades, Accompagnements, Boissons, Desserts
- Prix et descriptions détaillées
- Informations sur les formules

### Page Contact (/contact)

- Coordonnées complètes
- Formulaire de contact
- Placeholder pour carte Google Maps

## Personnalisation des Couleurs

Les couleurs principales sont configurées dans `app/globals.css`.
La couleur d'accent principale est orange (`orange-600`).

Pour changer la palette :

1. Modifier les variables CSS dans `app/globals.css`
2. Remplacer les classes `orange-*` dans les composants

## Optimisation SEO

- Métadonnées configurées dans chaque page
- Structure sémantique HTML5
- Open Graph et Twitter Cards
- Sitemap automatique (Next.js)
- robots.txt configuré

## Prochaines Étapes

- [ ] Ajouter de vraies images dans `/public/images`
- [ ] Configurer Google Maps sur la page contact
- [ ] Implémenter la logique du formulaire de contact
- [ ] Ajouter un système de commande en ligne
- [ ] Configurer Analytics
- [ ] Optimiser les images avec next/image

## Déploiement

Le projet est prêt à être déployé sur Vercel, Netlify ou tout autre service supportant Next.js.

```bash
# Build de production
npm run build

# Le dossier .next contient les fichiers optimisés
```

## License

Propriétaire - 153 Food © 2024
