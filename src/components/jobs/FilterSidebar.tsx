'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Star,
  Briefcase,
  Filter
} from 'lucide-react'

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void
  className?: string
}

export function FilterSidebar({ onFilterChange, className = '' }: FilterSidebarProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <Filter className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      {/* Search */}
      <div className="space-y-2">
        <Label>Search</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search jobs..." 
            className="pl-9"
          />
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label>Location</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Enter location..." 
            className="pl-9"
          />
        </div>
      </div>

      {/* Job Type */}
      <div className="space-y-2">
        <Label>Job Type</Label>
        <div className="grid grid-cols-2 gap-2">
          {['Full-time', 'Part-time', 'Contract', 'Temporary'].map(type => (
            <Button 
              key={type}
              variant="outline"
              className="justify-start"
              onClick={() => {}}
            >
              <Briefcase className="h-4 w-4 mr-2" />
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="space-y-4">
        <Label>Salary Range</Label>
        <div className="px-2">
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>$0</span>
            <span>$100k+</span>
          </div>
        </div>
      </div>

      {/* Experience Level */}
      <div className="space-y-2">
        <Label>Experience Level</Label>
        <div className="space-y-2">
          {['Entry Level', 'Mid Level', 'Senior Level', 'Expert'].map(level => (
            <Button 
              key={level}
              variant="outline"
              className="w-full justify-start"
              onClick={() => {}}
            >
              <Star className="h-4 w-4 mr-2" />
              {level}
            </Button>
          ))}
        </div>
      </div>

      {/* Posted Time */}
      <div className="space-y-2">
        <Label>Posted Time</Label>
        <div className="space-y-2">
          {[
            'Last 24 hours',
            'Last 3 days',
            'Last 7 days',
            'Last 14 days',
            'Last 30 days'
          ].map(time => (
            <Button 
              key={time}
              variant="outline"
              className="w-full justify-start"
              onClick={() => {}}
            >
              <Clock className="h-4 w-4 mr-2" />
              {time}
            </Button>
          ))}
        </div>
      </div>

      <Button className="w-full bg-pink hover:bg-pink-dark text-white">
        Apply Filters
      </Button>
    </div>
  )
}
