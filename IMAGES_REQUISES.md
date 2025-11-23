# Images requises pour le SEO

## État actuel des icônes ✅

Les icônes sont déjà configurées et fonctionnelles:
- ✅ `app/favicon.ico` - Favicon principal
- ✅ `app/icon.tsx` - Génère dynamiquement icon-32x32.png
- ✅ `app/apple-icon.tsx` - Génère dynamiquement apple-touch-icon-180x180.png

**Aucune action requise pour les favicons!**

---

## Images à créer et ajouter

### 1. Image Open Graph (PRIORITAIRE ⚠️)
**Emplacement:** `/public/images/og-image.jpg`
**Dimensions:** 1200 x 630 pixels
**Format:** JPG ou PNG
**Taille max:** 1 MB
**Utilisation:** Aperçu sur les réseaux sociaux (Facebook, Twitter, LinkedIn)

**Contenu suggéré:**
- Logo 153 Food
- Texte: "Restaurant Halal Lyon 5"
- Photo appétissante de vos plats
- Mention "Livraison 0.50€"

### 2. Photo façade restaurant
**Emplacement:** `/public/images/restaurant-front.jpg`
**Dimensions:** 1920 x 1080 pixels minimum
**Format:** JPG
**Utilisation:** Schema.org, Google My Business

**Contenu:** Photo de l'extérieur du restaurant au 153 Avenue Barthélémy Buyer

### 3. Photo menu/plats
**Emplacement:** `/public/images/food-menu.jpg`
**Dimensions:** 1920 x 1080 pixels minimum
**Format:** JPG
**Utilisation:** Schema.org, galerie photos

**Contenu:** Photo attractive de vos plats phares (burger, pizza, tacos)


## Outils recommandés

### Pour créer l'image Open Graph
- Canva: https://www.canva.com
- Template Open Graph disponible
- Dimensions préréglées

### Pour optimiser les images
- TinyPNG: https://tinypng.com (compression JPG/PNG)
- Squoosh: https://squoosh.app (conversion WebP/AVIF)

## Priorité

1. **🔴 URGENT:** og-image.jpg (partage réseaux sociaux)
2. **🟠 IMPORTANT:** Photos restaurant/plats (confiance client)

## Notes

- Toutes les images doivent être optimisées pour le web
- Utilisez des noms de fichiers descriptifs
- Ajoutez les images dans le dossier `/public/images/`
- Les favicons sont déjà générés dynamiquement par Next.js ✅

## Vérification

Une fois les images ajoutées, mettez à jour `lib/config.ts` ligne 6:

```typescript
ogImage: '/images/og-image.jpg', // Retirer le TODO et le logo.svg
```
