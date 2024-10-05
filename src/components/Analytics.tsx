import React from 'react'
import { BarChart, LineChart, PieChart } from 'lucide-react'

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-600">
            <BarChart className="mr-2" /> Traffic Overview
          </h2>
          <p className="text-4xl font-bold text-gray-900">15,234</p>
          <p className="text-gray-600">Visitors this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-green-600">
            <LineChart className="mr-2" /> Conversion Rate
          </h2>
          <p className="text-4xl font-bold text-gray-900">3.2%</p>
          <p className="text-gray-600">Average conversion</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-yellow-600">
            <PieChart className="mr-2" /> Revenue
          </h2>
          <p className="text-4xl font-bold text-gray-900">$24,500</p>
          <p className="text-gray-600">Total revenue this month</p>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Detailed Reports</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-600">Detailed analytics reports and charts would be displayed here, showing trends, user behavior, and other key metrics.</p>
        </div>
      </div>
    </div>
  )
}

export default Analytics