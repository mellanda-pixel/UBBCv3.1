import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Community | Ultimate Bodies By Carlos',
  description: 'Join the UBBC family. Read success stories and see why our community makes the difference in Atlanta fitness.',
}

const testimonials = [
  {
    name: "Jordan",
    highlight: "Lost 30 lbs",
    text: "I lost 30 lbs for my wedding. Carlos is committed and pushes you to be your best self. Cannot recommend UBBC enough. The community here kept me accountable when I wanted to give up."
  },
  {
    name: "Nicole B",
    highlight: "20-year member",
    text: "I've been training with Carlos for 20 years. We don't just change bodies, we change lives. UBBC is my gym home. I've made lifelong friends here."
  },
  {
    name: "Benita F",
    highlight: "Verified Member",
    text: "More than just a gym—it's a welcoming experience designed to support a healthy life filled with love, passion, and motivation!"
  },
  {
    name: "Leah Z",
    highlight: "Transformation Story",
    text: "The trainers here genuinely care about your progress. They remember your name, your goals, and celebrate every win with you. That's rare."
  },
  {
    name: "Reggie S",
    highlight: "Boot Camp Regular",
    text: "The outdoor boot camps in Piedmont Park are incredible. Fresh air, great energy, and workouts that challenge you every single time."
  },
  {
    name: "Dave",
    highlight: "Strength Program",
    text: "I've gained more strength and muscle in 6 months here than I did in years at big box gyms. The coaching is next level."
  }
]

export default function CommunityPage() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Our Community</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
              MORE THAN A GYM. <span className="gradient-text">A FAMILY.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              When you join UBBC, you join a community that celebrates your wins, supports your struggles, and pushes you to be your best.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/JRXssAnpgnw"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-gray-500 mt-4">See what makes our boot camp community special</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="text-gray-600 mt-2">Real transformations from real members</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#5B2D8E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
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
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Not a Big Box Gym",
                description: "We know your name, your story, and your goals. You're not a number here."
              },
              {
                icon: "🤝",
                title: "Accountability Partners",
                description: "Our members support each other. When you miss a class, people notice."
              },
              {
                icon: "🎉",
                title: "We Celebrate Wins",
                description: "Every milestone matters. From your first workout to your biggest goal, we're cheering."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#5B2D8E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join the Family?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Start with a free 3-day trial and experience the UBBC difference for yourself.
          </p>
          <Link 
            href="/trial"
            className="bg-white text-[#5B2D8E] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
