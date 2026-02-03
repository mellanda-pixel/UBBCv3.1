'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TrialPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would submit to a backend
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Get Started</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
              START YOUR <span className="gradient-text">FREE 3-DAY TRIAL</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Experience everything UBBC has to offer. No pressure. No obligation. Just come see why we're Atlanta's fitness family.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D8E] focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D8E] focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D8E] focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D8E] focus:border-transparent transition-all"
                    placeholder="(404) 555-0123"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-xl text-lg font-bold uppercase tracking-wider"
                >
                  Claim My Free Trial
                </button>

                <p className="text-center text-gray-500 text-sm">
                  All classes included. No commitment. Just results.
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-4">
                You're All Set!
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Welcome to the UBBC family, {formData.firstName}! We'll be in touch shortly to get you started on your fitness journey.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">What's Next?</h3>
                <ul className="text-left space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#5B2D8E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Check your email for confirmation details</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#5B2D8E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Stop by during open hours to complete your registration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#5B2D8E] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Bring workout clothes and a great attitude!</span>
                  </li>
                </ul>
              </div>

              <a 
                href="tel:4042822364"
                className="inline-flex items-center space-x-2 text-[#5B2D8E] font-medium"
              >
                <span>Questions? Call us at (404) 282-2364</span>
              </a>
            </div>
          )}

          {/* What You Get */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏋️", title: "Full Gym Access", description: "Use all equipment and facilities" },
              { icon: "🎯", title: "All Classes", description: "Boot camp, HIIT, yoga & more" },
              { icon: "👥", title: "Meet the Team", description: "Get to know our trainers" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Reminder */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-2">
            Find Us on Piedmont Park
          </h3>
          <p className="text-gray-600 mb-4">
            1830 Piedmont Ave NE, Atlanta, GA 30324
          </p>
          <p className="text-gray-500 text-sm">
            Mon-Fri: 6am-8pm | Sat-Sun: 8am-5pm
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
