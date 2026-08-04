export interface SocialLink {
  label: string
  url: string
}

export interface BusinessInfo {
  name: string
  phoneDisplay: string
  phoneTel: string
  phoneSms: string
  serviceArea: string
  weekdayAvailability: string
  weekendAvailability: string
  socialLinks: SocialLink[]
}

export interface Service {
  title: string
  description: string
}

export interface PriceRange {
  title: string
  price: string
  note: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface GalleryItem {
  id: string
  title: string
  beforeSrc: string
  afterSrc: string
  alt: string
}

export interface Testimonial {
  quote: string
  customer: string
}
