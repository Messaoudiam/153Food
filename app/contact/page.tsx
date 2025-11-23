import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { restaurantInfo } from '@/lib/config'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact - 153 Food Lyon 5 | Restaurant Halal',
  description:
    'Contactez 153 Food Lyon 5ème ☎️ 09 51 74 58 04 📍 153 Avenue Barthélémy Buyer. Commandez pizzas, burgers, tacos halal. Livraison 0.50€ dès 15€.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50/30">
      {/* Hero Section */}
      <section className="bg-orange-600 px-4 py-12 text-white md:py-16">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            Contactez-nous
          </h1>
          <p className="mx-auto max-w-2xl text-sm md:text-base">
            Une question ? Une suggestion ? N&apos;hésitez pas à nous contacter
          </p>
        </div>
      </section>

      {/* Contact Content - Mobile First */}
      <section className="px-4 py-8 md:py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                  Nos coordonnées
                </h2>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-4 rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Adresse</h3>
                      <address className="text-sm text-muted-foreground not-italic">
                        {restaurantInfo.address.street}
                        <br />
                        {restaurantInfo.address.postalCode}{' '}
                        {restaurantInfo.address.city}
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Téléphone</h3>
                      <a
                        href={`tel:${restaurantInfo.contact.phone}`}
                        className="text-sm text-muted-foreground hover:text-orange-600 hover:underline"
                      >
                        {restaurantInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <a
                        href={`mailto:${restaurantInfo.contact.email}`}
                        className="text-sm text-muted-foreground hover:text-orange-600 hover:underline"
                      >
                        {restaurantInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 font-semibold">Horaires</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between gap-2">
                          <span>Lundi</span>
                          <span className="text-right text-red-600 font-semibold">
                            Fermé
                          </span>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span>Mardi</span>
                          <span className="text-right">11h-14h, 18h-23h</span>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span>Mercredi</span>
                          <span className="text-right">11h-14h30, 18h-23h</span>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span>Jeudi</span>
                          <span className="text-right">11h-14h, 18h-23h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vendredi</span>
                          <span>14h-23h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Samedi</span>
                          <span>11h-23h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dimanche</span>
                          <span>11h-15h, 17h30-23h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Envoyez-nous un message
              </h2>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 md:mt-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Comment nous trouver
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=153+Food,+153+Avenue+Barth%C3%A9l%C3%A9my+Buyer,+69005+Lyon&output=embed&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation 153 Food"
              />
            </div>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              📍 Dans la galerie marchande au 153 Avenue Barthélémy Buyer
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=153+Food,+153+Avenue+Barthélémy+Buyer,+69005+Lyon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md bg-orange-600 px-6 text-base font-medium text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Itinéraire
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=153+Food+Lyon+69005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
