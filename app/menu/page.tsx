import type { Metadata } from 'next'
import Image from 'next/image'
import {
  burgers,
  pizzasBaseTomate,
  pizzasBaseCreme,
  sandwichs,
  snacks,
  salades,
  desserts,
  boissons,
  menuEnfant,
} from '@/lib/menu-data'

// Images Unsplash pour les catégories
const categoryImages = {
  hero: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80', // Table de restaurant
  pizza:
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  burger:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
  sandwich:
    'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80', // Wrap/Tacos français
  snacks:
    'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80', // Frites/Snacks
  salad:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  dessert:
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
  drinks:
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
}

export const metadata: Metadata = {
  title: 'Menu - 153 Food Lyon 5 | Burgers, Pizzas, Tacos Halal',
  description:
    '🍕 Menu complet 153 Food Lyon 5 : 9 burgers, 21 pizzas, 8 sandwichs, tacos, salades, desserts (Häagen-Dazs, tiramisu, brownie) et boissons. Cuisine 100% halal. Livraison GRATUITE dès 15€ d&apos;achat*. Offre spéciale pizza 40cm au prix 33cm !',
}

export default function MenuPage() {
  // Schema.org Menu structured data
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: '153 Food',
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Pizzas - Base Tomate',
          hasMenuItem: pizzasBaseTomate.map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            offers: [
              {
                '@type': 'Offer',
                name: '33cm',
                price: item.price33,
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                name: '40cm',
                price: item.price40,
                priceCurrency: 'EUR',
              },
              ...(item.price50
                ? [
                    {
                      '@type': 'Offer',
                      name: '50cm',
                      price: item.price50,
                      priceCurrency: 'EUR',
                    },
                  ]
                : []),
            ],
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Pizzas - Base Crème',
          hasMenuItem: pizzasBaseCreme.map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            offers: [
              {
                '@type': 'Offer',
                name: '33cm',
                price: item.price33,
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                name: '40cm',
                price: item.price40,
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                name: '50cm',
                price: item.price50,
                priceCurrency: 'EUR',
              },
            ],
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Sandwichs',
          hasMenuItem: sandwichs.map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            offers:
              item.priceMenu && item.priceSingle
                ? [
                    {
                      '@type': 'Offer',
                      name: 'Menu',
                      price: item.priceMenu,
                      priceCurrency: 'EUR',
                    },
                    {
                      '@type': 'Offer',
                      name: 'Seul',
                      price: item.priceSingle,
                      priceCurrency: 'EUR',
                    },
                  ]
                : item.priceChicken
                  ? [
                      {
                        '@type': 'Offer',
                        name: 'Viandes',
                        price: item.price,
                        priceCurrency: 'EUR',
                      },
                      {
                        '@type': 'Offer',
                        name: 'Chicken',
                        price: item.priceChicken,
                        priceCurrency: 'EUR',
                      },
                    ]
                  : [
                      {
                        '@type': 'Offer',
                        price: item.price,
                        priceCurrency: 'EUR',
                      },
                    ],
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Burgers',
          description: 'Menu burger : frites + boisson',
          hasMenuItem: burgers.map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            offers: [
              {
                '@type': 'Offer',
                name: 'Menu',
                price: item.priceMenu,
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                name: 'Seul',
                price: item.priceSingle,
                priceCurrency: 'EUR',
              },
            ],
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Salades',
          hasMenuItem: salades.map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            offers: {
              '@type': 'Offer',
              price: item.price,
              priceCurrency: 'EUR',
            },
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Desserts',
          hasMenuItem: desserts.map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            offers: {
              '@type': 'Offer',
              price: item.price,
              priceCurrency: 'EUR',
            },
          })),
        },
        {
          '@type': 'MenuSection',
          name: 'Boissons',
          hasMenuItem: boissons.map(item => ({
            '@type': 'MenuItem',
            name: item.size ? `${item.name} ${item.size}` : item.name,
            offers: {
              '@type': 'Offer',
              price: item.price,
              priceCurrency: 'EUR',
            },
          })),
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50/30">
      {/* Schema.org Menu structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 text-white md:py-24">
        <Image
          src={categoryImages.hero}
          alt="Notre menu"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-orange-900/50" />
        <div className="container relative z-10 mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">Notre Menu</h1>
          <p className="mx-auto max-w-2xl text-sm text-gray-200 md:text-base">
            Cuisine halal • Livraison disponible • À emporter ou sur place
          </p>
        </div>
      </section>

      {/* Menu Content - Mobile First */}
      <section className="px-4 py-8 md:py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8 md:space-y-12">
            {/* PIZZAS BASE TOMATE */}
            <div id="pizzas" className="scroll-mt-20">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={categoryImages.pizza}
                    alt="Pizzas"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h2 className="border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                  Pizzas - Base Tomate
                </h2>
              </div>
              <div className="mb-4 rounded-lg bg-orange-50 p-4">
                <p className="font-semibold text-orange-900">
                  🎁 OFFRE SPÉCIALE : Pizza 40cm au prix de la 33cm
                </p>
                <p className="text-sm text-orange-800">
                  À emporter ou sur place • Du lundi au jeudi
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Suppléments : Autres 1.00€ • Viandes 1.50€
                </p>
              </div>
              <div className="space-y-4">
                {pizzasBaseTomate.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:p-6"
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold md:text-xl">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-muted-foreground">
                          33cm:
                        </span>
                        <span className="text-lg font-bold text-orange-600">
                          {item.price33}€
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-muted-foreground">
                          40cm:
                        </span>
                        <span className="text-lg font-bold text-orange-600">
                          {item.price40}€
                        </span>
                      </div>
                      {item.price50 && (
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-muted-foreground">
                            50cm:
                          </span>
                          <span className="text-lg font-bold text-orange-600">
                            {item.price50}€
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PIZZAS BASE CRÈME */}
            <div>
              <h2 className="mb-4 border-b-2 border-orange-600 pb-2 text-2xl font-bold md:mb-6 md:text-3xl">
                Pizzas - Base Crème
              </h2>
              <div className="space-y-4">
                {pizzasBaseCreme.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:p-6"
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold md:text-xl">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-muted-foreground">
                          33cm:
                        </span>
                        <span className="text-lg font-bold text-orange-600">
                          {item.price33}€
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-muted-foreground">
                          40cm:
                        </span>
                        <span className="text-lg font-bold text-orange-600">
                          {item.price40}€
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-muted-foreground">
                          50cm:
                        </span>
                        <span className="text-lg font-bold text-orange-600">
                          {item.price50}€
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SANDWICHS */}
            <div id="sandwichs" className="scroll-mt-20">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={categoryImages.sandwich}
                    alt="Sandwichs et Tacos"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h2 className="border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                  Sandwichs
                </h2>
              </div>
              <div className="mb-4 rounded-lg bg-blue-50 p-3 text-sm">
                <p className="font-medium">
                  Viandes au choix : Escalope, Merguez, Steak, Cordon Bleu,
                  Nuggets, Kebab
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Suppléments : Œuf, Sauce fromagère, Poivrons, Fromage +0.50€ • Potatoes +1€ • Viande supplémentaire +2€
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sandwichs.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      {item.badge && (
                        <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {item.priceMenu && item.priceSingle ? (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Menu</p>
                          <p className="text-lg font-bold text-orange-600">
                            {item.priceMenu}€
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Seul</p>
                          <p className="text-base font-semibold">
                            {item.priceSingle}€
                          </p>
                        </div>
                      </div>
                    ) : item.priceChicken ? (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Viandes
                          </p>
                          <p className="text-lg font-bold text-orange-600">
                            {item.price}€
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">
                            Chicken
                          </p>
                          <p className="text-base font-semibold">
                            {item.priceChicken}€
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xl font-bold text-orange-600">
                        {item.price}€
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BURGERS */}
            <div id="burgers" className="scroll-mt-20">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={categoryImages.burger}
                    alt="Burgers"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h2 className="border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                  Burgers
                </h2>
              </div>
              <div className="mb-4 rounded-lg bg-blue-50 p-3 text-sm">
                <p className="font-medium">
                  2 prix affichés : Menu (avec frites + boisson) / Seul
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {burgers.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Menu</p>
                        <p className="text-xl font-bold text-orange-600">
                          {item.priceMenu}€
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Seul</p>
                        <p className="text-lg font-semibold">
                          {item.priceSingle}€
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SNACKS / TEX MEX */}
            <div id="snacks" className="scroll-mt-20">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={categoryImages.snacks}
                    alt="Snacks"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h2 className="border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                  Snacks & Tex Mex
                </h2>
              </div>
              <div className="mb-4 rounded-lg bg-yellow-50 p-3 text-sm">
                <p className="font-medium">
                  🍟 Supplément potatoes : +1.50€
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {snacks.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        {item.description && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        {item.priceGrande ? (
                          <div className="flex flex-col">
                            <span className="text-lg font-bold text-orange-600">
                              {item.price}€
                            </span>
                            <span className="text-sm text-muted-foreground">
                              Grande: {item.priceGrande}€
                            </span>
                          </div>
                        ) : (
                          <span className="text-xl font-bold text-orange-600">
                            {item.price}€
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MENU ENFANT */}
            <div id="menu-enfant" className="scroll-mt-20">
              <h2 className="mb-6 border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                Menu Enfant 🧒
              </h2>
              <div className="rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 p-6 shadow-sm border-2 border-dashed border-orange-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{menuEnfant.name} 🎁</h3>
                    <p className="mt-2 text-muted-foreground">
                      {menuEnfant.description}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">
                    {menuEnfant.price}€
                  </span>
                </div>
              </div>
            </div>

            {/* SALADES */}
            <div id="salades" className="scroll-mt-20">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={categoryImages.salad}
                    alt="Salades"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h2 className="border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                  Salades
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {salades.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-orange-600">
                        {item.price}€
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESSERTS */}
            <div id="desserts" className="scroll-mt-20">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={categoryImages.dessert}
                    alt="Desserts"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h2 className="border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                  Desserts
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {desserts.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="text-center">
                      <h3 className="mb-2 text-lg font-semibold">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="mb-3 text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                      <p className="text-xl font-bold text-orange-600">
                        {item.price}€
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOISSONS */}
            <div id="boissons" className="scroll-mt-20">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
                  <Image
                    src={categoryImages.drinks}
                    alt="Boissons"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h2 className="border-b-2 border-orange-600 pb-2 text-2xl font-bold md:text-3xl">
                  Boissons
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {boissons.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        {item.size && (
                          <p className="text-sm text-muted-foreground">
                            {item.size}
                          </p>
                        )}
                      </div>
                      <span className="text-xl font-bold text-orange-600">
                        {item.price}€
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 rounded-lg bg-orange-50 p-6 md:mt-12">
            <h3 className="mb-3 text-lg font-semibold">Informations</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="font-semibold text-orange-700">
                🚚 Livraison GRATUITE dès 15€ d&apos;achat* (minimum variable
                selon secteur)
              </li>
              <li>✓ Cuisine 100% halal</li>
              <li>✓ Service à emporter</li>
              <li>✓ Accessible aux personnes à mobilité réduite</li>
              <li>✓ Paiement par carte bancaire accepté</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
