export const siteConfig = {
  name: '153 Food',
  description:
    'Restaurant halal à Lyon 5ème - Pizzas, burgers, tacos. Livraison 0.50€ dès 15€ ! À emporter ou sur place. Noté 4.3/5.',
  url: 'https://153food.fr',
  ogImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=630&fit=crop&q=80', // Pizza pour Open Graph
  keywords: [
    'restaurant Lyon 5',
    'fast food Lyon',
    'burger Lyon',
    'pizza Lyon 5',
    'tacos Lyon',
    'restaurant halal Lyon',
    'livraison Lyon 5',
    'livraison pas cher Lyon',
    '153 Food',
    'Barthélémy Buyer',
    'restaurant rapide Lyon 5ème',
  ],
}

export const restaurantInfo = {
  name: '153 Food',
  address: {
    street: '153 Avenue Barthélémy Buyer',
    postalCode: '69005',
    city: 'Lyon',
    country: 'France',
  },
  contact: {
    phone: '09 51 74 58 04',
    email: 'contact@153food.fr',
  },
  hours: {
    lundi: { open: 'Fermé' },
    mardi: { open: '11:00-14:00, 18:00-23:00' },
    mercredi: { open: '11:00-14:30, 18:00-23:00' },
    jeudi: { open: '11:00-14:00, 18:00-23:00' },
    vendredi: { open: '14:00-23:00' },
    samedi: { open: '11:00-23:00' },
    dimanche: { open: '11:00-15:00, 17:30-23:00' },
  },
  services: {
    delivery: true,
    takeout: true,
    halal: true,
    wheelchairAccessible: true,
    creditCards: true,
  },
  social: {
    facebook: 'https://www.facebook.com/people/Le-153/100066913394572/',
    instagram: 'https://instagram.com/153food',
    twitter: 'https://twitter.com/153food',
  },
}

export type OpeningHours = typeof restaurantInfo.hours
