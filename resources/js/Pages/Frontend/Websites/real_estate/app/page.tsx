import { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AvailableProperties from '@/components/AvailableProperties'
import RealtorsSlider from '@/components/RealtorsSlider'
import Testimonials from '@/components/Testimonials'
import OurServices from '@/components/OurServices'
import Footer from '@/components/Footer'
import UpcomingEvents from '@/components/UpcomingEvents'
import BlogPreview from '@/components/BlogPreview'

export const metadata: Metadata = {
  title: 'Arible Real Estate | Luxury Homes and Properties',
  description: 'Discover luxury homes and premium properties with Arible Real Estate. Your trusted partner in finding your dream home.',
  keywords: ['real estate', 'luxury homes', 'property listings', 'Arible'],
  openGraph: {
    title: 'Arible Real Estate | Luxury Homes and Properties',
    description: 'Discover luxury homes and premium properties with Arible Real Estate. Your trusted partner in finding your dream home.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Arible Real Estate',
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <AvailableProperties />
        <RealtorsSlider />
        <UpcomingEvents />
        <BlogPreview />
        <OurServices />
      </main>
      <Footer />
    </div>
  )
}

