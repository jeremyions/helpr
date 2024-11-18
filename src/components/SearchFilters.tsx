'use client'

import { useState } from 'react'
import { MapPin, Calendar, DollarSign, Star } from 'lucide-react'

export default function SearchFilters() {
  const [location, setLocation] = useState('')
  const [availability, setAvailability] = useState('anytime')
  const [budget, setBudget] = useState('any')
  const [rating, setRating] = useState('any')

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Location Filter */}
      <div className="relative">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm
                    border border-gray-200 hover:border-pink transition-colors cursor-pointer">
          <MapPin className="h-4 w-4 text-pink" />
          <select 
            className="bg-transparent border-none outline-none cursor-pointer text-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Any Location</option>
            <option value="sydney">Sydney</option>
            <option value="melbourne">Melbourne</option>
            <option value="brisbane">Brisbane</option>
          </select>
        </div>
      </div>

      {/* Availability Filter */}
      <div className="relative">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm
                    border border-gray-200 hover:border-pink transition-colors cursor-pointer">
          <Calendar className="h-4 w-4 text-pink" />
          <select 
            className="bg-transparent border-none outline-none cursor-pointer text-gray-600"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="anytime">Anytime</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="next-week">Next Week</option>
          </select>
        </div>
      </div>

      {/* Budget Filter */}
      <div className="relative">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm
                    border border-gray-200 hover:border-pink transition-colors cursor-pointer">
          <DollarSign className="h-4 w-4 text-pink" />
          <select 
            className="bg-transparent border-none outline-none cursor-pointer text-gray-600"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="any">Any Budget</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100+">$100+</option>
          </select>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="relative">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm
                    border border-gray-200 hover:border-pink transition-colors cursor-pointer">
          <Star className="h-4 w-4 text-pink" />
          <select 
            className="bg-transparent border-none outline-none cursor-pointer text-gray-600"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="any">Any Rating</option>
            <option value="4+">4+ Stars</option>
            <option value="4.5+">4.5+ Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
      </div>
    </div>
  )
}
