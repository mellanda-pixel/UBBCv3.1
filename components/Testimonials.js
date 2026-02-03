'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: "Jordan",
    highlight: "Lost 30 lbs",
    text: "I lost 30 lbs for my wedding. Carlos is committed and pushes you to be your best self. Cannot recommend UBBC enough."
  },
  {
    name: "Nicole B",
    highlight: "20-year member",
    text: "I've been training with Carlos for 20 years. We don't just change bodies, we change lives. UBBC is my gym home."
  },
  {
    name: "Benita F",
    highlight: "Verified Member",
    text: "More than just a gym—it's a welcoming experience designed to support a healthy life filled with love, passion, and motivation!"
  }
]

export default function Testimonials() {
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Success Stories</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            TRANSFORMATIONS SPEAK LOUDER
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote mark */}
              <div className="text-[#5B2D8E]/20 text-6xl font-serif mb-4">"</div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#5B2D8E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#5B2D8E] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-[#5B2D8E] text-sm">{testimonial.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          {[
            { value: "4.9", label: "Star Rating" },
            { value: "148+", label: "Reviews" },
            { value: "30+", label: "Years Experience" },
            { value: "50+", label: "Trainers Mentored" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
