'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { Bed, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import React from 'react'
import { PropertyDetailsModal } from './PropertyDetailsModal'

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Downtown, City",
    price: "$500,000",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    beds: 2,
    baths: 2,
    sqft: 1200,
    description: "A sleek and modern apartment in the heart of the city. Perfect for young professionals or couples looking for a stylish urban lifestyle. Features high-end appliances, floor-to-ceiling windows, and a private balcony with city views."
  },
  {
    id: 2,
    title: "Suburban House",
    location: "Quiet Neighborhood, Suburb",
    price: "$750,000",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    beds: 4,
    baths: 3,
    sqft: 2500,
    description: "A spacious family home in a quiet suburban neighborhood. This house offers a large backyard, modern kitchen, and a two-car garage. Perfect for families looking for space and comfort in a friendly community setting."
  },
  {
    id: 3,
    title: "Luxury Condo",
    location: "Beachfront, Resort Area",
    price: "$1,200,000",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    beds: 3,
    baths: 3,
    sqft: 2000,
    description: "An exquisite beachfront condo with panoramic ocean views. This luxury property features high-end finishes, a gourmet kitchen, and access to resort-style amenities including a pool, gym, and private beach access."
  }
]

export default function AvailableProperties() {
  const [selectedProperty, setSelectedProperty] = useState(null)

  const openPropertyDetails = (property: typeof properties[0]) => {
    setSelectedProperty(property)
  }

  const closePropertyDetails = () => {
    setSelectedProperty(null)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000066]">Available Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={() => openPropertyDetails(property)}
            />
          ))}
        </div>
      </div>
      <PropertyDetailsModal 
        property={selectedProperty} 
        isOpen={!!selectedProperty} 
        onClose={closePropertyDetails} 
      />
    </section>
  )
}

interface PropertyCardProps {
  property: typeof properties[0]
  onViewDetails: () => void
}

function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {property.images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 text-[#000066] hover:bg-[#000066] hover:text-white"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 text-[#000066] hover:bg-[#000066] hover:text-white"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
          <p className="text-gray-600 mb-2">{property.location}</p>
          <p className="text-2xl font-bold text-[#FF0000] mb-4">{property.price}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span className="flex items-center"><Bed className="w-4 h-4 mr-1" /> {property.beds} beds</span>
            <span className="flex items-center"><Bath className="w-4 h-4 mr-1" /> {property.baths} baths</span>
            <span className="flex items-center"><Square className="w-4 h-4 mr-1" /> {property.sqft} sqft</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-[#000066] hover:bg-[#000066]/90 text-white"
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

