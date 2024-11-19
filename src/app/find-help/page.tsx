'use client'

import AIChatInterface from '@/components/AIChatInterface'
import { Search, Sparkles, Star, Heart, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const popularSearches = [
  {
    text: "Lawn Mowing",
    trend: "↗ 25% this week"
  },
  {
    text: "Chiropractor",
    trend: "Popular in your area"
  },
  {
    text: "Home Loan",
    trend: "Trending now"
  },
  {
    text: "Real Estate Agent",
    trend: "High demand"
  },
  {
    text: "Insurance",
    trend: "↗ 15% this week"
  }
]

export default function FindHelp() {
  const [showChat, setShowChat] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setShowChat(true)
    }
  }

  return (
    <div className="h-full min-h-screen bg-gradient-to-b from-pink-light to-white p-8">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center space-y-6 flex flex-col justify-center ${showChat ? 'min-h-[40vh]' : 'min-h-[80vh]'} transition-all duration-500`}>
          <div className="space-y-4">
            <h1 className="text-7xl font-extrabold tracking-tight">
              <span className="block text-gray-800">
                Find Your
              </span>
              <span className="bg-gradient-to-r from-pink via-purple-500 to-yellow 
                             bg-clip-text text-transparent 
                             animate-gradient-x">
                Superhero Helper
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              Every task has its perfect match. Let's find yours!
            </p>

            {/* Floating Icons */}
            <div className="relative h-12 w-full">
              <div className="absolute left-1/4 animate-float-slow opacity-70">
                <Sparkles className="h-8 w-8 text-pink" />
              </div>
              <div className="absolute left-1/2 animate-float-slower opacity-70">
                <Star className="h-8 w-8 text-yellow" />
              </div>
              <div className="absolute right-1/4 animate-float-slowest opacity-70">
                <Heart className="h-8 w-8 text-pink" />
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-opacity duration-300 ${showChat ? 'hidden' : ''}`}>
            <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="What kind of help do you need today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-6 text-2xl rounded-full border-2 border-gray-200
                         focus:outline-none focus:border-pink shadow-lg
                         placeholder-gray-400 transition-all duration-300
                         hover:shadow-xl focus:shadow-xl"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2
                         bg-pink text-white p-4 rounded-full
                         hover:bg-pink-dark transition-all duration-300
                         hover:scale-110 active:scale-95 hover:shadow-lg"
              >
                <Search className="h-7 w-7" />
              </button>
            </form>

            {/* Popular Searches */}
            <div className="mt-4">
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <TrendingUp className="h-5 w-5" />
                <span>Popular in Community</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="group relative px-4 py-2 rounded-full bg-white shadow-sm
                             hover:shadow-md transition-all duration-300
                             hover:scale-105 hover:text-pink border border-gray-100"
                    onClick={() => {
                      setSearchQuery(search.text)
                      setShowChat(true)
                    }}
                  >
                    {search.text}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 
                                  bg-gray-800 text-white text-xs px-2 py-1 rounded
                                  opacity-0 group-hover:opacity-100 transition-opacity
                                  whitespace-nowrap">
                      {search.trend}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Interface */}
        {showChat && (
          <div className="max-w-4xl mx-auto mt-8 animate-slideUp">
            <AIChatInterface
              initialMessage={`I need help with: ${searchQuery}`}
              onClose={() => {
                setShowChat(false)
                setSearchQuery('')
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
