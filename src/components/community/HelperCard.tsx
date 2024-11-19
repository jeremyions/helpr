'use client'

import Image from 'next/image'
import { Star, MessageSquare, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HelperCardProps {
  helper: {
    name: string
    avatar: string
    specialty: string
    rating: number
    reviews: number
    helprCoins: number
    badges: string[]
    availability: string
  }
}

export function HelperCard({ helper }: HelperCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      {/* Helper Info */}
      <div className="text-center mb-4">
        <div className="relative h-24 w-24 mx-auto mb-4">
          <Image
            src={helper.avatar}
            alt={helper.name}
            fill
            className="rounded-full object-cover"
          />
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
            <Award className="h-5 w-5 text-white" />
          </div>
        </div>
        <h3 className="font-bold text-lg text-gray-900">{helper.name}</h3>
        <p className="text-pink font-medium">{helper.specialty}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div>
          <div className="flex items-center justify-center text-yellow-400 mb-1">
            <Star className="h-4 w-4 mr-1" />
            <span className="font-bold">{helper.rating}</span>
          </div>
          <p className="text-xs text-gray-500">Rating</p>
        </div>
        <div>
          <div className="flex items-center justify-center text-gray-700 mb-1">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span className="font-bold">{helper.reviews}</span>
          </div>
          <p className="text-xs text-gray-500">Reviews</p>
        </div>
        <div>
          <div className="font-bold text-yellow-600 mb-1">
            {helper.helprCoins}
          </div>
          <p className="text-xs text-gray-500">Coins</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {helper.badges.map((badge) => (
          <span
            key={badge}
            className="px-2 py-1 bg-pink/10 text-pink rounded-full text-xs font-medium"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Availability */}
      <p className="text-sm text-center text-gray-500 mb-4">
        {helper.availability}
      </p>

      {/* Actions */}
      <div className="space-y-2">
        <Button className="w-full">Book Now</Button>
        <Button variant="outline" className="w-full">
          View Profile
        </Button>
      </div>
    </div>
  )
}
