'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, Home, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-destructive/10 p-4">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Oups ! Une erreur est survenue
        </h1>

        <p className="mb-8 text-lg text-muted-foreground">
          Nous sommes désolés, quelque chose s&apos;est mal passé. Veuillez
          réessayer ou retourner à l&apos;accueil.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={() => reset()}
            variant="default"
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Réessayer
          </Button>

          <Button render={<Link href="/" />} variant="outline" size="lg">
            <Home className="mr-2 h-4 w-4" />
            Retour à l&apos;accueil
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 rounded-lg bg-muted p-4 text-left">
            <h3 className="mb-2 font-mono text-sm font-semibold">
              Error Details (Dev Only):
            </h3>
            <pre className="overflow-auto text-xs text-muted-foreground">
              {error.message}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
