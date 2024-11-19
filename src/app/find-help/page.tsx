'use client'

import { useState } from 'react'
import { Search, TrendingUp } from 'lucide-react'
import AIChatInterface from '@/components/AIChatInterface'

const popularSearches = [
  { text: "Dog Whisperer", trend: "Trending with pet owners" },
  { text: "Plant Doctor", trend: "Popular among millennials" },
  { text: "Life Coach", trend: "↗ 45% this month" },
  { text: "Tech Wizard", trend: "High demand" },
  { text: "Yoga Master", trend: "Morning favorite" },
  { text: "Party Planner", trend: "Weekend trending" },
  { text: "Home Chef", trend: "Dinner time favorite" },
  { text: "Math Tutor", trend: "Exam season peak" },
  { text: "Guitar Teacher", trend: "Rising star" },
  { text: "Moving Helper", trend: "End of month rush" },
  { text: "Meditation Guide", trend: "Mental health focus" },
  { text: "Garden Guru", trend: "Spring sensation" },
  { text: "Fashion Stylist", trend: "Style upgrade trend" },
  { text: "Fitness Coach", trend: "New year popular" },
  { text: "Language Tutor", trend: "Global connection" },
  { text: "DIY Expert", trend: "Weekend warrior pick" }
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
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col">
          <div className="space-y-4">
            <h1 className="text-7xl font-extrabold tracking-tight">
              <span className="block text-gray-800">
                Find Your
              </span>
              <span className="bg-gradient-to-r from-pink via-purple-500 to-yellow 
                             bg-clip-text text-transparent">
                Superhero Helper
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              Every task has its perfect match. Let's find yours!
            </p>

            <div className="max-w-2xl mx-auto">
              <div className={`relative bg-white rounded-[30px] transition-all duration-500 ease-out
                             border-2 border-gray-200 hover:border-pink
                             ${showChat ? 'h-[650px]' : 'h-[60px]'}`}>
                <form onSubmit={handleSearch} className="absolute inset-x-0 top-0 z-10">
                  <div className="relative flex items-center h-[60px] px-6">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="What do you need help with?"
                      className="w-full text-lg bg-transparent
                               focus:outline-none placeholder-gray-400"
                    />
                    <button
                      type="submit"
                      className="flex-shrink-0 bg-gradient-to-r from-pink to-yellow
                               text-white px-6 py-2 rounded-full
                               hover:opacity-90 transition-opacity ml-4"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                </form>

                <div className={`absolute inset-x-0 top-[60px] bottom-0 
                                transition-opacity duration-500
                                ${showChat ? 'opacity-100' : 'opacity-0'}`}>
                  {showChat && (
                    <AIChatInterface
                      initialQuery={searchQuery}
                      onClose={() => {
                        setShowChat(false)
                        setSearchQuery('')
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Popular Searches */}
            <div className={`mt-4 transition-opacity duration-300 ${showChat ? 'opacity-0' : 'opacity-100'}`}>
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
      </div>
    </div>
  )
}
