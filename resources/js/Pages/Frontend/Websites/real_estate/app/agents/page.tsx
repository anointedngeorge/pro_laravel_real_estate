import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AgentCard from '@/components/AgentCard'

export const metadata: Metadata = {
  title: 'Our Agents | Arible Real Estate',
  description: 'Meet our expert real estate agents at Arible. Dedicated professionals ready to help you find your dream home.',
  keywords: ['real estate agents', 'property experts', 'Arible team', 'real estate professionals'],
  openGraph: {
    title: 'Our Agents | Arible Real Estate',
    description: 'Meet our expert real estate agents at Arible. Dedicated professionals ready to help you find your dream home.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Arible Real Estate Agents',
      },
    ],
  },
}

const agents = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Realtor",
    image: "/placeholder.svg?height=300&width=300",
    phone: "(123) 456-7890",
    email: "john.doe@arible.com",
    bio: "John has over 15 years of experience in luxury real estate. He specializes in high-end properties and has a keen eye for architectural design."
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Luxury Property Specialist",
    image: "/placeholder.svg?height=300&width=300",
    phone: "(123) 456-7891",
    email: "jane.smith@arible.com",
    bio: "Jane is our go-to expert for luxury properties. With her background in interior design, she helps clients find homes that truly reflect their style."
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Commercial Real Estate Agent",
    image: "/placeholder.svg?height=300&width=300",
    phone: "(123) 456-7892",
    email: "mike.johnson@arible.com",
    bio: "Mike specializes in commercial real estate, helping businesses find the perfect locations for their operations. He has a strong background in market analysis."
  },
  {
    id: 4,
    name: "Sarah Brown",
    title: "First-Time Home Buyer Expert",
    image: "/placeholder.svg?height=300&width=300",
    phone: "(123) 456-7893",
    email: "sarah.brown@arible.com",
    bio: "Sarah is passionate about helping first-time home buyers navigate the real estate market. She's known for her patience and thorough approach."
  }
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#000066]">Our Agents</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

