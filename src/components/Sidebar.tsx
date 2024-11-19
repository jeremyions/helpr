'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/context/SidebarContext'
import { 
  HeartHandshake, 
  Search,
  MessageSquare,
  Calendar,
  CreditCard,
  Settings,
  User,
  ChevronLeft,
  Briefcase,
  Users
} from 'lucide-react'

const mainLinks = [
  {
    name: 'Get a Helpr',
    href: '/find-help',
    icon: Search
  },
  {
    name: 'Jobs Available',
    href: '/jobs',
    icon: Briefcase
  },
  {
    name: 'Community',
    href: '/community',
    icon: Users
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: MessageSquare
  },
  {
    name: 'Bookings',
    href: '/bookings',
    icon: Calendar
  },
  {
    name: 'Invoices',
    href: '/invoices',
    icon: CreditCard
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: User
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings
  }
]

export default function Sidebar() {
  const { isCollapsed, setIsCollapsed } = useSidebar()
  const pathname = usePathname()

  return (
    <div className="relative">
      <aside 
        className={cn(
          "fixed left-0 top-0 h-screen bg-gradient-to-b from-pink to-yellow/50 transition-all duration-300 ease-in-out",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "flex items-center p-3 mb-1",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          <div className="text-white">
            <HeartHandshake className="h-10 w-10" />
          </div>
          {!isCollapsed && (
            <span className="ml-2 text-2xl font-bold text-white">
              Helpr
            </span>
          )}
        </Link>

        {/* Navigation Links */}
        <nav className="flex-1 px-2">
          <ul className="space-y-0.5">
            {mainLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center rounded-lg transition-colors relative group",
                      isCollapsed ? "justify-center px-3 py-3" : "px-4 py-3",
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "text-white hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className="h-6 w-6 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="ml-3 text-lg font-medium">
                        {link.name}
                      </span>
                    )}
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-white text-pink rounded-md 
                                    opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
                                    pointer-events-none z-50 text-lg">
                        {link.name}
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-8 z-50 bg-white p-1.5 rounded-full shadow-md hover:shadow-lg
                     hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft 
            className={cn(
              "h-4 w-4 text-pink transition-transform duration-300",
              isCollapsed && "rotate-180"
            )} 
          />
        </button>
      </aside>
    </div>
  )
}
