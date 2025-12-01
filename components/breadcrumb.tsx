'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbItemType {
  name: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()

  // Ne pas afficher sur la page d'accueil
  if (pathname === '/') return null

  const pathSegments = pathname.split('/').filter(segment => segment)

  const breadcrumbItems: BreadcrumbItemType[] = [{ name: 'Accueil', href: '/' }]

  let currentPath = ''
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`
    const name = segment.charAt(0).toUpperCase() + segment.slice(1)
    breadcrumbItems.push({
      name,
      href: currentPath,
    })
  })

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="border-b bg-muted/30 px-4 py-3 text-sm">
        <BreadcrumbRoot className="container mx-auto">
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <BreadcrumbItem>
                  {index === breadcrumbItems.length - 1 ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink render={<Link href={item.href} className="inline-flex items-center" />}>
                      {index === 0 && <Home className="mr-1 h-4 w-4" />}
                      {item.name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </BreadcrumbRoot>
      </nav>
    </>
  )
}
