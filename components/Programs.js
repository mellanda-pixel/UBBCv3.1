'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const programs = [
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop"
  },
  {
    title: "Group Classes",
    description: "High-energy sessions that build strength and community.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop"
  },
  {
    title: "Strength & Conditioning",
    description: "Build muscle and transform your physique.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
  },
  {
    title: "Wellness & Nutrition",
    description: "Holistic coaching that goes beyond the gym.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
  }
]

export default function Programs() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">What We Offer</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            PROGRAMS THAT TRANSFORM
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you're just starting or pushing to the next level, we have a program designed for your journey.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2">
                  {program.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 ${isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          <Link 
            href="/programs"
            className="inline-flex items-center space-x-2 text-[#5B2D8E] font-medium hover:text-[#4A2574] transition-colors group"
          >
            <span>Explore All Programs</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
