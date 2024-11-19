'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, DollarSign, CheckCircle, XCircle } from 'lucide-react'
import { format } from 'date-fns'

type Booking = {
  id: string
  service: string
  provider: {
    name: string
    image: string
    rating: number
  }
  status: 'upcoming' | 'completed' | 'cancelled'
  date: Date
  time: string
  location: string
  price: number
}

const mockBookings: Booking[] = [
  {
    id: '1',
    service: 'House Cleaning',
    provider: {
      name: 'Sarah Johnson',
      image: '/avatars/sarah.jpg',
      rating: 4.8
    },
    status: 'upcoming',
    date: new Date('2024-02-15'),
    time: '14:00',
    location: '123 Main St, San Francisco',
    price: 120
  },
  {
    id: '2',
    service: 'Plumbing Repair',
    provider: {
      name: 'Mike Smith',
      image: '/avatars/mike.jpg',
      rating: 4.9
    },
    status: 'completed',
    date: new Date('2024-02-10'),
    time: '10:30',
    location: '456 Oak Ave, San Francisco',
    price: 200
  },
  {
    id: '3',
    service: 'Personal Training',
    provider: {
      name: 'Emma Davis',
      image: '/avatars/emma.jpg',
      rating: 5.0
    },
    status: 'cancelled',
    date: new Date('2024-02-08'),
    time: '09:00',
    location: 'Fitness First Gym',
    price: 80
  }
]

const BookingCard = ({ booking }: { booking: Booking }) => {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  }

  const StatusIcon = {
    upcoming: Clock,
    completed: CheckCircle,
    cancelled: XCircle
  }[booking.status]

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <img
                src={booking.provider.image}
                alt={booking.provider.name}
                className="rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                <div className="bg-yellow text-xs font-bold px-1 rounded">
                  ★ {booking.provider.rating}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{booking.service}</h3>
              <p className="text-gray-600">with {booking.provider.name}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${statusColors[booking.status]}`}>
            <StatusIcon className="w-4 h-4" />
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            {format(booking.date, 'MMM d, yyyy')}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            {booking.time}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            {booking.location}
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-5 h-5 mr-2" />
            ${booking.price}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          {booking.status === 'upcoming' && (
            <>
              <button className="px-4 py-2 text-sm font-medium text-pink hover:bg-pink/5 rounded-lg transition-colors">
                Reschedule
              </button>
              <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                Cancel
              </button>
            </>
          )}
          {booking.status === 'completed' && (
            <button className="px-4 py-2 text-sm font-medium text-pink hover:bg-pink/5 rounded-lg transition-colors">
              Book Again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function BookingsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all')

  const filteredBookings = mockBookings.filter(booking => 
    filter === 'all' ? true : booking.status === filter
  )

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Bookings</h1>
          <div className="flex gap-2">
            {(['all', 'upcoming', 'completed', 'cancelled'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                          ${filter === status 
                            ? 'bg-pink text-white' 
                            : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No bookings found</p>
          </div>
        )}
      </div>
    </div>
  )
}
