'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Paperclip, Send, Smile } from 'lucide-react'
import TextareaAutosize from 'react-textarea-autosize'

interface ChatInputProps {
  onSendMessage: (content: string) => void
  onAttachFile?: () => void
}

export function ChatInput({ onSendMessage, onAttachFile }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 border-t bg-white p-4"
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="flex-shrink-0"
        onClick={onAttachFile}
      >
        <Paperclip className="h-5 w-5 text-gray-500" />
      </Button>

      <div className="relative flex-1">
        <TextareaAutosize
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 focus:border-pink focus:outline-none focus:ring-1 focus:ring-pink"
          maxRows={5}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute bottom-2 right-2"
        >
          <Smile className="h-5 w-5 text-gray-500" />
        </Button>
      </div>

      <Button
        type="submit"
        className="flex-shrink-0 bg-pink hover:bg-pink-dark"
        size="icon"
        disabled={!message.trim()}
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
}
