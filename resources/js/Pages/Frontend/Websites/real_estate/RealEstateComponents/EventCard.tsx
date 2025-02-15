'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Calendar, Facebook, Instagram } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { EventRegistrationForm } from './EventRegistrationForm'
import React from 'react'

interface EventImage {
  src: string
  alt: string
}

interface EventCardProps {
  title: string
  date: string
  description: string
  images: EventImage[]
  isUpcoming: boolean
}

export default function EventCard({ title, date, description, images, isUpcoming }: EventCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const handleShare = (platform: string) => {
    // In a real application, you would implement actual sharing functionality here
    console.log(`Sharing to ${platform}`)
  }

  const openRegistration = () => setIsRegistrationOpen(true)
  const closeRegistration = () => setIsRegistrationOpen(false)

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
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
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        {isUpcoming && (
          <div className="flex justify-end space-x-2 mb-4">
            <Button
              variant="outline"
              size="icon"
              className="text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              onClick={() => handleShare('Facebook')}
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-[#E4405F] hover:bg-[#E4405F] hover:text-white"
              onClick={() => handleShare('Instagram')}
            >
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        )}
        <Button 
          className={`w-full ${isUpcoming ? 'bg-[#FF0000] hover:bg-[#FF0000]/90' : 'bg-[#000066] hover:bg-[#000066]/90'} text-white`}
          onClick={isUpcoming ? openRegistration : undefined}
        >
          {isUpcoming ? 'Register Now' : 'View Details'}
        </Button>
      </CardContent>

      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register for {title}</DialogTitle>
          </DialogHeader>
          <EventRegistrationForm eventTitle={title} onClose={closeRegistration} />
        </DialogContent>
      </Dialog>
    </Card>
  )
}

