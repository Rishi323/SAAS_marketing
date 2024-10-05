import React from 'react'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'

const BookingPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Schedule Your Free Marketing Consultation
          </h1>
          <p className="text-xl text-gray-500 mb-8">
            Take the first step towards transforming your marketing strategy. Our experts are ready to provide personalized insights tailored to your business.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-primary-600 mr-2" />
              <span className="text-lg text-gray-700">30-minute session</span>
            </div>
            <div className="flex items-center">
              <Users className="h-6 w-6 text-primary-600 mr-2" />
              <span className="text-lg text-gray-700">One-on-one with a marketing expert</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-primary-600 mr-2" />
              <span className="text-lg text-gray-700">Completely free, no obligations</span>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Select a Date and Time</h2>
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/marketboost/consultation" 
                style={{ minWidth: '320px', height: '630px' }} 
              />
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage