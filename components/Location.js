'use client'

import { useEffect, useRef, useState } from 'react'

export default function Location() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Find Us</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6">
              YOUR GYM ON <span className="gradient-text">PIEDMONT PARK</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Located in the heart of Midtown Atlanta, just steps from Piedmont Park. Premium location. Premium experience. Community that feels like home.
            </p>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4">
                <div className="w-12 h-12 bg-[#5B2D8E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">1830 Piedmont Ave NE</p>
                  <p className="text-gray-600">Atlanta, GA 30324</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4">
                <div className="w-12 h-12 bg-[#5B2D8E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="text-gray-600">Mon - Fri: 6:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sat - Sun: 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Phone */}
              <a 
                href="tel:4042822364"
                className="flex items-start space-x-4 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#5B2D8E] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call or Text</p>
                  <p className="text-[#5B2D8E] text-xl font-bold">(404) 282-2364</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className={`${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.7668854447437!2d-84.37229492357791!3d33.80049897323809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5046a5c3d1a1d%3A0x8f6e3f8c7e8d3c7a!2s1830%20Piedmont%20Ave%20NE%2C%20Atlanta%2C%20GA%2030324!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
            <a 
              href="https://www.google.com/maps/dir//1830+Piedmont+Ave+NE,+Atlanta,+GA+30324"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full btn-primary py-4 rounded-xl flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
