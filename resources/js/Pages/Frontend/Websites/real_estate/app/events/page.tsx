import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EventCard from '@/components/EventCard'

export const metadata: Metadata = {
  title: 'Events | Arible Real Estate',
  description: 'Join us for exciting real estate events and workshops. Stay updated with the latest in luxury property trends and investment opportunities.',
  keywords: ['real estate events', 'property workshops', 'Arible events', 'luxury real estate seminars'],
  openGraph: {
    title: 'Events | Arible Real Estate',
    description: 'Join us for exciting real estate events and workshops. Stay updated with the latest in luxury property trends and investment opportunities.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Arible Real Estate Events',
      },
    ],
  },
}

const upcomingEvents = [
  {
    title: "Luxury Property Showcase",
    date: "June 15, 2025",
    description: "Experience an exclusive showcase of our most luxurious properties. Meet with our top agents and explore investment opportunities.",
    images: [
      { src: "/placeholder.svg?height=300&width=400", alt: "Luxury mansion exterior" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Elegant living room" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Modern kitchen design" },
    ],
  },
  {
    title: "First-Time Homebuyer Workshop",
    date: "July 2, 2025",
    description: "Learn everything you need to know about buying your first home. Our experts will guide you through the entire process.",
    images: [
      { src: "/placeholder.svg?height=300&width=400", alt: "Happy couple with new house keys" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Home inspection process" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Mortgage consultation" },
    ],
  },
]

const pastEvents = [
  {
    title: "Real Estate Investment Seminar",
    date: "April 10, 2025",
    description: "Our panel of experts shared insights on the current real estate market trends and investment strategies.",
    images: [
      { src: "/placeholder.svg?height=300&width=400", alt: "Seminar speaker on stage" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Audience at the seminar" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Networking session" },
    ],
  },
  {
    title: "Spring Property Tour",
    date: "May 5, 2025",
    description: "Attendees enjoyed exclusive tours of our spring collection of luxury properties across the city.",
    images: [
      { src: "/placeholder.svg?height=300&width=400", alt: "Group tour of a luxury home" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Beautiful spring garden" },
      { src: "/placeholder.svg?height=300&width=400", alt: "Rooftop terrace view" },
    ],
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#000066]">Arible Real Estate Events</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-[#000066]">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard 
                  key={index} 
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  images={event.images}
                  isUpcoming={true} 
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8 text-[#000066]">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard 
                  key={index} 
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  images={event.images}
                  isUpcoming={false} 
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

