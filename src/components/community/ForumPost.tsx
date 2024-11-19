'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ForumPostProps {
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
  timestamp: string
  likes: number
  comments: number
  tags: string[]
}

export function ForumPost({
  author,
  content,
  timestamp,
  likes: initialLikes,
  comments,
  tags
}: ForumPostProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      {/* Author Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-500">{author.role}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-500">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-800">{content}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Timestamp */}
      <div className="text-sm text-gray-500 mb-4">{timestamp}</div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLike}
          className={isLiked ? 'text-pink' : 'text-gray-600'}
        >
          <Heart className="h-4 w-4 mr-1" />
          {likes}
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600">
          <MessageCircle className="h-4 w-4 mr-1" />
          {comments}
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600">
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </Button>
      </div>
    </div>
  )
}
