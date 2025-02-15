'use client'

import { useState, useCallback } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter } from './ui/card'
import { Bed, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { PropertyDetailsModal } from './PropertyDetailsModal'
import React from 'react'

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
  },
  {
    id: 4,
    title: "Country Estate",
    location: "Rural Area",
    price: "$2,500,000",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    beds: 5,
    baths: 4,
    sqft: 4500,
    description: "A grand country estate on acres of land. This property features a main house, guest house, pool, tennis court, and extensive gardens. Perfect for those seeking privacy and luxury in a serene rural setting."
  },
  {
    id: 5,
    title: "Urban Loft",
    location: "Arts District, City",
    price: "$600,000",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    beds: 1,
    baths: 2,
    sqft: 1500,
    description: "A stylish loft in the vibrant arts district. This property boasts high ceilings, exposed brick walls, and large windows. Ideal for artists or professionals who appreciate open-concept living and a creative atmosphere."
  },
  {
    id: 6,
    title: "Mountain Retreat",
    location: "Mountain Range",
    price: "$950,000",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ],
    beds: 3,
    baths: 2,
    sqft: 2200,
    description: "A cozy mountain home with breathtaking views. This property features a large deck, floor-to-ceiling windows, and a stone fireplace. Perfect for nature lovers and ski enthusiasts looking for a year-round getaway."
  }
]

export default function PropertiesContent() {
  const [selectedProperty, setSelectedProperty] = useState(null)

  const openPropertyDetails = (property: typeof properties[0]) => {
    setSelectedProperty(property)
  }

  const closePropertyDetails = () => {
    setSelectedProperty(null)
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#000066]">Our Properties</h1>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input type="text" placeholder="Search properties..." className="md:w-1/3" />
        <Input type="number" placeholder="Min Price" className="md:w-1/6" />
        <Input type="number" placeholder="Max Price" className="md:w-1/6" />
        <select className="md:w-1/6 border rounded-md p-2">
          <option value="">Any Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
        <Button className="md:w-1/6 bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onViewDetails={() => openPropertyDetails(property)}
          />
        ))}
      </div>
      <PropertyDetailsModal 
        property={selectedProperty} 
        isOpen={!!selectedProperty} 
        onClose={closePropertyDetails} 
      />
    </div>
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

