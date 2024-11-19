'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, TrendingUp, Award, Bookmark, Video, MessageSquare } from 'lucide-react'

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="h-full min-h-screen bg-gray-50/50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink to-yellow bg-clip-text text-transparent mb-3">
            Community Hub
          </h1>
          <p className="text-gray-600 text-lg">Connect, learn, and grow with fellow Helprs</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <Input
            type="text"
            placeholder="Search community..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-6 rounded-2xl border-0 bg-white shadow-sm text-lg
                     placeholder:text-gray-400 focus:ring-2 focus:ring-pink/20"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="forum" className="space-y-8">
          <TabsList className="flex justify-center gap-2 bg-transparent p-1 mb-8">
            <TabsTrigger 
              value="forum" 
              className="px-6 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:text-pink
                         data-[state=active]:shadow-sm transition-all duration-200"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Forum
            </TabsTrigger>
            <TabsTrigger 
              value="leaderboard"
              className="px-6 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:text-pink
                         data-[state=active]:shadow-sm transition-all duration-200"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger 
              value="topHelpers"
              className="px-6 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:text-pink
                         data-[state=active]:shadow-sm transition-all duration-200"
            >
              <Award className="mr-2 h-5 w-5" />
              Top Helpers
            </TabsTrigger>
            <TabsTrigger 
              value="courses"
              className="px-6 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:text-pink
                         data-[state=active]:shadow-sm transition-all duration-200"
            >
              <Video className="mr-2 h-5 w-5" />
              Courses
            </TabsTrigger>
            <TabsTrigger 
              value="saved"
              className="px-6 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:text-pink
                         data-[state=active]:shadow-sm transition-all duration-200"
            >
              <Bookmark className="mr-2 h-5 w-5" />
              Saved
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forum">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">Popular Discussions</h2>
                <Button className="bg-pink hover:bg-pink/90 text-white">New Post</Button>
              </div>
              {/* Forum posts will be mapped here */}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Community Leaderboard</h2>
              {/* Leaderboard content will go here */}
            </div>
          </TabsContent>

          <TabsContent value="topHelpers">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured Helpers</h2>
              {/* Top helpers grid will go here */}
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Educational Content</h2>
              {/* Course grid will go here */}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Saved Items</h2>
              {/* Saved content will go here */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
