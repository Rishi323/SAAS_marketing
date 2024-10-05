import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <div className="bg-primary-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Boost your marketing today.</span>
          <span className="block">Start using MarketBoost for free.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-100">
          Join thousands of marketers who have already transformed their campaigns with MarketBoost.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
        >
          Sign up for free
          <ArrowRight className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

export default CTA