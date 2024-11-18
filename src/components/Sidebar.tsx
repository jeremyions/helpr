'use client'

import { 
  User, 
  Briefcase, 
  HandHeart, 
  HelpCircle, 
  Settings, 
  Users, 
  Calendar,
  Bell,
  LogOut,
  ChevronLeft,
  Home
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Get a Helpr', icon: HandHeart, href: '/find-help' },
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Jobs Available', icon: Briefcase, href: '/jobs' },
  { name: 'Community', icon: Users, href: '/community' },
  { name: 'Upcoming Events', icon: Calendar, href: '/events' },
]

const bottomNavItems = [
  { name: 'Profile', icon: User, href: '/profile' },
  { name: 'Settings', icon: Settings, href: '/settings' },
]

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <aside 
      className={`
        fixed left-0 top-0 h-screen bg-gradient-to-b from-pink to-yellow/50
        transition-all duration-300 ease-in-out z-50
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
    >
      <div className="flex flex-col h-full text-white p-4">
        {/* Collapse Button */}
        <button
          onClick={onToggle}
          className="absolute -right-3 top-8 bg-white p-1 rounded-full shadow-lg
                     hover:scale-110 transition-transform duration-200"
        >
          <ChevronLeft className={`h-4 w-4 text-pink transition-transform duration-300
            ${isCollapsed ? 'rotate-180' : ''}`} 
          />
        </button>

        {/* Logo */}
        <div className="mb-8 flex items-center">
          <h1 className={`text-2xl font-bold transition-all duration-300
            ${isCollapsed ? 'scale-0 w-0' : 'scale-100 w-auto'}`}>
            Helpr
          </h1>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  hover:bg-white/10 group relative
                  ${isActive ? 'bg-white/20' : ''}
                `}
              >
                <Icon className={`h-5 w-5 transition-transform duration-200
                  ${isCollapsed ? 'scale-110' : ''}`} 
                />
                <span className={`whitespace-nowrap transition-all duration-300
                  ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  {item.name}
                </span>
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-white text-pink
                                rounded-md opacity-0 group-hover:opacity-100 transition-opacity
                                whitespace-nowrap shadow-lg">
                    {item.name}
                  </div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Bottom Navigation and Profile Section */}
        <div className="mt-auto pt-4 border-t border-white/20">
          {/* Bottom Nav Items */}
          <div className="space-y-2 mb-4">
            {bottomNavItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    hover:bg-white/10 group relative
                    ${isActive ? 'bg-white/20' : ''}
                  `}
                >
                  <Icon className={`h-5 w-5 transition-transform duration-200
                    ${isCollapsed ? 'scale-110' : ''}`} 
                  />
                  <span className={`whitespace-nowrap transition-all duration-300
                    ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                    {item.name}
                  </span>
                  
                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-white text-pink
                                  rounded-md opacity-0 group-hover:opacity-100 transition-opacity
                                  whitespace-nowrap shadow-lg">
                      {item.name}
                    </div>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Notifications */}
          <div className="mb-4">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg
                         hover:bg-white/10 transition-all relative group"
            >
              <Bell className="h-5 w-5" />
              <span className={`transition-all duration-300
                ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                Notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-yellow rounded-full" />
              
              {/* Notification dropdown */}
              {showNotifications && !isCollapsed && (
                <div className="absolute bottom-full left-0 w-full mb-2 bg-white
                              rounded-lg shadow-lg p-4 text-gray-800">
                  <div className="space-y-2">
                    <p className="text-sm">New message from Sarah</p>
                    <p className="text-sm">Booking confirmed for tomorrow</p>
                  </div>
                </div>
              )}
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg
                         hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center 
                          justify-center flex-shrink-0 hover:scale-110 transition-transform">
              <User className="h-6 w-6 text-pink" />
            </div>
            <div className={`transition-all duration-300 overflow-hidden
              ${isCollapsed ? 'w-0' : 'w-auto'}`}>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-white/80">Premium Member</p>
            </div>
          </div>

          {/* Logout Button */}
          <button className={`
            mt-2 w-full flex items-center gap-3 px-4 py-3 rounded-lg
            hover:bg-white/10 transition-all text-white/80 hover:text-white
          `}>
            <LogOut className="h-5 w-5" />
            <span className={`transition-all duration-300
              ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  )
}
