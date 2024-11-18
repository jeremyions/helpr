'use client'

import { Search, UserCheck, Calendar } from 'lucide-react'

const steps = [
  {
    title: 'Search for a helper',
    description: 'Browse through our trusted community of helpers and find the perfect match for your needs.',
    icon: Search,
    color: 'pink'
  },
  {
    title: 'Compare profiles',
    description: 'Read reviews, check ratings, and compare helper profiles to make an informed decision.',
    icon: UserCheck,
    color: 'yellow'
  },
  {
    title: 'Book instantly',
    description: 'Schedule your service with just a few clicks and get instant confirmation.',
    icon: Calendar,
    color: 'pink'
  }
]

export default function HowItWorks() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        How Helpr Works
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          
          return (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 
                              bg-gradient-to-r from-pink to-yellow -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`
                  w-24 h-24 rounded-full mb-4 relative
                  flex items-center justify-center
                  transition-transform duration-300 group-hover:scale-110
                  ${step.color === 'pink' 
                    ? 'bg-gradient-to-br from-pink to-pink-light' 
                    : 'bg-gradient-to-br from-yellow to-yellow-light'}
                `}>
                  <Icon className="h-10 w-10 text-white" />
                  <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full 
                                bg-white flex items-center justify-center
                                text-lg font-bold
                                shadow-lg
                                text-pink">
                    {index + 1}
                  </div>
                </div>
                
                {/* Text */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
