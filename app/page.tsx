import Link from 'next/link'
import Image from 'next/image'
import {
  Clock,
  MapPin,
  Phone,
  Utensils,
  Leaf,
  Truck,
  Accessibility,
  CreditCard,
} from 'lucide-react'
import { restaurantInfo } from '@/lib/config'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { FAQ } from '@/components/faq'
import { OpenStatus } from '@/components/open-status'

// Images Unsplash pour les catégories
const foodImages = {
  hero: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80', // Pizza appétissante
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', // Burger juteux
  pizza: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', // Pizza four
  tacos: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80', // Wrap/Tacos français style
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80', // Salade fraîche
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Mobile First */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-4 py-16 md:min-h-[70vh] md:py-24">
        {/* Background Image */}
        <Image
          src={foodImages.hero}
          alt="Pizza artisanale halal 153 Food Lyon 5ème - livraison gratuite"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-orange-900/40" />
        <div className="container relative z-10 mx-auto text-center">
          {/* Open Status - Mobile Only */}
          <div className="mb-4 flex justify-center md:hidden">
            <OpenStatus />
          </div>

          {/* Badge Livraison */}
          <div className="mb-6 flex justify-center">
            <Badge
              variant="success"
              size="lg"
              className="gap-2 rounded-full bg-white px-4 py-2 text-sm text-green-700 shadow-lg md:text-base"
            >
              <Truck className="h-5 w-5" aria-hidden="true" />
              Livraison GRATUITE dès 15€ d&apos;achat*
            </Badge>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Bienvenue chez<br className="md:hidden" /> <span className="text-orange-400">153 Food</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-gray-200 md:text-lg lg:text-xl">
            Votre restaurant rapide au cœur de Lyon 5ème. Découvrez nos
            spécialités préparées avec passion et des produits frais.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/menu"
              className="inline-flex h-11 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Voir le menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Food Showcase Section */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl">
            Nos spécialités
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Burgers', image: foodImages.burger, href: '/menu#burgers', alt: 'Burger halal 153 Food Lyon 5 - viande fraîche' },
              { name: 'Pizzas', image: foodImages.pizza, href: '/menu#pizzas', alt: 'Pizza artisanale halal Lyon 5ème - 153 Food' },
              { name: 'Tacos & Sandwichs', image: foodImages.tacos, href: '/menu#sandwichs', alt: 'Tacos et sandwichs halal Lyon 5 - 153 Food' },
              { name: 'Salades', image: foodImages.salad, href: '/menu#salades', alt: 'Salade fraîche restaurant 153 Food Lyon' },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <span className="text-sm text-orange-300 group-hover:text-orange-200">
                      Découvrir →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Info Section - Mobile First */}
      <section className="bg-muted/40 px-4 py-12 md:py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <Card>
              <CardContent>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Horaires d&apos;ouverture
                </h2>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="flex justify-between gap-2">
                    <span className="font-medium">Lundi:</span>
                    <span className="text-right text-red-600 font-semibold">
                      Fermé
                    </span>
                  </p>
                  <p className="flex justify-between gap-2">
                    <span className="font-medium">Mardi:</span>
                    <span className="text-right">11h-14h, 18h-23h</span>
                  </p>
                  <p className="flex justify-between gap-2">
                    <span className="font-medium">Mercredi:</span>
                    <span className="text-right">11h-14h30, 18h-23h</span>
                  </p>
                  <p className="flex justify-between gap-2">
                    <span className="font-medium">Jeudi:</span>
                    <span className="text-right">11h-14h, 18h-23h</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Vendredi:</span>
                    <span>14h-23h</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Samedi:</span>
                    <span>11h-23h</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Dimanche:</span>
                    <span>11h-15h, 17h30-23h</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Nous trouver
                </h2>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="flex items-start gap-2">
                    <MapPin
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600"
                      aria-hidden="true"
                    />
                    <address className="not-italic">
                      {restaurantInfo.address.street}
                      <br />
                      {restaurantInfo.address.postalCode}{' '}
                      {restaurantInfo.address.city}
                      <br />
                      <span className="text-xs text-muted-foreground">
                        📍 Dans la galerie marchande
                      </span>
                    </address>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone
                      className="h-5 w-5 text-orange-600"
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${restaurantInfo.contact.phone}`}
                      className="hover:underline"
                    >
                      {restaurantInfo.contact.phone}
                    </a>
                  </div>

                  {/* Google Maps */}
                  <div className="mt-4 overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps?q=153+Food,+153+Avenue+Barth%C3%A9l%C3%A9my+Buyer,+69005+Lyon&output=embed&z=17"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation 153 Food"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=153+Food,+153+Avenue+Barthélémy+Buyer,+69005+Lyon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                      Itinéraire
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=153+Food+Lyon+69005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 text-base font-medium text-white transition-colors hover:bg-orange-700"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="bg-orange-600 px-4 py-12 text-white md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Une petite faim ?
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Découvrez notre menu et passez votre commande dès maintenant
          </p>
          <Link
            href="/menu"
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-orange-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
          >
            Consulter le menu
          </Link>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Features Section - Mobile First Grid */}
      <section className="bg-white px-4 py-12 md:py-20">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl">
            Pourquoi choisir 153 Food ?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Utensils,
                title: 'Produits frais',
                description:
                  'Ingrédients sélectionnés quotidiennement pour une qualité optimale',
              },
              {
                icon: Clock,
                title: 'Service rapide',
                description:
                  'Commandes préparées rapidement pour votre satisfaction',
              },
              {
                icon: MapPin,
                title: 'Bien situé',
                description: 'Au cœur de Lyon 5ème, facilement accessible',
              },
              {
                icon: Phone,
                title: 'Commande facile',
                description:
                  'Appelez-nous ou venez directement nous rendre visite',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="items-center text-center transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-orange-100 p-3">
                    <feature.icon
                      className="h-6 w-6 text-orange-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Mobile First */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl">
            Nos services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: 'Cuisine 100% Halal',
                description: 'Viandes halal certifiées',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: Truck,
                title: 'Livraison gratuite',
                description: "Dès 15€ selon secteur",
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: Accessibility,
                title: 'Accessible PMR',
                description: 'Parking, entrée et sièges',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                icon: CreditCard,
                title: 'Paiement CB',
                description: 'Cartes acceptées',
                color: 'bg-orange-100 text-orange-600',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="items-center border-2 text-center transition-all hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center">
                  <div className={`mb-4 rounded-full p-4 ${service.color}`}>
                    <service.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}
