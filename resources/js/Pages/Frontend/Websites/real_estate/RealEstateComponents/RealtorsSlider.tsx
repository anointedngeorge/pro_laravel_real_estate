'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const realtors = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Realtor",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Luxury Property Specialist",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Commercial Real Estate Agent",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 4,
    name: "Sarah Brown",
    title: "First-Time Home Buyer Expert",
    image: "/placeholder.svg?height=300&width=300"
  }
]

export default function RealtorsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expert Realtors</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {realtors.map((realtor) => (
                <div key={realtor.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
                  <Card>
                    <Image
                      src={realtor.image}
                      alt={realtor.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="p-4 text-center">
                      <h3 className="text-xl font-semibold mb-1">{realtor.name}</h3>
                      <p className="text-gray-600 mb-4">{realtor.title}</p>
                      <Button variant="outline" size="sm">Contact</Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

