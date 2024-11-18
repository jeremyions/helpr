import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light via-white to-yellow-light 
                    flex items-center justify-center">
      <div className="text-center space-y-8 p-8 animate-float">
        <h1 className="text-7xl font-bold space-y-2">
          <span className="block text-gray-800">Welcome to</span>
          <span className="bg-gradient-to-r from-pink to-yellow bg-clip-text text-transparent">
            Helpr
          </span>
        </h1>
        
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          Your trusted marketplace for finding local support services
        </p>

        <div className="flex gap-4 justify-center">
          <Link 
            href="/find-help"
            className="inline-flex items-center gap-2 px-8 py-4 bg-pink text-white rounded-full
                     text-lg font-semibold hover:scale-105 transition-transform shadow-lg
                     hover:shadow-xl"
          >
            Get a Helpr
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link 
            href="/become-helper"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow text-gray-800 rounded-full
                     text-lg font-semibold hover:scale-105 transition-transform shadow-lg
                     hover:shadow-xl"
          >
            Become a Helpr
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-16 flex gap-8 justify-center text-gray-500">
          <Link href="/about" className="hover:text-pink">About Us</Link>
          <Link href="/contact" className="hover:text-pink">Contact</Link>
          <Link href="/privacy" className="hover:text-pink">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-pink">Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}
