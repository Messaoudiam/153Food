'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
          <div className="text-center">
            <h1 className="mb-4 text-6xl font-bold text-destructive">500</h1>
            <h2 className="mb-4 text-2xl font-bold">Erreur Serveur</h2>
            <p className="mb-8 text-muted-foreground">
              Une erreur critique est survenue. Veuillez réessayer.
            </p>
            <button
              onClick={() => reset()}
              className="rounded-lg bg-brand-blue-900 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-blue-950"
            >
              Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
