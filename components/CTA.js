'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function CTA() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#5B2D8E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
            No contracts. No commitment. Just results.
          </span>
          
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            READY TO TRANSFORM?
          </h2>
          
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Your journey starts with 3 free days. No pressure. No sales pitch. 
            Just experience what it feels like to be part of the UBBC family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-white text-[#5B2D8E] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Free 3-Day Trial</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Trust elements */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free 3-day access</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>All classes included</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>30+ years of results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
