import { business } from '~/data/business'
import { services } from '~/data/services'

const pageTitle = 'Car Detailing in Akron & Canton | Novak Detailing Co.'
const pageDescription = 'Professional interior, exterior, mobile, and warehouse car detailing serving Akron, Canton, and surrounding Northeast Ohio communities.'

export function useBusinessSeo() {
  const config = useRuntimeConfig()
  const siteUrl = String(config.public.siteUrl || '').replace(/\/+$/, '')
  const canonicalUrl = siteUrl ? `${siteUrl}/` : ''
  const googleSiteVerification = String(config.public.googleSiteVerification || '')
  const bingSiteVerification = String(config.public.bingSiteVerification || '')
  const sameAs = business.socialLinks.map(link => link.url)
  const businessId = canonicalUrl ? `${canonicalUrl}#business` : undefined

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: business.name,
    description: pageDescription,
    telephone: business.phoneTel,
    url: canonicalUrl || undefined,
    areaServed: [
      {
        '@type': 'City',
        name: 'Akron',
        containedInPlace: {
          '@type': 'State',
          name: 'Ohio',
        },
      },
      {
        '@type': 'City',
        name: 'Canton',
        containedInPlace: {
          '@type': 'State',
          name: 'Ohio',
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Northeast Ohio',
      },
    ],
    sameAs: sameAs.length ? sameAs : undefined,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car detailing services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: businessId ? { '@id': businessId } : undefined,
        },
      })),
    },
  }

  useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogType: 'website',
    ogLocale: 'en_US',
    ogSiteName: business.name,
    ogUrl: canonicalUrl || undefined,
    twitterCard: 'summary',
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
  })

  useHead({
    link: canonicalUrl
      ? [{ rel: 'canonical', href: canonicalUrl }]
      : [],
    meta: [
      ...(googleSiteVerification
        ? [{ name: 'google-site-verification', content: googleSiteVerification }]
        : []),
      ...(bingSiteVerification
        ? [{ name: 'msvalidate.01', content: bingSiteVerification }]
        : []),
    ],
    script: [
      {
        key: 'local-business-schema',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
      },
    ],
  })
}
