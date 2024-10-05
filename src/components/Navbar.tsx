import React from 'react'
import { Link } from 'react-router-dom'
import { Rocket } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Rocket className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MarketBoost</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/analytics" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Analytics</Link>
            <Link to="/email-campaigns" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Email Campaigns</Link>
            <Link to="/audience-segmentation" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Audience Segmentation</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
            <Link to="#" className="ml-4 btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar