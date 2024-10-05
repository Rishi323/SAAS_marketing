import React, { useState } from 'react'
import { Users, Filter, PlusCircle } from 'lucide-react'

const AudienceSegmentation = () => {
  const [segments, setSegments] = useState([
    { id: 1, name: 'New Subscribers', count: 1200, criteria: 'Subscribed in last 30 days' },
    { id: 2, name: 'High Value Customers', count: 500, criteria: 'Lifetime value > $1000' },
    { id: 3, name: 'Inactive Users', count: 3000, criteria: 'No activity in 90 days' },
  ])

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Audience Segmentation</h1>
      
      <div className="mb-6">
        <button className="btn-primary flex items-center">
          <PlusCircle className="mr-2" /> Create New Segment
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {segments.map((segment) => (
            <li key={segment.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="flex-shrink-0 mr-3 h-6 w-6 text-primary-600" />
                    <p className="text-sm font-medium text-primary-600 truncate">{segment.name}</p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {segment.count} contacts
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <Filter className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {segment.criteria}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Segment Builder</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-600">Here you would typically find an interface to create and edit segments based on various criteria such as demographics, behavior, and engagement metrics.</p>
        </div>
      </div>
    </div>
  )
}

export default AudienceSegmentation