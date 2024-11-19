'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, MapPin, DollarSign, Briefcase, Star } from 'lucide-react'

interface JobCardProps {
  job: {
    title: string
    company: string
    location: string
    type: string
    salary: string
    posted: string
    urgency: 'low' | 'medium' | 'high'
    rating: number
    description: string
    skills: string[]
  }
  variant?: 'grid' | 'list'
}

export function JobCard({ job, variant = 'grid' }: JobCardProps) {
  const urgencyColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-pink-100 text-pink-800'
  }

  if (variant === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6
                    border border-gray-100 flex gap-6 items-start">
        <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center">
          <Briefcase className="h-8 w-8 text-gray-500" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
            <Badge variant="outline" className={urgencyColors[job.urgency]}>
              {job.urgency.charAt(0).toUpperCase() + job.urgency.slice(1)} Priority
            </Badge>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              {job.salary}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.posted}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {job.rating}
            </div>
          </div>

          <p className="mt-3 text-gray-600 line-clamp-2">{job.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map(skill => (
              <Badge key={skill} variant="secondary" className="bg-gray-100">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="bg-pink hover:bg-pink-dark text-white shrink-0">
          Apply Now
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6
                    border border-gray-100 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-gray-500" />
        </div>
        <Badge variant="outline" className={urgencyColors[job.urgency]}>
          {job.urgency.charAt(0).toUpperCase() + job.urgency.slice(1)} Priority
        </Badge>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>

      <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="h-4 w-4" />
          {job.salary}
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {job.rating}
        </div>
      </div>

      <p className="mt-3 text-gray-600 line-clamp-3 flex-1">{job.description}</p>

      <div className="mt-4 flex flex-wrap gap-2 mb-4">
        {job.skills.slice(0, 3).map(skill => (
          <Badge key={skill} variant="secondary" className="bg-gray-100">
            {skill}
          </Badge>
        ))}
        {job.skills.length > 3 && (
          <Badge variant="secondary" className="bg-gray-100">
            +{job.skills.length - 3} more
          </Badge>
        )}
      </div>

      <Button className="w-full bg-pink hover:bg-pink-dark text-white mt-auto">
        Apply Now
      </Button>
    </div>
  )
}
