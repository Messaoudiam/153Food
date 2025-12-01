'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      'Nous sommes fermés le lundi. Du mardi au jeudi : 11h-14h et 18h-23h. Vendredi : 14h-23h. Samedi : 11h-23h. Dimanche : 11h-15h et 17h30-23h.',
  },
  {
    question: 'Livrez-vous à domicile ? Quels sont les frais ?',
    answer:
      "Oui, nous livrons sur Lyon 5ème pour seulement 0.50€ à partir de 15€ d'achat ! C'est l'une des livraisons les moins chères de Lyon.",
  },
  {
    question: 'Votre viande est-elle halal ?',
    answer:
      'Oui, toute notre viande est 100% halal certifiée. Nous nous approvisionnons auprès de fournisseurs certifiés.',
  },
  {
    question: 'Puis-je commander par téléphone ?',
    answer:
      'Absolument ! Appelez-nous au 09 51 74 58 04 pour passer votre commande. Nous acceptons aussi les commandes sur place.',
  },
  {
    question: 'Avez-vous des options végétariennes ?',
    answer:
      'Oui, nous proposons plusieurs salades et des pizzas végétariennes comme la Margarita, la Végétarienne, et la Chèvre Miel.',
  },
  {
    question: 'Où êtes-vous situés exactement ?',
    answer:
      'Nous sommes au 153 Avenue Barthélémy Buyer, 69005 Lyon, dans la galerie marchande. Facilement accessible en transport en commun ou en voiture.',
  },
  {
    question: 'Proposez-vous des menus ou uniquement à la carte ?',
    answer:
      "Nous proposons des menus pour nos burgers (avec frites et boisson) ainsi qu'à la carte pour tous nos produits. Consultez notre page Menu pour plus de détails.",
  },
  {
    question: 'Quelle est votre spécialité ?',
    answer:
      'Nos clients adorent nos pizzas artisanales (40cm au prix du 33cm du lundi au jeudi !), nos burgers généreux, et nos tacos maison. Tout est préparé sur place avec des ingrédients frais.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="bg-white px-4 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Vous avez des questions ? Nous avons les réponses !
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-muted/50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={cn(
                  'grid transition-all duration-200 ease-in-out',
                  openIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-brand-blue-900 px-8 text-sm font-medium text-white transition-colors hover:bg-brand-blue-950 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:ring-offset-2"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}
