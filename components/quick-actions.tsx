'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { restaurantInfo } from '@/lib/config'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function QuickActions() {
  const phoneNumber = restaurantInfo.contact.phone.replace(/\s/g, '')
  const whatsappNumber = phoneNumber.replace('+33', '33')

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <Tooltip>
          <TooltipTrigger>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Bonjour,%20je%20souhaite%20passer%20une%20commande`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl"
              aria-label="Contacter sur WhatsApp"
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Contacter sur WhatsApp</p>
          </TooltipContent>
        </Tooltip>

        {/* Call Button */}
        <Tooltip>
          <TooltipTrigger>
            <a
              href={`tel:${phoneNumber}`}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-orange-700 hover:shadow-xl"
              aria-label="Appeler le restaurant"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Appeler le {restaurantInfo.contact.phone}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
