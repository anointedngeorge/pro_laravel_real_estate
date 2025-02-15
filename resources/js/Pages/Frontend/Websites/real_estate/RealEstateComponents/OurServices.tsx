import React from 'react'
import { Card, CardContent } from './ui/card'
import { Home, Search, DollarSign, Key } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Property Listings',
    description: 'Browse our extensive collection of premium properties.',
    icon: Home,
  },
  {
    id: 2,
    title: 'Property Valuation',
    description: 'Get an accurate estimate of your property\'s worth.',
    icon: Search,
  },
  {
    id: 3,
    title: 'Financial Advice',
    description: 'Expert guidance on mortgages and property investments.',
    icon: DollarSign,
  },
  {
    id: 4,
    title: 'Property Management',
    description: 'Comprehensive management services for property owners.',
    icon: Key,
  },
]

export default function OurServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="text-center">
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-[#FF0000]" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

