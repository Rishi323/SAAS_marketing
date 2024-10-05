import React from 'react'
import { Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-primary-100 to-primary-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Boost Your Marketing?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Schedule a free consultation with our marketing experts and learn how MarketBoost can transform your campaigns.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <Link
              to="/book-consultation"
              className="btn-primary flex items-center text-lg px-8 py-4"
            >
              <Calendar className="mr-2" />
              Schedule Your Free Consultation
            </Link>
          </div>
          <p className="mt-4 text-center text-gray-600">
            No commitment required. Discover how we can help you achieve your marketing goals.
          </p>
        </div>
        {/* ... rest of the component remains the same ... */}
      </div>
    </div>
  )
}

export default LandingPage