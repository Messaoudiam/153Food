# Configuration Google Search Console

## Étapes pour obtenir le code de vérification

### 1. Accéder à Google Search Console
Allez sur https://search.google.com/search-console/

### 2. Ajouter une propriété
- Cliquez sur "Ajouter une propriété"
- Choisissez "Préfixe de l'URL"
- Entrez: `https://153food.fr`

### 3. Vérification par balise meta HTML
- Sélectionnez la méthode "Balise HTML"
- Copiez le code qui ressemble à: `<meta name="google-site-verification" content="VOTRE_CODE_ICI" />`
- Extrayez uniquement la partie `VOTRE_CODE_ICI`

### 4. Mettre à jour le code
Éditez le fichier `app/layout.tsx` ligne 76:

```typescript
verification: {
  google: 'VOTRE_CODE_ICI', // Remplacer par le code obtenu
},
```

### 5. Déployer et vérifier
1. Déployez votre site avec le nouveau code
2. Retournez sur Google Search Console
3. Cliquez sur "Vérifier"

## Après la vérification

Une fois vérifié, vous pourrez:
- Soumettre votre sitemap: `https://153food.fr/sitemap.xml`
- Voir les statistiques de recherche
- Détecter les erreurs d'indexation
- Améliorer votre référencement

## Autres vérifications recommandées

### Google My Business
- Créez ou revendiquez votre fiche Google My Business
- URL: https://business.google.com
- Complétez toutes les informations (photos, horaires, services)

### Bing Webmaster Tools
- Ajoutez aussi votre site sur Bing
- URL: https://www.bing.com/webmasters
- Utilisez la même méthode de vérification

## Soumettre le sitemap

Dans Google Search Console:
1. Allez dans "Sitemaps" (menu de gauche)
2. Ajoutez l'URL: `sitemap.xml`
3. Cliquez sur "Envoyer"

Votre sitemap sera automatiquement généré à l'URL: https://153food.fr/sitemap.xml
