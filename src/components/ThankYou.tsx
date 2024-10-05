import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const ThankYou = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your consultation has been successfully scheduled.
          </p>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Next Steps</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>1. Check your email for a confirmation and meeting details.</p>
              <p>2. Prepare any questions you have about our services.</p>
              <p>3. We look forward to speaking with you!</p>
            </div>
          </div>
        </div>
        <div>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center"
          >
            Return to Home
            <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYou