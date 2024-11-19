'use client'

import { useState } from 'react'
import { ChatMessage } from '@/components/messages/ChatMessage'
import { ChatInput } from '@/components/messages/ChatInput'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Search, MoreVertical, Phone, Video } from 'lucide-react'
import { AnimatedSidebar } from '@/components/ui/animated-sidebar'

// Mock data
const currentUser = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
}

const contacts = [
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    isOnline: true,
    lastMessage: 'I can help you with your project',
    lastMessageTime: '10:30 AM',
    unreadCount: 2,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    isOnline: false,
    lastMessage: 'Thanks for your help!',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
  },
  // Add more contacts as needed
]

const mockMessages = [
  {
    id: '1',
    content: 'Hi there! I saw your profile and I think I can help with your web development project.',
    timestamp: new Date('2024-01-20T10:30:00'),
    sender: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
      isOnline: true,
    },
    isCurrentUser: false,
  },
  {
    id: '2',
    content: 'That sounds great! I\'d love to hear more about your experience.',
    timestamp: new Date('2024-01-20T10:31:00'),
    sender: currentUser,
    isCurrentUser: true,
    status: 'read',
  },
  {
    id: '3',
    content: 'I have 5 years of experience in React and Next.js. I\'ve worked on similar projects before.',
    timestamp: new Date('2024-01-20T10:32:00'),
    sender: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
      isOnline: true,
    },
    isCurrentUser: false,
  },
  // Add more messages as needed
]

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [messages, setMessages] = useState(mockMessages)
  const [showMobileContacts, setShowMobileContacts] = useState(false)

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: String(messages.length + 1),
      content,
      timestamp: new Date(),
      sender: currentUser,
      isCurrentUser: true,
      status: 'sent',
    }
    setMessages([...messages, newMessage])
  }

  const ContactsList = () => (
    <>
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full rounded-full bg-gray-100 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink"
          />
        </div>
      </div>

      <div className="overflow-y-auto">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => {
              setSelectedContact(contact)
              setShowMobileContacts(false)
            }}
            className={`w-full flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors ${
              selectedContact.id === contact.id ? 'bg-gray-50' : ''
            }`}
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback>{contact.name[0]}</AvatarFallback>
              </Avatar>
              {contact.isOnline && (
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <p className="font-medium truncate">{contact.name}</p>
                <span className="text-xs text-gray-500 flex-shrink-0">
                  {contact.lastMessageTime}
                </span>
              </div>
              <p className="text-sm text-gray-500 truncate">
                {contact.lastMessage}
              </p>
            </div>

            {contact.unreadCount > 0 && (
              <span className="flex-shrink-0 h-5 w-5 bg-pink text-white rounded-full text-xs flex items-center justify-center">
                {contact.unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>
    </>
  )

  return (
    <div className="flex h-screen">
      {/* Desktop Contacts Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0 border-r bg-white">
        <ContactsList />
      </div>

      {/* Mobile Contacts Sidebar */}
      <AnimatedSidebar
        isOpen={showMobileContacts}
        onClose={() => setShowMobileContacts(false)}
        position="left"
      >
        <ContactsList />
      </AnimatedSidebar>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setShowMobileContacts(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage
                src={selectedContact.avatar}
                alt={selectedContact.name}
              />
              <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{selectedContact.name}</h2>
              {selectedContact.isOnline && (
                <p className="text-sm text-green-500">Online</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>

        {/* Chat Input */}
        <ChatInput
          onSendMessage={handleSendMessage}
          onAttachFile={() => {}}
        />
      </div>
    </div>
  )
}
