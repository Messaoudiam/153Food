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

export interface SnackItem {
  name: string
  description?: string
  price: string
  priceGrande?: string
}

export const burgers: BurgerItem[] = [
  { name: 'Cheese', priceMenu: '6.50', priceSingle: '3.50' },
  { name: 'Maxi Beef', priceMenu: '8.00', priceSingle: '5.00' },
  { name: 'Double Maxi Beef', priceMenu: '9.00', priceSingle: '6.00' },
  { name: 'Maxi Fish', priceMenu: '7.50', priceSingle: '4.50' },
  { name: 'Maxi Chicken', priceMenu: '8.00', priceSingle: '5.00' },
  { name: 'Big', priceMenu: '8.50', priceSingle: '5.50' },
  { name: "Bap's", priceMenu: '8.50', priceSingle: '5.50' },
  { name: '153', priceMenu: '9.00', priceSingle: '6.00' },
  { name: 'Mega Bun', priceMenu: '10.00', priceSingle: '7.00' },
  { name: 'Chicken Beef', priceMenu: '9.00', priceSingle: '6.00' },
]

export const pizzasBaseTomate: PizzaItem[] = [
  {
    name: 'La Margarita',
    description: '🍅 Sauce tomate, 🧀 mozzarella, olives noires, origan',
    price33: '9.00',
    price40: '12.00',
    price50: '15.00',
  },
  {
    name: 'La Végétarienne',
    description:
      '🥬 Sauce tomate, mozzarella, 🍄 champignons, oignons, poivron, olives noires, tomates fraîches, origan',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Thonata',
    description:
      '🐟 Sauce tomate, mozzarella, thon, oignons, olives noires, emmental',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: "L'Anchois",
    description: '🐟 Sauce tomate, mozzarella, anchois, câpres, olives noires',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: "L'Océane",
    description:
      '🦐 Sauce tomate, mozzarella, fruits de mer, persillade, 🍋 jus de citron',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Reine',
    description:
      '👑 Sauce tomate, mozzarella, jambon de dinde, 🍄 double champignons, olives noires, origan',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: "L'Orientale",
    description:
      '🌶️ Sauce tomate, mozzarella, double merguez, poivron, oignons, olives noires',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La 4 fromages',
    description: '🧀 Sauce ou crème légère, mozzarella, chèvre, emmental, bleu',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
  {
    name: 'La Buffalo',
    description:
      '🔥 Sauce barbecue, mozzarella, viande hachée, 🍄 champignons, chorizo de boeuf',
    price33: '12.00',
    price40: '15.00',
    price50: '18.00',
  },
  {
    name: 'La Campione',
    description:
      '🏆 Sauce tomate, mozzarella, boeuf épicé, 🥚 oeuf, olives noires, emmental',
    price33: '12.00',
    price40: '15.00',
    price50: '18.00',
  },
  {
    name: 'La Kebab',
    description:
      '🥙 Sauce tomate, mozzarella, kebab de volailles rôties et marinées, poivron, oignons, crème fraîche, 🍄 champignons, origan',
    price33: '12.00',
    price40: '15.00',
    price50: '18.00',
  },
  {
    name: 'La Bolognaise Suprême',
    description:
      '🍝 Sauce tomate, double mozzarella, double boulettes de boeuf épicé, 🍄 champignons, emmental',
    price33: '13.00',
    price40: '16.00',
    price50: '19.00',
  },
  {
    name: 'La Carnivore',
    description:
      '🥩 Sauce tomate ou barbecue, mozzarella, filet de poulet mariné, boeuf épicé, merguez',
    price33: '13.00',
    price40: '16.00',
    price50: '19.00',
  },
  /*{
    name: 'La Chef',
    description:
      '⭐ Sauce tomate ou crème légère, mozzarella, jambon de dinde, 🍗 filet de poulet mariné, chorizo de boeuf, boeuf épicé, poivron, olives noires',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },*/
]

export const pizzasBaseCreme: PizzaItem[] = [
  {
    name: 'La Savoyarde',
    description:
      '🏔️ Crème légère, mozzarella, lardons de veau fumés, 🥔 pomme de terre, reblochon',
    price33: '12.00',
    price40: '15.00',
    price50: '18.00',
  },
  {
    name: 'La Norvégienne',
    description:
      '🐟 Crème légère, mozzarella, saumon fumé, persillade, 🍋 jus de citron',
    price33: '12.00',
    price40: '15.00',
    price50: '18.00',
  },
  {
    name: 'La Boisée',
    description:
      '🌲 Crème légère, mozzarella, 🍗 filet de poulet mariné, poivron, sauce gruyère',
    price33: '12.00',
    price40: '15.00',
    price50: '18.00',
  },
  {
    name: 'La Boisée Suprême',
    description:
      '🌲⭐ Crème légère, mozzarella, 🍗 filet de poulet mariné, poivron, 🍄 champignons, 🥔 pomme de terre, oignons, sauce gruyère',
    price33: '13.00',
    price40: '17.00',
    price50: '20.00',
  },
  {
    name: "L'Indienne",
    description:
      '🍛 Crème légère, mozzarella, oignons, filet de poulet curry, kebab de volailles, 🥔 pomme de terre',
    price33: '13.00',
    price40: '17.00',
    price50: '19.00',
  },
  {
    name: 'La Chicken',
    description:
      '🍗 Crème légère, mozzarella, filet de poulet, oignons, jambon de dinde, 🔥 sauce barbecue',
    price33: '13.00',
    price40: '17.00',
    price50: '19.00',
  },
  {
    name: 'La Forestière',
    description:
      '🌳 Crème légère, mozzarella, lardons de veau fumés, oignons, jambon de dinde, 🍄 champignons, origan',
    price33: '13.00',
    price40: '17.00',
    price50: '19.00',
  },
  {
    name: 'La Chèvre Miel',
    description:
      '🌳 Crème fraîche, mozzarella, emmental, chèvre, miel',
    price33: '11.00',
    price40: '14.00',
    price50: '17.00',
  },
]

export const sandwichs: SandwichItem[] = [
  {
    name: 'Miche',
    description:
      '🥖 Viandes au choix : Escalope, Merguez, Steak, Cordon Bleu, Nuggets',
    priceSingle: '6.50',
    priceMenu: '8.00',
  },
  {
    name: 'Tacos',
    description: '🌯 Viandes au choix avec 🍟 frites, 🧀 sauce fromagère',
    priceSingle: '7.50',
    priceMenu: '10.50',
  },
  {
    name: 'Maxi Tacos',
    description: '🌯💪 Format XXL avec viandes au choix, 🍟 frites, 🧀 sauce fromagère',
    priceSingle: '9.50',
    priceMenu: '12.50',
  },
  {
    name: 'Galette',
    description: '🫓 Galette grillée avec viandes au choix',
    priceSingle: '7.50',
    priceMenu: '10.50',
  },
  {
    name: 'Pain Maison',
    description: '🫓 Pain maison avec viandes au choix',
    priceSingle: '7.50',
    priceMenu: '10.50',
  },
  {
    name: 'Roulé',
    description: '🌯 180g de viande, wrap grillé',
    priceSingle: '9.00',
    priceMenu: '12.00',
    badge: '180g de viande',
  },
  {
    name: 'Panini',
    description: '🥪 4 fromages, jambon, steak, saumon, fermier, thon',
    priceSingle: '5.50',
    priceMenu: '8.50',
  },
]

export const salades: SaladeItem[] = [
  {
    name: 'Du Jour',
    description: '🥗 Salade verte, 🍅 tomate, 🌽 maïs, olive',
    price: '6.50',
  },
  {
    name: 'Fraîcheur',
    description: '🥗 Salade verte, jambon de dinde, 🧀 emmental, émincé de volaille',
    price: '6.50',
  },
  {
    name: 'Chèvre Chaud',
    description: '🥗 Salade verte, 🌽 maïs, emmental, mozza, 🧀🔥 toast de chèvre chaud',
    price: '6.50',
  },
  {
    name: 'Nordique',
    description: '🥗 Salade verte, 🐟 saumon fumé, olives noires, 🍅 tomate',
    price: '6.50',
  },
  {
    name: '153',
    description:
      '⭐ Salade verte, 🍅 tomate, emmental, mozza, 🌽 maïs, 🐟 thon, jambon de dinde, 🧀 fromage de chèvre',
    price: '7.00',
  },
]

export const desserts: DessertItem[] = [
  {
    name: 'Barre chocolatée',
    description: '🍫 Différentes variétés',
    price: '2.00',
  },
  {
    name: 'Glaces Häagen-Dazs 100ml',
    description: '🍨 Différents parfums',
    price: '3.00',
  },
  {
    name: 'Glaces Häagen-Dazs 500ml',
    description: '🍨 Différents parfums',
    price: '7.00',
  },
  {
    name: 'Salade de Fruits',
    description: '🍓 Fruits frais de saison',
    price: '3.00',
  },
  {
    name: 'Tarte Coco & Daim & Snickers',
    description: '🥥 Gourmandise maison',
    price: '3.50',
  },
  {
    name: 'Tiramisu',
    description: '🍰 Caramel, Brownie, Oréo, Spéculoos',
    price: '3.50',
  },
]

export const boissons: BoissonItem[] = [
  {
    name: 'Canette',
    size: '33cl',
    price: '2.00',
  },
  {
    name: 'Bouteille en verre',
    size: '25cl',
    price: '2.50',
  },
  {
    name: 'Bouteille',
    size: '1.5L',
    price: '3.50',
  },
  {
    name: 'Bouteille',
    size: '2L',
    price: '4.00',
  },
  {
    name: 'Bouteille en verre',
    size: '1L',
    price: '4.00',
  },
]

export const snacks: SnackItem[] = [
  {
    name: 'Croque Monsieur',
    description: '🥪 Classique jambon-fromage',
    price: '3.50',
  },
  {
    name: 'Nems Maison',
    description: '🥟 5 pcs - Volaille ou crevettes',
    price: '7.00',
  },
  {
    name: 'Potatoes',
    description: '🥔 Petite ou Grande portion',
    price: '3.50',
    priceGrande: '4.50',
  },
  {
    name: 'Frites',
    description: '🍟 Petite ou Grande portion',
    price: '3.00',
    priceGrande: '3.50',
  },
  {
    name: 'Bouchées Camemberts',
    description: '🧀 5 pcs + frites',
    price: '7.00',
  },
  {
    name: "Nugget's Frites",
    description: '🍗 5 pcs + frites',
    price: '7.00',
  },
  {
    name: 'Jalapenos',
    description: '🌶️ 5 pcs + frites',
    price: '7.00',
  },
  {
    name: 'Sticks Mozza',
    description: '🧀 5 pcs + frites',
    price: '7.00',
  },
  {
    name: 'Onion Rings',
    description: '🧅 10 pcs + frites',
    price: '7.00',
  },
  {
    name: 'Wings',
    description: '🍗 6 pcs + frites',
    price: '7.00',
  },
]

export const menuInfo = {
  burgerMenuIncludes: 'Menu burger : frites + boisson',
  specialOffer: 'Offre spéciale : Pizza 40cm au prix du 33cm (Mardi - Jeudi)',
  deliveryInfo: "Livraison gratuite dès 15€ d'achat* (minimum variable selon secteur)",
  supplementPotatoes: 'Supplément potatoes : +1.50€',
}
