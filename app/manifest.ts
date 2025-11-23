import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '153 Food - Restaurant Lyon 5',
    short_name: '153 Food',
    description:
      'Restaurant rapide à Lyon 5ème - Livraison 0.50€ dès 15€ ! Pizzas, burgers, tacos, sandwiches. Cuisine halal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ea580c',
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    categories: ['food', 'restaurant'],
    lang: 'fr-FR',
    dir: 'ltr',
    orientation: 'portrait-primary',
  }
}
