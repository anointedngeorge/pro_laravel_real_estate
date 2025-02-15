import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Phone, Mail } from 'lucide-react'
import React from 'react'

interface Agent {
  id: number
  name: string
  title: string
  image: string
  phone: string
  email: string
  bio: string
}

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={agent.image}
        alt={agent.name}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{agent.name}</h2>
        <p className="text-gray-600 mb-4">{agent.title}</p>
        <p className="mb-4">{agent.bio}</p>
        <div className="flex items-center mb-2">
          <Phone className="w-5 h-5 mr-2 text-[#FF0000]" />
          <span>{agent.phone}</span>
        </div>
        <div className="flex items-center mb-4">
          <Mail className="w-5 h-5 mr-2 text-[#FF0000]" />
          <span>{agent.email}</span>
        </div>
        <Button className="w-full bg-[#000066] hover:bg-[#000066]/90">Contact {agent.name.split(' ')[0]}</Button>
      </CardContent>
    </Card>
  )
}

