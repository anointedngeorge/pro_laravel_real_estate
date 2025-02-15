'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/agents', label: 'Agents' },
    { href: '/properties', label: 'Properties' },
    { href: '/blog', label: 'Blog' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg"
            alt="Arible Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={`text-gray-600 hover:text-[#000066] ${pathname === item.href ? 'border-b-2 border-[#FF0000]' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/get-in-touch">
            <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">Get in Touch</Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium text-gray-600 hover:text-[#000066] ${
                    pathname === item.href ? 'border-b-2 border-[#FF0000]' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/get-in-touch" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">Get in Touch</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

