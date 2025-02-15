import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  slug: string
}

export default function BlogPost({ title, excerpt, date, author, image, slug }: BlogPostProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>{date}</span>
          <span>By {author}</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <Button className="w-full bg-[#000066] hover:bg-[#000066]/90 text-white">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

