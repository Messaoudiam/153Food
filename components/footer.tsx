import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { restaurantInfo } from '@/lib/config'

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Coordonnées */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                />
                <address className="not-italic">
                  {restaurantInfo.address.street}
                  <br />
                  {restaurantInfo.address.postalCode}{' '}
                  {restaurantInfo.address.city}
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${restaurantInfo.contact.phone}`}
                    className="hover:underline"
                  >
                    {restaurantInfo.contact.phone}
                  </a>
                  <a
                    href={`tel:${restaurantInfo.contact.mobile}`}
                    className="hover:underline"
                  >
                    {restaurantInfo.contact.mobile}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a
                  href={`mailto:${restaurantInfo.contact.email}`}
                  className="hover:underline"
                >
                  {restaurantInfo.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Horaires</h3>
            <div className="space-y-1 text-sm">
              <p className="flex justify-between gap-2">
                <span>Lundi:</span>
                <span className="text-right text-red-600 font-semibold">
                  Fermé
                </span>
              </p>
              <p className="flex justify-between gap-2">
                <span>Mardi:</span>
                <span className="text-right">11h-14h, 18h-23h</span>
              </p>
              <p className="flex justify-between gap-2">
                <span>Mercredi:</span>
                <span className="text-right">11h-14h30, 18h-23h</span>
              </p>
              <p className="flex justify-between gap-2">
                <span>Jeudi:</span>
                <span className="text-right">11h-14h, 18h-23h</span>
              </p>
              <p className="flex justify-between">
                <span>Vendredi:</span>
                <span>14h-23h</span>
              </p>
              <p className="flex justify-between">
                <span>Samedi:</span>
                <span>11h-23h</span>
              </p>
              <p className="flex justify-between">
                <span>Dimanche:</span>
                <span>11h-15h, 17h30-23h</span>
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={restaurantInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Suivez-nous sur Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. Tous droits
            réservés.
          </p>
          <p className="mt-2">
            Site réalisé par{' '}
            <a
              href="https://forge-agency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 hover:underline"
            >
              Forge Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
