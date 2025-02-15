
import { Input } from './ui/input'
import { Button } from './ui/button'
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

export default function Footer() {
  return (
    <footer className="bg-[#000066] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-SRaZ0WlgzEC8hNsl7BqQapW3ayLtmo.jpeg"
              alt="Arible Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="mb-4">Your trusted partner in real estate, providing exceptional properties and services.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#FF0000]"><FaFacebook /></Link>
              <Link href="#" className="hover:text-[#FF0000]"><FaTwitter /></Link>
              <Link href="#" className="hover:text-[#FF0000]"><FaInstagram /></Link>
              <Link href="#" className="hover:text-[#FF0000]"><FaLinkedin /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF0000]">Home</Link></li>
              <li><Link href="/properties" className="hover:text-[#FF0000]">Properties</Link></li>
              <li><Link href="/agents" className="hover:text-[#FF0000]">Agents</Link></li>
              <li><Link href="/about" className="hover:text-[#FF0000]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF0000]">Contact</Link></li>
              <li><Link href="/get-in-touch" className="hover:text-[#FF0000]">Get in Touch</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Real Estate Street</p>
            <p>Cityville, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@luxuryestates.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest property updates.</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none bg-[#FF0000] hover:bg-[#FF0000]/90">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} LuxuryEstates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

