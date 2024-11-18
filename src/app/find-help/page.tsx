import SearchBar from '@/components/SearchBar'
import SearchFilters from '@/components/SearchFilters'
import TrendingServices from '@/components/TrendingServices'
import HowItWorks from '@/components/HowItWorks'
import { MessageCircle } from 'lucide-react'

export default function FindHelp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-light to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-float">
          <h1 className="text-6xl font-bold">
            <span className="block text-gray-800">Find Your Perfect</span>
            <span className="bg-gradient-to-r from-pink to-yellow bg-clip-text text-transparent">
              Helper Today
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with trusted local helpers for cleaning, aged care, babysitting, and more.
          </p>

          <div className="mt-12">
            <SearchBar />
            <div className="mt-4">
              <SearchFilters />
            </div>
          </div>
        </div>
      </div>

      {/* Trending Services Section */}
      <section className="py-16 px-4 bg-white/50">
        <TrendingServices />
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <HowItWorks />
      </section>

      {/* Live Chat Button */}
      <button 
        className="fixed bottom-6 right-6 bg-pink text-white p-4 rounded-full shadow-lg
                   hover:scale-110 transition-transform duration-200 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2
                        bg-white text-pink rounded-lg shadow-lg whitespace-nowrap
                        opacity-0 group-hover:opacity-100 transition-opacity">
          Need Help?
        </span>
      </button>
    </div>
  )
}
