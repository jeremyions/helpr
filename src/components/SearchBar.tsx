'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What kind of help do you need?"
          className="w-full px-6 py-4 pl-14 rounded-full border-2 border-pink text-lg
                   bg-white focus:outline-none focus:border-pink-dark focus:ring-4 
                   focus:ring-pink-light/50 transition-all duration-300"
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-pink" />
        
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 
                   bg-pink hover:bg-pink-dark text-white rounded-full
                   transition-all duration-300 hover:shadow-lg"
        >
          Search
        </button>
      </div>
    </form>
  )
}
