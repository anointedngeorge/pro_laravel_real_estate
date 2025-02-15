import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us | Arible Real Estate',
  description: 'Learn about Arible Real Estate, our mission, values, and commitment to excellence in the luxury real estate market.',
  keywords: ['about Arible', 'real estate company', 'luxury property experts', 'our mission'],
  openGraph: {
    title: 'About Us | Arible Real Estate',
    description: 'Learn about Arible Real Estate, our mission, values, and commitment to excellence in the luxury real estate market.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg',
        width: 1200,
        height: 630,
        alt: 'About Arible Real Estate',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#000066]">About Arible Real Estate</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#000066]">Our Story</h2>
              <p className="mb-4">
                Founded in 2005, Arible Real Estate has been at the forefront of the luxury real estate market for over a decade. Our journey began with a simple yet powerful vision: to provide unparalleled service in the world of high-end properties.
              </p>
              <p className="mb-4">
                Over the years, we've grown from a small local agency to a renowned name in luxury real estate, serving clients across the globe. Our success is built on our commitment to excellence, integrity, and personalized service.
              </p>
              <p className="mb-4">
                At Arible, we don't just sell properties; we help our clients find their dream homes and make sound investments. Our team of expert agents combines deep market knowledge with a passion for real estate to deliver exceptional results.
              </p>
              <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">Learn More About Our Services</Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Arible Real Estate Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center text-[#000066]">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#000066]">Excellence</h3>
                <p>We strive for excellence in every aspect of our service, from property selection to client communication.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#000066]">Integrity</h3>
                <p>We believe in honest, transparent dealings that build trust and long-lasting relationships with our clients.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#000066]">Innovation</h3>
                <p>We embrace the latest technologies and market trends to provide cutting-edge solutions for our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

