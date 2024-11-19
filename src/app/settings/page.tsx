'use client'

import { useState } from 'react'
import { Lock, Globe, CreditCard, User, Moon, Sun, Mail } from 'lucide-react'

type BillingMethod = {
  id: string
  title: string
  description: string
  enabled: boolean
}

type SettingsSection = {
  id: string
  title: string
  icon: any
  description: string
}

const sections: SettingsSection[] = [
  {
    id: 'invoices',
    title: 'Invoices & Billing',
    icon: CreditCard,
    description: 'View and manage your invoices and billing history'
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: Lock,
    description: 'Control your privacy settings and account security'
  },
  {
    id: 'language',
    title: 'Language & Region',
    icon: Globe,
    description: 'Set your preferred language and regional settings'
  },
  {
    id: 'payment',
    title: 'Payment Methods',
    icon: CreditCard,
    description: 'Manage your payment methods and billing information'
  }
]

const billingMethods: BillingMethod[] = [
  {
    id: 'auto_pay',
    title: 'Automatic Payments',
    description: 'Automatically pay invoices when they are due',
    enabled: true
  },
  {
    id: 'invoice_reminders',
    title: 'Invoice Reminders',
    description: 'Get notified before invoice due dates',
    enabled: true
  },
  {
    id: 'paperless',
    title: 'Paperless Billing',
    description: 'Receive invoices via email only',
    enabled: true
  },
  {
    id: 'statement',
    title: 'Monthly Statement',
    description: 'Receive a monthly summary of all transactions',
    enabled: false
  }
]

const SettingCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any
  title: string
  description: string 
}) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
    <div className="p-2 bg-gray-100 rounded-lg">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
              ${enabled ? 'bg-pink' : 'bg-gray-200'}`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
    />
  </button>
)

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('invoices')
  const [billingPreferences, setBillingPreferences] = useState(billingMethods)
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)

  const toggleBillingMethod = (id: string) => {
    setBillingPreferences(methods => methods.map(method =>
      method.id === id
        ? { ...method, enabled: !method.enabled }
        : method
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Settings</h1>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <User className="w-5 h-5" />
            <span>Account</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                            ${activeSection === section.id
                              ? 'bg-pink text-white'
                              : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <section.icon className="w-5 h-5" />
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>

            {/* Quick Settings */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    <span>Dark Mode</span>
                  </div>
                  <Toggle enabled={darkMode} onChange={() => setDarkMode(!darkMode)} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Email Notifications</span>
                  </div>
                  <Toggle 
                    enabled={emailNotifications} 
                    onChange={() => setEmailNotifications(!emailNotifications)} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Section Header */}
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  {sections.find(s => s.id === activeSection)?.title}
                </h2>
                <p className="text-gray-600 mt-1">
                  {sections.find(s => s.id === activeSection)?.description}
                </p>
              </div>

              {/* Section Content */}
              <div className="p-6">
                {activeSection === 'invoices' && (
                  <div className="space-y-6">
                    {billingPreferences.map((method) => (
                      <div
                        key={method.id}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <h3 className="text-lg font-medium text-gray-800">
                            {method.title}
                          </h3>
                          <p className="text-gray-600">{method.description}</p>
                        </div>
                        <Toggle
                          enabled={method.enabled}
                          onChange={() => toggleBillingMethod(method.id)}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === 'privacy' && (
                  <div className="space-y-4">
                    <SettingCard
                      icon={Lock}
                      title="Two-Factor Authentication"
                      description="Add an extra layer of security to your account"
                    />
                    <SettingCard
                      icon={User}
                      title="Profile Visibility"
                      description="Control who can see your profile information"
                    />
                  </div>
                )}

                {activeSection === 'language' && (
                  <div className="space-y-4">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Zone
                      </label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>Pacific Time (PT)</option>
                        <option>Eastern Time (ET)</option>
                        <option>Central Time (CT)</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeSection === 'payment' && (
                  <div className="space-y-4">
                    <SettingCard
                      icon={CreditCard}
                      title="Credit Cards"
                      description="Manage your saved credit cards"
                    />
                    <SettingCard
                      icon={CreditCard}
                      title="Bank Accounts"
                      description="Manage your linked bank accounts"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
