import { restaurantInfo, siteConfig } from '@/lib/config'

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteConfig.url}#restaurant`,
    name: restaurantInfo.name,
    alternateName: '153 Food Lyon',
    image: [
      siteConfig.ogImage,
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=800&fit=crop&q=80', // Burger
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&h=800&fit=crop&q=80', // Pizza
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: restaurantInfo.contact.phone,
    email: restaurantInfo.contact.email,
    priceRange: '€',
    servesCuisine: [
      'Fast Food',
      'Pizza',
      'Burger',
      'Mediterranean',
      'Halal',
      'Tacos',
    ],
    acceptsReservations: false,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantInfo.address.street,
      addressLocality: restaurantInfo.address.city,
      addressRegion: 'Auvergne-Rhône-Alpes',
      postalCode: restaurantInfo.address.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.7627542,
      longitude: 4.796997,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Thursday'],
        opens: '11:00',
        closes: '14:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '11:00',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '18:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '14:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '11:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '17:30',
        closes: '23:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.3,
      reviewCount: 130,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      restaurantInfo.social.facebook,
      restaurantInfo.social.instagram,
      restaurantInfo.social.twitter,
      'https://www.google.com/maps/place/153+Food',
    ],
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'EUR',
    hasMenu: `${siteConfig.url}/menu`,
    menu: `${siteConfig.url}/menu`,
    starRating: {
      '@type': 'Rating',
      ratingValue: 4.3,
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Halal Food',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Delivery',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Takeout',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair Accessible',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Wi-Fi',
        value: false,
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Livraison à domicile',
        description:
          "Livraison à 0.50€ seulement dès 15€ d'achat sur Lyon 5ème",
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'DeliveryChargeSpecification',
          appliesToDeliveryMethod:
            'http://purl.org/goodrelations/v1#DeliveryModeDirectDownload',
          price: 0.5,
          priceCurrency: 'EUR',
          eligibleTransactionVolume: {
            '@type': 'PriceSpecification',
            price: 15.0,
            priceCurrency: 'EUR',
          },
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
