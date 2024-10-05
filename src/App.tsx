import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Analytics from './components/Analytics'
import EmailCampaigns from './components/EmailCampaigns'
import AudienceSegmentation from './components/AudienceSegmentation'
import Pricing from './components/Pricing'
import BookingPage from './components/BookingPage'
import ThankYou from './components/ThankYou'
import CTA from './components/CTA'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/email-campaigns" element={<EmailCampaigns />} />
          <Route path="/audience-segmentation" element={<AudienceSegmentation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-consultation" element={<BookingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <CTA />
      </div>
    </Router>
  )
}

export default App