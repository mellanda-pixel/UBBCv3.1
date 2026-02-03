'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/JRXssAnpgnw?autoplay=1&mute=1&loop=1&playlist=JRXssAnpgnw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 video-overlay"></div>

      {/* Bottom gradient for transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div className={`inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm font-medium">4.9 Rating • 148 Reviews • Since 1995</span>
            </div>

            {/* Headline */}
            <h1 className={`font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 ${isLoaded ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
              <span className="text-white">WHERE ATLANTA</span>
              <br />
              <span className="text-[#7B4DAE]">TRANSFORMS</span>
            </h1>

            {/* Subhead */}
            <p className={`text-xl sm:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed ${isLoaded ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              Your fitness family on Piedmont Park. 
              <span className="font-semibold"> 30 years of changing lives.</span>
            </p>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
              <Link 
                href="/trial"
                className="bg-white text-[#5B2D8E] px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider text-center inline-flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <span>Start Your Free 3-Day Trial</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a 
                href="tel:4042822364"
                className="px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider text-center border-2 border-white text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(404) 282-2364</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
