'use client'

import { useEffect, useState } from 'react'
import { restaurantInfo } from '@/lib/config'
import { Skeleton } from '@/components/ui/skeleton'

type StatusType = 'open' | 'closed' | 'opening-soon'

export function OpenStatus() {
  const [status, setStatus] = useState<StatusType | null>(null)
  const [nextChange, setNextChange] = useState<string>('')

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const currentDay = now
        .toLocaleDateString('fr-FR', { weekday: 'long' })
        .toLowerCase()
      const currentTime = now.getHours() * 60 + now.getMinutes()

      // Map des jours de la semaine
      const dayMap: { [key: string]: keyof typeof restaurantInfo.hours } = {
        lundi: 'lundi',
        mardi: 'mardi',
        mercredi: 'mercredi',
        jeudi: 'jeudi',
        vendredi: 'vendredi',
        samedi: 'samedi',
        dimanche: 'dimanche',
      }

      const todayKey = dayMap[currentDay]
      const todayHours = restaurantInfo.hours[todayKey]?.open

      if (!todayHours || todayHours === 'Fermé') {
        setStatus('closed')
        return
      }

      // Parse les horaires (format: "11:00-14:00, 18:00-23:00" ou "11:00-23:00")
      const timeRanges = todayHours.split(', ')
      let currentlyOpen = false
      let openingSoon = false
      let nextOpenTime = ''
      let nextCloseTime = ''
      const OPENING_SOON_MINUTES = 30 // 30 minutes avant l'ouverture

      for (const range of timeRanges) {
        const [open, close] = range.split('-')
        const [openHour, openMin] = open.split(':').map(Number)
        const [closeHour, closeMin] = close.split(':').map(Number)

        const openTime = openHour * 60 + openMin
        const closeTime = closeHour * 60 + closeMin

        if (currentTime >= openTime && currentTime < closeTime) {
          currentlyOpen = true
          nextCloseTime = close
          break
        } else if (currentTime < openTime) {
          if (!nextOpenTime) {
            nextOpenTime = open
          }
          // Vérifier si on est dans les 30 minutes avant l'ouverture
          if (openTime - currentTime <= OPENING_SOON_MINUTES) {
            openingSoon = true
            nextOpenTime = open
            break
          }
        }
      }

      if (currentlyOpen) {
        setStatus('open')
        setNextChange(`Ferme à ${nextCloseTime}`)
      } else if (openingSoon) {
        setStatus('opening-soon')
        setNextChange(`Ouvre à ${nextOpenTime}`)
      } else {
        setStatus('closed')
        if (nextOpenTime) {
          setNextChange(`Ouvre à ${nextOpenTime}`)
        } else {
        // Fermé pour aujourd'hui, chercher demain
        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowDay = tomorrow
          .toLocaleDateString('fr-FR', { weekday: 'long' })
          .toLowerCase()
        const tomorrowKey = dayMap[tomorrowDay]
        const tomorrowHours = restaurantInfo.hours[tomorrowKey]?.open
          if (tomorrowHours) {
            const firstOpen = tomorrowHours.split(', ')[0].split('-')[0]
            setNextChange(`Ouvre demain à ${firstOpen}`)
          }
        }
      }
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (status === null) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
        <Skeleton className="h-3 w-3 rounded-full" />
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    )
  }

  const statusConfig = {
    open: {
      color: 'bg-green-500',
      textColor: 'text-green-700',
      label: 'Ouvert',
      animate: true,
    },
    'opening-soon': {
      color: 'bg-orange-500',
      textColor: 'text-orange-700',
      label: 'Ouvre bientôt',
      animate: true,
    },
    closed: {
      color: 'bg-red-500',
      textColor: 'text-red-700',
      label: 'Fermé',
      animate: false,
    },
  }

  const currentStatus = statusConfig[status]

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
      <div
        className={`h-3 w-3 rounded-full ${currentStatus.color} ${
          currentStatus.animate ? 'animate-pulse' : ''
        }`}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className={`text-sm font-semibold ${currentStatus.textColor}`}>
          {currentStatus.label}
        </span>
        {nextChange && (
          <span className="text-xs text-muted-foreground">{nextChange}</span>
        )}
      </div>
    </div>
  )
}
