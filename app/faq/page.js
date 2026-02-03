'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is the 3-day free trial?",
        a: "Our free trial gives you full access to the gym and all group classes for 3 consecutive days. It's our way of letting you experience the UBBC family before making any commitment. No obligations, just come in and see if we're the right fit for you."
      },
      {
        q: "Do I need to be in shape to start?",
        a: "Absolutely not! We welcome people at all fitness levels. Our trainers are experts at modifying exercises to match your current abilities while challenging you to improve. Many of our most inspiring transformations started with people who hadn't worked out in years."
      },
      {
        q: "What should I bring to my first workout?",
        a: "Just bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We have everything else you need. Most importantly, bring a positive attitude and be ready to work!"
      },
      {
        q: "How do I sign up for the free trial?",
        a: "You can sign up online through our Free Trial page, call us at (404) 282-2364, or simply walk in during business hours. We'll get you set up and ready to start the same day."
      }
    ]
  },
  {
    category: "Membership & Pricing",
    questions: [
      {
        q: "What are your membership options?",
        a: "We offer flexible options: Monthly membership at $70/month with no long-term commitment, or save with our Annual membership at $700/year (that's less than $60/month!). Both include unlimited access to all group classes."
      },
      {
        q: "Are there any signup fees or hidden costs?",
        a: "We believe in transparent pricing. There are no hidden fees, no signup fees, and no cancellation penalties. What you see is what you pay."
      },
      {
        q: "Can I freeze my membership?",
        a: "Yes, we understand life happens. You can freeze your membership for up to 3 months per year for medical reasons, travel, or other circumstances. Just give us a call to arrange it."
      },
      {
        q: "Do you offer personal training packages?",
        a: "Yes! Personal training is available separately from membership. We offer packages of 4, 8, or 12 sessions at various price points. Contact us for current rates and to get matched with the right trainer for your goals."
      }
    ]
  },
  {
    category: "Classes & Training",
    questions: [
      {
        q: "What types of classes do you offer?",
        a: "We offer a variety of group classes including Boot Camp, HIIT, Strength Training, Yoga, and more. Our signature outdoor boot camp in Piedmont Park is especially popular. Check our schedule for current class times."
      },
      {
        q: "Do I need to book classes in advance?",
        a: "For most classes, you can just show up. However, some specialty classes and personal training sessions should be booked in advance. We recommend arriving 10 minutes early, especially for your first class."
      },
      {
        q: "What makes UBBC different from other gyms?",
        a: "We're not a big box gym - we're a fitness family. With 30+ years in Atlanta, we know our members by name, celebrate their wins, and support them through challenges. Our trainers are here to change lives, not just count reps."
      },
      {
        q: "Can I bring a friend to class?",
        a: "Absolutely! First-timers can try a class for free. We love when our members bring friends - it's how our community grows. Just let us know at the front desk so we can welcome them properly."
      }
    ]
  },
  {
    category: "Facility & Location",
    questions: [
      {
        q: "Where are you located?",
        a: "We're at 1830 Piedmont Ave NE, Atlanta, GA 30324 - right on Piedmont Park in Midtown Atlanta. Easy access from the park and plenty of street parking available."
      },
      {
        q: "What are your hours?",
        a: "Monday through Friday: 6:00 AM - 8:00 PM. Saturday and Sunday: 8:00 AM - 5:00 PM. Our outdoor boot camps often start at 6 AM to catch the morning energy."
      },
      {
        q: "Do you have showers and locker rooms?",
        a: "Yes, we have full locker rooms with showers, changing areas, and day-use lockers. Bring your own lock or purchase one at the front desk."
      },
      {
        q: "Is parking available?",
        a: "Yes, there's street parking around the facility and nearby lots. Many members also walk or bike from the Piedmont Park area."
      }
    ]
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-gray-900 group-hover:text-[#5B2D8E] transition-colors pr-4">
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#5B2D8E] rotate-180' : 'group-hover:bg-gray-200'}`}>
          <svg className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">FAQ</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
              FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Everything you need to know about joining the UBBC family. Can't find your answer? Give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#5B2D8E] text-white flex items-center justify-center text-sm mr-3">
                  {idx + 1}
                </span>
                {section.category}
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {section.questions.map((item, qIdx) => (
                  <FAQItem key={qIdx} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            We're here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:4042822364"
              className="btn-primary px-8 py-4 rounded-full inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(404) 282-2364</span>
            </a>
            <Link 
              href="/trial"
              className="btn-secondary px-8 py-4 rounded-full"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
