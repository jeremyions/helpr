'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedSidebarProps {
  isOpen: boolean
  onClose: () => void
  position?: 'left' | 'right'
  children: React.ReactNode
  className?: string
}

export function AnimatedSidebar({
  isOpen,
  onClose,
  position = 'right',
  children,
  className = '',
}: AnimatedSidebarProps) {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: position === 'right' ? '100%' : '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            style={{ cursor: 'pointer' }}
          />

          {/* Sidebar */}
          <motion.div
            initial={position === 'right' ? { x: '100%' } : { x: '-100%' }}
            animate="open"
            exit="closed"
            variants={variants}
            className={`fixed inset-y-0 ${position}-0 z-50 w-full max-w-xs bg-white shadow-xl ${className}`}
          >
            <div className="h-full overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
