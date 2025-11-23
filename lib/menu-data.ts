export interface BurgerItem {
  name: string
  priceMenu: string
  priceSingle: string
}

export interface PizzaItem {
  name: string
  description: string
  price33: string
  price40: string
  price50: string | null
}

export interface SandwichItem {
  name: string
  description: string
  price?: string
  priceChicken?: string
  priceMenu?: string
  priceSingle?: string
  badge?: string
}

export interface SaladeItem {
  name: string
  description: string
  price: string
}

export interface DessertItem {
  name: string
  description?: string
  price: string
}

export interface BoissonItem {
  name: string
  size?: string
  price: string
}

export const burgers: BurgerItem[] = [
  { name: 'Cheese', priceMenu: '5.00', priceSingle: '3.00' },
  { name: 'Maxi Beef', priceMenu: '6.00', priceSingle: '4.00' },
  { name: 'Double Maxi Beef', priceMenu: '7.00', priceSingle: '5.00' },
  { name: 'Maxi Fish', priceMenu: '6.00', priceSingle: '4.00' },
  { name: 'Maxi Chicken', priceMenu: '6.00', priceSingle: '4.00' },
  { name: 'Big', priceMenu: '6.50', priceSingle: '4.50' },
  { name: "Bob's", priceMenu: '6.50', priceSingle: '4.50' },
  { name: '163', priceMenu: '7.00', priceSingle: '5.00' },
  { name: 'Mega Bun', priceMenu: '8.00', priceSingle: '6.00' },
]

export const pizzasBaseTomate: PizzaItem[] = [
  {
    name: 'La Margarita',
    description: 'Sauce tomate, mozzarella, olives noires, origan',
    price33: '7.00',
    price40: '9.00',
    price50: null,
  },
  {
    name: 'La Végétarienne',
    description:
      'Sauce tomate, mozzarella, champignons, oignons, poivron, olives noires, tomates fraîches, origan',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: 'La Thonata',
    description:
      'Sauce tomate, mozzarella, thon, oignons, olives noires, emmental',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: "L'Anchois",
    description: 'Sauce tomate, mozzarella, anchois, câpres, olives noires',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: "L'Océane",
    description:
      'Sauce tomate, mozzarella, fruits de mer, persillade, jus de citron',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: 'La Reine',
    description:
      'Sauce tomate, mozzarella, jambon de dinde, double champignons, olives noires, origan',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: "L'Orientale",
    description:
      'Sauce tomate, mozzarella, double merguez, poivron, oignons, olives noires',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: 'La 4 fromages',
    description: 'Sauce ou crème légère, mozzarella, chèvre, emmental, bleu',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: 'La Buffalo',
    description:
      'Sauce barbecue, mozzarella, viande hachée, champignons, chorizo de boeuf',
    price33: '10.00',
    price40: '13.00',
    price50: '16.00',
  },
  {
    name: 'La Campione',
    description:
      'Sauce tomate, mozzarella, boeuf épicé, oeuf, olives noires, emmental',
    price33: '10.00',
    price40: '13.00',
    price50: '16.00',
  },
  {
    name: 'La Kebab',
    description:
      'Sauce tomate, mozzarella, kebab de volailles rôties et marinées, poivron, oignons, crème fraîche, champignons, origan',
    price33: '10.00',
    price40: '13.00',
    price50: '16.00',
  },
  {
    name: 'La Bolognaise Suprême',
    description:
      'Sauce tomate, double mozzarella, double boulettes de boeuf épicé, champignons, emmental',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Carnivore',
    description:
      'Sauce tomate ou barbecue, mozzarella, filet de poulet mariné, boeuf épicé, merguez',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Chef',
    description:
      'Sauce tomate ou crème légère, mozzarella, jambon de dinde, filet de poulet mariné, chorizo de boeuf, boeuf épicé, poivron, olives noires',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
]

export const pizzasBaseCreme: PizzaItem[] = [
  {
    name: 'La Savoyarde',
    description:
      'Crème légère, mozzarella, lardons de veau fumés, pomme de terre, reblochon',
    price33: '10.00',
    price40: '13.00',
    price50: '16.00',
  },
  {
    name: 'La Norvégienne',
    description:
      'Crème légère, mozzarella, saumon fumé, persillade, jus de citron',
    price33: '10.00',
    price40: '13.00',
    price50: '16.00',
  },
  {
    name: 'La Boisée',
    description:
      'Crème légère, mozzarella, filet de poulet mariné, poivron, sauce gruyère',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Boisée Suprême',
    description:
      'Crème légère, mozzarella, filet de poulet mariné, poivron, champignons, pomme de terre, oignons, sauce gruyère',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: "L'Indienne",
    description:
      'Crème légère, mozzarella, oignons, filet de poulet curry, kebab de volailles, pomme de terre',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Chicken',
    description:
      'Crème légère, mozzarella, filet de poulet, oignons, jambon de dinde, sauce barbecue',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Forestière',
    description:
      'Crème légère, mozzarella, lardons de veau fumés, oignons, jambon de dinde, champignons, origan',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
]

export const sandwichs: SandwichItem[] = [
  {
    name: 'Miche',
    description:
      'Viandes au choix : Escalope, Merguez, Steak, Cordon Bleu, Nuggets',
    price: '5.50',
    priceChicken: '6.50',
  },
  {
    name: 'Tacos',
    description: 'Viandes au choix avec frites, sauce fromagère',
    price: '8.00',
  },
  {
    name: 'Maxi Tacos',
    description: 'Format XXL avec viandes au choix, frites, sauce fromagère',
    price: '10.00',
  },
  {
    name: 'Galette',
    description: 'Galette grillée avec viandes au choix',
    price: '8.00',
  },
  {
    name: 'Roulé',
    description: '180g de viande, wrap grillé',
    price: '9.50',
    badge: '180g de viande',
  },
  {
    name: 'Hummer',
    description: 'Sandwich gourmand avec viande au choix',
    price: '6.00',
  },
  {
    name: 'Panini',
    description: 'Fromages, jambon, steak',
    price: '7.50',
  },
  {
    name: 'Brass',
    description: 'Sandwich spécial maison',
    priceMenu: '7.00',
    priceSingle: '5.00',
  },
]

export const salades: SaladeItem[] = [
  {
    name: 'Du Jour',
    description: 'Salade verte, tomate, maïs, olive',
    price: '6.00',
  },
  {
    name: 'Fraîcheur',
    description: 'Salade verte, jambon de dinde, emmental, émincé de volaille',
    price: '6.00',
  },
  {
    name: 'Chèvre Chaud',
    description: 'Salade verte, maïs, emmental, mozza, toast de chèvre chaud',
    price: '6.00',
  },
  {
    name: 'Nordique',
    description: 'Salade verte, saumon fumé, olives noires, tomate',
    price: '6.00',
  },
  {
    name: '153',
    description:
      'Salade verte, tomate, emmental, mozza, maïs, thon, jambon de dinde, fromage de chèvre',
    price: '6.50',
  },
]

export const desserts: DessertItem[] = [
  {
    name: 'Glaces',
    description: 'Häagen-Dazs - Différents parfums',
    price: '3.00',
  },
  {
    name: 'Tiramisu Maison',
    price: '3.50',
  },
  {
    name: 'Brownie',
    price: '3.50',
  },
  {
    name: 'Salade de Fruits',
    price: '3.00',
  },
]

export const boissons: BoissonItem[] = [
  {
    name: 'Boissons',
    size: '33cl',
    price: '1.50',
  },
  {
    name: 'Boissons',
    size: '2cl',
    price: '2.00',
  },
  {
    name: 'Coca-Cola',
    size: '33cl',
    price: '3.00',
  },
  {
    name: 'Boissons',
    size: '3cl',
    price: '3.00',
  },
  {
    name: 'Oasis',
    size: '2L',
    price: '4.00',
  },
]

export const menuInfo = {
  burgerMenuIncludes: 'Menu burger : frites + boisson',
  specialOffer: 'Offre spéciale : Pizza 40cm au prix du 33cm (Lundi - Jeudi)',
  deliveryInfo: "Livraison à 0.50€ dès 15€ d'achat sur Lyon 5ème",
}
