
import EventCard from "./EventCard"
import { Link } from "@inertiajs/react"
import { Button } from "./ui/button"
import React from "react"

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

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000066]">Upcoming Events</h2>
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
        <div className="mt-12 text-center">
          <Link href="/events">
            <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

