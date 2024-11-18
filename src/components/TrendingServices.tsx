'use client'

import { 
  Home, 
  Baby, 
  Heart, 
  Dog, 
  Car, 
  Briefcase,
  GraduationCap,
  Paintbrush,
  Wrench
} from 'lucide-react'
import { useState } from 'react'

const services = [
  { name: 'House Cleaning', icon: Home, color: 'pink' },
  { name: 'Babysitting', icon: Baby, color: 'yellow' },
  { name: 'Aged Care', icon: Heart, color: 'pink' },
  { name: 'Dog Walking', icon: Dog, color: 'yellow' },
  { name: 'Driver Service', icon: Car, color: 'pink' },
  { name: 'Personal Assistant', icon: Briefcase, color: 'yellow' },
  { name: 'Tutoring', icon: GraduationCap, color: 'pink' },
  { name: 'Home Painting', icon: Paintbrush, color: 'yellow' },
  { name: 'Handyman', icon: Wrench, color: 'pink' },
]

export default function TrendingServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Popular in Your Area
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon
          const isHovered = hoveredIndex === index
          
          return (
            <button
              key={service.name}
              className={`
                relative p-4 rounded-xl transition-all duration-300
                ${service.color === 'pink' 
                  ? 'hover:bg-pink hover:text-white' 
                  : 'hover:bg-yellow hover:text-gray-800'}
                bg-white border border-gray-100 shadow-sm
                flex items-center gap-3
                group
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                p-2 rounded-lg transition-colors
                ${service.color === 'pink'
                  ? 'bg-pink-light group-hover:bg-white/20'
                  : 'bg-yellow-light group-hover:bg-white/20'}
              `}>
                <Icon className={`
                  h-5 w-5 transition-colors
                  ${service.color === 'pink'
                    ? 'text-pink group-hover:text-white'
                    : 'text-yellow-dark group-hover:text-gray-800'}
                `} />
              </div>
              
              <span className="font-medium">{service.name}</span>
              
              {/* Popularity indicator */}
              <span className={`
                absolute top-2 right-2 text-xs px-2 py-1 rounded-full
                transition-colors
                ${service.color === 'pink'
                  ? 'bg-pink-light text-pink group-hover:bg-white/20 group-hover:text-white'
                  : 'bg-yellow-light text-yellow-dark group-hover:bg-white/20 group-hover:text-gray-800'}
              `}>
                Trending
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
