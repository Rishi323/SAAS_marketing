import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Boost Your Marketing</span>
            <span className="block text-primary-600">with MarketBoost</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your marketing efforts, analyze data, and grow your business with our all-in-one marketing platform.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="btn-primary w-full flex items-center justify-center px-8 py-3 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="btn-secondary w-full flex items-center justify-center px-8 py-3 md:py-4 md:text-lg md:px-10">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero