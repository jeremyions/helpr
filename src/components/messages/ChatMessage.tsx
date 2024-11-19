'use client'

import { cn } from '@/lib/utils'
import { Avatar } from '@/components/ui/avatar'
import { format } from 'date-fns'

interface ChatMessageProps {
  message: {
    id: string
    content: string
    timestamp: Date
    sender: {
      id: string
      name: string
      avatar: string
      isOnline?: boolean
    }
    isCurrentUser: boolean
    status?: 'sent' | 'delivered' | 'read'
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { content, timestamp, sender, isCurrentUser, status } = message

  return (
    <div
      className={cn(
        'flex gap-3 max-w-[80%]',
        isCurrentUser ? 'ml-auto flex-row-reverse' : ''
      )}
    >
      <Avatar className="h-8 w-8">
        <img src={sender.avatar} alt={sender.name} className="rounded-full" />
        {sender.isOnline && (
          <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white" />
        )}
      </Avatar>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {!isCurrentUser && (
            <span className="text-sm font-medium text-gray-900">
              {sender.name}
            </span>
          )}
          <span className="text-xs text-gray-500">
            {format(timestamp, 'h:mm a')}
          </span>
        </div>

        <div
          className={cn(
            'rounded-2xl px-4 py-2 max-w-prose break-words',
            isCurrentUser
              ? 'bg-pink text-white'
              : 'bg-gray-100 text-gray-900'
          )}
        >
          {content}
        </div>

        {isCurrentUser && status && (
          <div className="flex justify-end">
            <span className="text-xs text-gray-500">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
