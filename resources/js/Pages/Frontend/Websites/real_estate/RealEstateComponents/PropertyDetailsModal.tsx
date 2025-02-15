import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { Bed, Bath, Square, MapPin } from 'lucide-react'
import React from "react"

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

interface PropertyDetailsModalProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
}

export function PropertyDetailsModal({ property, isOpen, onClose }: PropertyDetailsModalProps) {
  if (!property) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{property.title}</DialogTitle>
          <DialogDescription>{property.location}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Image
            src={property.image}
            alt={property.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
          <p className="text-2xl font-bold text-[#FF0000]">{property.price}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span className="flex items-center"><Bed className="w-4 h-4 mr-1" /> {property.beds} beds</span>
            <span className="flex items-center"><Bath className="w-4 h-4 mr-1" /> {property.baths} baths</span>
            <span className="flex items-center"><Square className="w-4 h-4 mr-1" /> {property.sqft} sqft</span>
          </div>
          <p className="text-gray-700">{property.description}</p>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{property.location}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

