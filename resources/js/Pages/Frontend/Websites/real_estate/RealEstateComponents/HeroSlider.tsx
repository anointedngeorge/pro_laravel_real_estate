
import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const slides = [
  {
    id: 1,
    image: '/placeholder.svg?height=600&width=1600',
    title: 'Luxury Beachfront Villa',
    description: 'Experience the ultimate in coastal living with this stunning beachfront property.'
  },
  {
    id: 2,
    image: '/placeholder.svg?height=600&width=1600',
    title: 'Modern City Penthouse',
    description: 'Elevate your lifestyle with this sleek and sophisticated urban retreat.'
  },
  {
    id: 3,
    image: '/placeholder.svg?height=600&width=1600',
    title: 'Charming Country Estate',
    description: 'Escape to the tranquility of this picturesque countryside manor.'
  }
]

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <img
                src={slide.image}
                alt={slide.title}
                width={1600}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <Button size="lg" className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">View Property</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#000066] text-white hover:bg-[#000066]/90"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#000066] text-white hover:bg-[#000066]/90"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

