'use client'

import { useState, useEffect } from 'react'
import { Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'assistant' | 'user'
  content: string
}

interface AIChatInterfaceProps {
  initialQuery: string
}

export default function AIChatInterface({ initialQuery }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [currentService, setCurrentService] = useState('')

  useEffect(() => {
    if (initialQuery && messages.length === 0) {
      handleInitialQuery()
    }
  }, [initialQuery])

  const handleInitialQuery = async () => {
    setIsLoading(true)
    setCurrentService(initialQuery.toLowerCase())

    // Simulate AI processing
    setTimeout(() => {
      let response = ''
      if (initialQuery.toLowerCase().includes('lawn') || initialQuery.toLowerCase().includes('mow')) {
        response = "For lawn mowing services, what size is your yard? (Small: under 1/4 acre, Medium: 1/4-1/2 acre, Large: over 1/2 acre)"
      } else if (initialQuery.toLowerCase().includes('chiro')) {
        response = "Are you looking for specific treatment? (e.g., back pain, neck pain, sports injury, general wellness)"
      } else if (initialQuery.toLowerCase().includes('loan') || initialQuery.toLowerCase().includes('bank')) {
        response = "What's the purpose of the loan/banking service? (e.g., personal loan, mortgage, business loan, everyday banking)"
      } else if (initialQuery.toLowerCase().includes('insurance')) {
        response = "What type of insurance are you looking for? (e.g., home, auto, life, health)"
      } else if (initialQuery.toLowerCase().includes('real estate')) {
        response = "Are you looking to buy, sell, or rent? What's your target location and price range?"
      } else {
        response = "What's your location? This helps us find professionals near you."
      }

      setMessages([
        { role: 'user', content: initialQuery },
        { role: 'assistant', content: response }
      ])
      setIsLoading(false)
    }, 1000)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = { role: 'user' as const, content: inputValue }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      let response = ''
      const messageCount = messages.length

      if (messageCount === 1) {
        if (currentService.includes('loan') || currentService.includes('bank')) {
          response = "What's your approximate credit score range? (Excellent: 720+, Good: 690-719, Fair: 630-689, Building Credit)"
        } else if (currentService.includes('insurance')) {
          response = "Do you have any specific coverage requirements or preferences?"
        } else if (currentService.includes('real estate')) {
          response = "What's your preferred timeline for moving/selling?"
        } else {
          response = "What's your budget range for this service?"
        }
      } else if (messageCount === 3) {
        if (currentService.includes('loan')) {
          response = "What's your preferred loan term? (e.g., 12 months, 3 years, 5 years, 30 years for mortgage)"
        } else if (currentService.includes('insurance')) {
          response = "When would you like the coverage to start?"
        } else {
          response = "When would you like to schedule this service? (ASAP, specific date, or flexible)"
        }
      } else if (messageCount === 5) {
        setShowResults(true)
        response = "Perfect! I've found some great matches for you. Here are your top options..."
      }

      if (response) {
        setMessages(prev => [...prev, { role: 'assistant', content: response }])
      }
      setIsLoading(false)
    }, 1000)
  }

  const renderResults = () => {
    if (currentService.includes('lawn') || currentService.includes('mow')) {
      return (
        <>
          {/* Premium Lawn Service */}
          <div className="bg-gradient-to-r from-pink to-yellow/50 p-6 rounded-xl text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold">GreenPro Lawn Care</h4>
                <p className="text-sm opacity-90">Premium Service - 4.9 ★ (200+ jobs)</p>
              </div>
              <span className="text-lg font-bold">$65/visit</span>
            </div>
            <p className="text-sm mb-4">
              "Professional lawn care service with 10+ years experience. Full-service
              mowing, edging, and cleanup. Licensed and insured."
            </p>
            <button className="bg-white text-pink px-6 py-2 rounded-lg font-medium
                           hover:bg-gray-50 transition-colors">
              Book Now
            </button>
          </div>
        </>
      )
    } else if (currentService.includes('chiro')) {
      return (
        <>
          {/* Chiropractor */}
          <div className="bg-gradient-to-r from-pink to-yellow/50 p-6 rounded-xl text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold">Dr. Sarah Mitchell</h4>
                <p className="text-sm opacity-90">Advanced Spine Care - 4.9 ★</p>
              </div>
              <span className="text-lg font-bold">$95/session</span>
            </div>
            <p className="text-sm mb-4">
              "Specializing in sports injuries and chronic pain management. 
              Advanced certification in spinal manipulation and rehabilitation."
            </p>
            <button className="bg-white text-pink px-6 py-2 rounded-lg font-medium
                           hover:bg-gray-50 transition-colors">
              Book Consultation
            </button>
          </div>
        </>
      )
    } else if (currentService.includes('loan') || currentService.includes('bank')) {
      return (
        <>
          {/* Financial Service */}
          <div className="bg-gradient-to-r from-pink to-yellow/50 p-6 rounded-xl text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold">FirstChoice Bank</h4>
                <p className="text-sm opacity-90">Premier Financial Partner - 4.8 ★</p>
              </div>
              <span className="text-lg font-bold">3.75% APR</span>
            </div>
            <p className="text-sm mb-4">
              "Offering competitive rates, flexible terms, and personalized service.
              Quick approval process and dedicated loan officer."
            </p>
            <button className="bg-white text-pink px-6 py-2 rounded-lg font-medium
                           hover:bg-gray-50 transition-colors">
              Apply Now
            </button>
          </div>
        </>
      )
    } else if (currentService.includes('insurance')) {
      return (
        <>
          {/* Insurance Service */}
          <div className="bg-gradient-to-r from-pink to-yellow/50 p-6 rounded-xl text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold">SafeGuard Insurance</h4>
                <p className="text-sm opacity-90">Top-Rated Provider - 4.9 ★</p>
              </div>
              <span className="text-lg font-bold">Custom Quote</span>
            </div>
            <p className="text-sm mb-4">
              "Comprehensive coverage options tailored to your needs.
              24/7 customer support and fast claims processing."
            </p>
            <button className="bg-white text-pink px-6 py-2 rounded-lg font-medium
                           hover:bg-gray-50 transition-colors">
              Get Quote
            </button>
          </div>
        </>
      )
    }

    return (
      <>
        {/* Default Professional Service */}
        <div className="bg-gradient-to-r from-pink to-yellow/50 p-6 rounded-xl text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-semibold">Elite Professional Services</h4>
              <p className="text-sm opacity-90">Top Rated - 4.9 ★</p>
            </div>
            <span className="text-lg font-bold">Custom Quote</span>
          </div>
          <p className="text-sm mb-4">
            "Industry leading expertise with proven track record.
            Personalized solutions and exceptional customer service."
          </p>
          <button className="bg-white text-pink px-6 py-2 rounded-lg font-medium
                         hover:bg-gray-50 transition-colors">
            Get Quote
          </button>
        </div>
      </>
    )
  }

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg" style={{ height: '500px' }}>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: 'calc(100% - 80px)' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                max-w-[80%] rounded-lg px-4 py-2
                ${message.role === 'user' 
                  ? 'bg-pink text-white' 
                  : 'bg-gray-100 text-gray-800'}
              `}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 text-gray-800">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Input Area - Now always visible */}
      <div className="border-t p-4 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your response..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-pink text-white px-4 py-2 rounded-lg hover:bg-pink-dark
                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Results Section - Shown in a modal/overlay when needed */}
      {showResults && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" style={{ zIndex: 1000 }}>
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Matches</h3>
            {renderResults()}
          </div>
        </div>
      )}
    </div>
  )
}
