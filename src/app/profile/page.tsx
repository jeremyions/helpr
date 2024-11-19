'use client'

import { useState } from 'react'
import { Camera, Mail, Phone, MapPin, Star, Award, Clock, Shield } from 'lucide-react'

type UserProfile = {
  name: string
  email: string
  phone: string
  location: string
  bio: string
  memberSince: string
  completedJobs: number
  rating: number
  skills: string[]
  badges: {
    icon: string
    title: string
    description: string
  }[]
}

const mockProfile: UserProfile = {
  name: 'Alex Thompson',
  email: 'alex.thompson@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Passionate about helping others and delivering quality service. Specialized in home improvement and maintenance with over 5 years of experience.',
  memberSince: 'January 2022',
  completedJobs: 157,
  rating: 4.9,
  skills: [
    'Home Repair',
    'Plumbing',
    'Electrical',
    'Painting',
    'Carpentry',
    'Furniture Assembly'
  ],
  badges: [
    {
      icon: '🏆',
      title: 'Top Rated',
      description: 'Consistently rated 5 stars'
    },
    {
      icon: '⚡',
      title: 'Quick Responder',
      description: 'Responds within 1 hour'
    },
    {
      icon: '🎯',
      title: 'Expert',
      description: 'Verified skills and experience'
    }
  ]
}

const StatCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string | number }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-pink/10 rounded-lg">
        <Icon className="w-5 h-5 text-pink" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
)

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(mockProfile)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-pink to-yellow opacity-90" />
          <div className="px-8 pb-8">
            <div className="flex justify-between items-start -mt-12">
              <div className="relative">
                <img
                  src="/avatars/alex.jpg"
                  alt={profile.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-16 px-4 py-2 bg-pink text-white rounded-lg hover:bg-pink-dark transition-colors"
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            <div className="mt-4">
              <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
              <div className="mt-2 flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {profile.location}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow" />
                  {profile.rating}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Member since {profile.memberSince}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard icon={Award} label="Completed Jobs" value={profile.completedJobs} />
          <StatCard icon={Star} label="Average Rating" value={profile.rating} />
          <StatCard icon={Shield} label="Verified Status" value="Premium" />
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
              {isEditing ? (
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={4}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                />
              ) : (
                <p className="text-gray-600">{profile.bio}</p>
              )}
            </section>

            {/* Skills */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Badges */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {profile.badges.map((badge) => (
                  <div
                    key={badge.title}
                    className="p-4 border border-gray-100 rounded-lg text-center"
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <h3 className="mt-2 font-medium text-gray-800">{badge.title}</h3>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{profile.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{profile.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{profile.location}</span>
                </div>
              </div>
            </section>

            {/* Verification Status */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Verification Status</h2>
              <div className="space-y-3">
                <div className="flex items-center text-green-600">
                  <Shield className="w-5 h-5 mr-2" />
                  Identity Verified
                </div>
                <div className="flex items-center text-green-600">
                  <Shield className="w-5 h-5 mr-2" />
                  Email Verified
                </div>
                <div className="flex items-center text-green-600">
                  <Shield className="w-5 h-5 mr-2" />
                  Phone Verified
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
