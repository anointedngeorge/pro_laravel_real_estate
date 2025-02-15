import { Metadata } from 'next'
import PropertiesContent from '@/components/PropertiesContent'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Properties | Arible Real Estate',
  description: 'Browse our extensive collection of luxury properties. Find your perfect home with Arible Real Estate.',
  keywords: ['properties', 'luxury homes', 'real estate listings', 'Arible'],
  openGraph: {
    title: 'Properties | Arible Real Estate',
    description: 'Browse our extensive collection of luxury properties. Find your perfect home with Arible Real Estate.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Arible Real Estate Properties',
      },
    ],
  },
}

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <PropertiesContent />
      </main>
      <Footer />
    </div>
  )
}

