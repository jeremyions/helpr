'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { SidebarProvider } from '@/context/SidebarContext'
import { useSidebar } from '@/context/SidebarContext'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

function MainLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar()
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main 
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isCollapsed ? "ml-20" : "ml-64"
        )}
      >
        <div className="h-full w-full">
          {children}
        </div>
      </main>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </SidebarProvider>
      </body>
    </html>
  )
}
