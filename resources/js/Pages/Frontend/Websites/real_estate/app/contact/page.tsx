import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-primary" />
                  <p>123 Real Estate Street, Cityville, State 12345</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-primary" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-primary" />
                  <p>info@luxuryestates.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <ul className="space-y-2">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

