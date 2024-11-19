'use client'

import { useState } from 'react'
import { JobCard } from '@/components/jobs/JobCard'
import { FilterSidebar } from '@/components/jobs/FilterSidebar'
import { Button } from '@/components/ui/button'
import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react'

// Mock data - replace with API call later
const mockJobs = [
  {
    title: 'Senior Web Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    posted: '2 days ago',
    urgency: 'high',
    rating: 4.8,
    description: 'We are looking for a Senior Web Developer to join our dynamic team. The ideal candidate will have strong experience with React, Node.js, and modern web technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL']
  },
  {
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k - $100k',
    posted: '1 day ago',
    urgency: 'medium',
    rating: 4.5,
    description: 'Join our creative team as a UX Designer. You will be responsible for creating beautiful and intuitive user experiences for our clients.',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping', 'User Research']
  },
  {
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130k - $160k',
    posted: '3 days ago',
    urgency: 'high',
    rating: 4.9,
    description: 'Looking for an experienced DevOps Engineer to help us scale our cloud infrastructure and improve our CI/CD pipelines.',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform']
  },
  // Add more mock jobs as needed
] as const

export default function JobsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Available Jobs</h1>
            <p className="text-gray-500 mt-1">Find your next opportunity</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {/* View mode toggle */}
            <div className="hidden sm:flex items-center bg-white rounded-lg border p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              <FilterSidebar onFilterChange={() => {}} />
            </div>
          </div>

          {/* Filters - Mobile */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)} />
              <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-white">
                <FilterSidebar onFilterChange={() => {}} className="h-full overflow-y-auto" />
              </div>
            </div>
          )}

          {/* Jobs Grid/List */}
          <div className="flex-1">
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                : 'space-y-6'
            }>
              {mockJobs.map((job, index) => (
                <JobCard
                  key={index}
                  job={job}
                  variant={viewMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
