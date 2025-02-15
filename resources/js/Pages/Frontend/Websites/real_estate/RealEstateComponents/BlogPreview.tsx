import React from 'react'
import BlogPost from './BlogPost'
import { Button } from './ui/button'
import Link from 'next/link'

const previewPosts = [
  {
    title: "5 Tips for First-Time Home Buyers",
    excerpt: "Buying your first home can be overwhelming. Here are 5 essential tips to make the process smoother.",
    date: "May 15, 2025",
    author: "Jane Doe",
    image: "/placeholder.svg?height=200&width=400",
    slug: "5-tips-for-first-time-home-buyers"
  },
  {
    title: "The Rise of Smart Homes: What You Need to Know",
    excerpt: "Smart home technology is revolutionizing the real estate market. Learn about the latest trends and their impact.",
    date: "May 10, 2025",
    author: "John Smith",
    image: "/placeholder.svg?height=200&width=400",
    slug: "rise-of-smart-homes"
  },
  {
    title: "Investing in Real Estate: Risks and Rewards",
    excerpt: "Explore the potential benefits and pitfalls of real estate investment in today's market.",
    date: "May 5, 2025",
    author: "Sarah Johnson",
    image: "/placeholder.svg?height=200&width=400",
    slug: "investing-in-real-estate-risks-and-rewards"
  }
]

export default function BlogPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000066]">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

