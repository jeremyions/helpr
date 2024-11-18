import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Helpr - Find Your Perfect Helper',
  description: 'Connect with trusted local helpers for cleaning, aged care, babysitting, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 transition-all duration-300 ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
