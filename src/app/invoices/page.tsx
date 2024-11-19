'use client'

import { useState } from 'react'
import { Download, Search, Filter, ChevronDown, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { format } from 'date-fns'

type Invoice = {
  id: string
  invoiceNumber: string
  date: Date
  dueDate: Date
  amount: number
  status: 'paid' | 'pending' | 'overdue'
  service: string
  provider: {
    name: string
    image: string
  }
}

const mockInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2024-001',
    date: new Date('2024-02-01'),
    dueDate: new Date('2024-02-15'),
    amount: 150.00,
    status: 'paid',
    service: 'House Cleaning Service',
    provider: {
      name: 'Sarah Johnson',
      image: '/avatars/sarah.jpg'
    }
  },
  {
    id: '2',
    invoiceNumber: 'INV-2024-002',
    date: new Date('2024-02-05'),
    dueDate: new Date('2024-02-19'),
    amount: 200.00,
    status: 'pending',
    service: 'Plumbing Repair',
    provider: {
      name: 'Mike Smith',
      image: '/avatars/mike.jpg'
    }
  },
  {
    id: '3',
    invoiceNumber: 'INV-2024-003',
    date: new Date('2024-01-20'),
    dueDate: new Date('2024-02-03'),
    amount: 80.00,
    status: 'overdue',
    service: 'Personal Training Session',
    provider: {
      name: 'Emma Davis',
      image: '/avatars/emma.jpg'
    }
  }
]

const statusColors = {
  paid: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  overdue: 'bg-red-100 text-red-800'
}

const StatusIcon = {
  paid: CheckCircle,
  pending: Clock,
  overdue: AlertCircle
}

const InvoiceRow = ({ invoice }: { invoice: Invoice }) => {
  const Icon = StatusIcon[invoice.status]

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <FileText className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{invoice.invoiceNumber}</h3>
            <p className="text-sm text-gray-500">{invoice.service}</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-2">
            <img
              src={invoice.provider.image}
              alt={invoice.provider.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-600">{invoice.provider.name}</span>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <p className="font-medium text-gray-800">${invoice.amount.toFixed(2)}</p>
          <p className="text-sm text-gray-500">Due {format(invoice.dueDate, 'MMM d, yyyy')}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${statusColors[invoice.status]}`}>
          <Icon className="w-4 h-4" />
          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Download className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}

export default function InvoicesPage() {
  const [filter, setFilter] = useState<'all' | 'paid' | 'pending' | 'overdue'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredInvoices = mockInvoices
    .filter(invoice => filter === 'all' ? true : invoice.status === filter)
    .filter(invoice =>
      searchQuery
        ? invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
          invoice.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
          invoice.provider.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    )

  const totalAmount = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const pendingAmount = filteredInvoices
    .filter(invoice => invoice.status === 'pending' || invoice.status === 'overdue')
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Invoices</h1>
            <p className="text-gray-600 mt-1">Manage your billing and payment history</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <div className="flex gap-2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-xl font-bold text-gray-800">${totalAmount.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Pending Amount</p>
                <p className="text-xl font-bold text-pink">${pendingAmount.toFixed(2)}</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-pink text-white rounded-lg hover:bg-pink-dark transition-colors">
              <Download className="w-5 h-5" />
              Export All
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search invoices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-pink"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5" />
                Filters
                <ChevronDown className="w-4 h-4" />
              </button>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:border-pink"
              >
                <option value="all">All Invoices</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
        </div>

        {/* Invoices List */}
        <div className="space-y-4">
          {filteredInvoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          ))}
        </div>

        {filteredInvoices.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800">No invoices found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  )
}
