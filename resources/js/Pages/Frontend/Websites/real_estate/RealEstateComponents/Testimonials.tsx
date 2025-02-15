'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import React from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'First-Time Homebuyer',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'LuxuryEstates made my first home buying experience a breeze. Their team was supportive and knowledgeable throughout the entire process.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Investor',
    image: '/placeholder.svg?height=100&width=100',
    quote: "I've worked with many real estate agencies, but LuxuryEstates stands out for their professionalism and attention to detail.",
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    role: 'Luxury Home Seller',
    image: '/placeholder.svg?height=100&width=100',
    quote: "The team at LuxuryEstates went above and beyond to market and sell my property. I couldn't be happier with the results.",
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-white h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div>
                          <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                          <div className="flex items-center">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={50}
                              height={50}
                              className="rounded-full mr-4"
                            />
                            <div>
                              <h3 className="font-semibold">{testimonial.name}</h3>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
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

