import React, { useState } from 'react'
import { Mail, Send, Edit, Trash2 } from 'lucide-react'

const EmailCampaigns = () => {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Welcome Series', status: 'Active', sent: 1500, opened: 750, clicked: 300 },
    { id: 2, name: 'Monthly Newsletter', status: 'Draft', sent: 0, opened: 0, clicked: 0 },
    { id: 3, name: 'Product Launch', status: 'Scheduled', sent: 0, opened: 0, clicked: 0 },
  ])

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Email Campaigns</h1>
      
      <div className="mb-6">
        <button className="btn-primary flex items-center">
          <Mail className="mr-2" /> Create New Campaign
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {campaigns.map((campaign) => (
            <li key={campaign.id}>
              <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-primary-600">{campaign.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">Status: {campaign.status}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-primary-600 hover:text-primary-800">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={20} />
                  </button>
                  {campaign.status === 'Draft' && (
                    <button className="btn-primary flex items-center py-1 px-3">
                      <Send size={16} className="mr-1" /> Send
                    </button>
                  )}
                </div>
              </div>
              {campaign.status === 'Active' && (
                <div className="px-4 py-3 bg-gray-50 text-sm">
                  <span className="mr-4">Sent: {campaign.sent}</span>
                  <span className="mr-4">Opened: {campaign.opened}</span>
                  <span>Clicked: {campaign.clicked}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EmailCampaigns