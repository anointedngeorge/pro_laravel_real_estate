import Image from 'next/image'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { Bed, Bath, Square } from 'lucide-react'
import React from 'react'

interface Property {
  id: number
  title: string
  location: string
  price: string
  image: string
  beds: number
  baths: number
  sqft: number
  description: string
}

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={property.image}
        alt={property.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-2xl font-bold text-[#FF0000] mb-4">{property.price}</p>
        <p className="text-gray-700 mb-4">{property.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="flex items-center"><Bed className="w-4 h-4 mr-1" /> {property.beds} beds</span>
          <span className="flex items-center"><Bath className="w-4 h-4 mr-1" /> {property.baths} baths</span>
          <span className="flex items-center"><Square className="w-4 h-4 mr-1" /> {property.sqft} sqft</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#000066] hover:bg-[#000066]/90">View Details</Button>
      </CardFooter>
    </Card>
  )
}

