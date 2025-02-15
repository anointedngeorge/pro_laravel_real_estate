import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPost from '@/components/BlogPost'

export const metadata: Metadata = {
  title: 'Blog | Arible Real Estate',
  description: 'Stay updated with the latest real estate trends, tips, and insights from Arible Real Estate experts.',
  keywords: ['real estate blog', 'property insights', 'real estate tips', 'Arible blog'],
  openGraph: {
    title: 'Blog | Arible Real Estate',
    description: 'Stay updated with the latest real estate trends, tips, and insights from Arible Real Estate experts.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Arible Real Estate Blog',
      },
    ],
  },
}

const blogPosts = [
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
  },
  {
    title: "Sustainable Living: Eco-Friendly Home Features",
    excerpt: "Discover how eco-friendly home features can benefit both the environment and your wallet.",
    date: "April 30, 2025",
    author: "Mike Brown",
    image: "/placeholder.svg?height=200&width=400",
    slug: "sustainable-living-eco-friendly-home-features"
  },
  {
    title: "The Impact of Remote Work on Real Estate Trends",
    excerpt: "How the shift to remote work is changing home buying preferences and reshaping real estate markets.",
    date: "April 25, 2025",
    author: "Emily Chen",
    image: "/placeholder.svg?height=200&width=400",
    slug: "impact-of-remote-work-on-real-estate-trends"
  },
  {
    title: "Navigating the Luxury Real Estate Market",
    excerpt: "Insights and strategies for buying or selling high-end properties in today's competitive market.",
    date: "April 20, 2025",
    author: "Alex Rodriguez",
    image: "/placeholder.svg?height=200&width=400",
    slug: "navigating-luxury-real-estate-market"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#000066]">Arible Real Estate Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

