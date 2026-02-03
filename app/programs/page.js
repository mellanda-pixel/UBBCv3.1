import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Programs | Ultimate Bodies By Carlos',
  description: 'Explore our fitness programs including personal training, group classes, strength training, and nutrition coaching at Ultimate Bodies By Carlos in Atlanta.',
}

const programs = [
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals. Our certified trainers create customized programs that deliver real, measurable results.",
    features: [
      "Customized workout plans",
      "Nutrition guidance",
      "Progress tracking",
      "Flexible scheduling",
      "Goal-specific training"
    ],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop"
  },
  {
    title: "Group Classes",
    description: "High-energy sessions that build strength and community. From boot camps to HIIT to yoga, every class is designed to challenge and inspire.",
    features: [
      "Boot Camp (outdoor)",
      "HIIT Training",
      "Strength & Conditioning",
      "Yoga & Flexibility",
      "Unlimited with membership"
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop"
  },
  {
    title: "Strength & Conditioning",
    description: "Build muscle, increase power, and transform your physique with our comprehensive strength programs led by experienced coaches.",
    features: [
      "Progressive overload training",
      "Technique coaching",
      "Full gym access",
      "Small group options",
      "All fitness levels welcome"
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
  },
  {
    title: "Wellness & Nutrition",
    description: "Holistic coaching that goes beyond the gym. Learn sustainable habits that fuel your body and support your lifestyle.",
    features: [
      "Personalized meal planning",
      "Lifestyle coaching",
      "Accountability support",
      "Supplement guidance",
      "Sustainable approach"
    ],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
  }
]

const pricingPlans = [
  {
    name: "Free Trial",
    price: "FREE",
    period: "3 days",
    description: "Experience the UBBC difference",
    features: [
      "Full gym access",
      "All group classes",
      "Meet our trainers",
      "No obligation"
    ],
    cta: "Start Free Trial",
    href: "/trial",
    featured: false
  },
  {
    name: "Monthly",
    price: "$70",
    period: "/month",
    description: "Flexible, no commitment",
    features: [
      "Unlimited group classes",
      "Full gym access",
      "Community events",
      "Cancel anytime"
    ],
    cta: "Join Now",
    href: "/trial",
    featured: true,
    badge: "Most Popular"
  },
  {
    name: "Annual",
    price: "$700",
    period: "/year",
    description: "Best value - save $140",
    features: [
      "Everything in Monthly",
      "2 months free",
      "Priority class booking",
      "Guest passes included"
    ],
    cta: "Join Now",
    href: "/trial",
    featured: false,
    badge: "Best Value"
  }
]

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Our Programs</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
              PROGRAMS THAT <span className="gradient-text">TRANSFORM</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Whether you're just starting out or pushing to the next level, we have a program designed for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-[#5B2D8E] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Membership Options</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 mt-4">
              No hidden fees. No long-term contracts. Just results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl p-8 relative ${
                  plan.featured 
                    ? 'ring-2 ring-[#5B2D8E] shadow-xl scale-105' 
                    : 'border border-gray-100 hover:shadow-lg'
                } transition-all duration-300`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5B2D8E] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-5 h-5 text-[#5B2D8E] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={plan.href}
                  className={`block w-full py-3 rounded-full text-center font-bold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-[#5B2D8E] hover:bg-[#4A2574] text-white'
                      : 'border-2 border-[#5B2D8E] text-[#5B2D8E] hover:bg-[#5B2D8E] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5B2D8E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join the UBBC family today and experience the difference 30 years of expertise makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/trial"
              className="bg-white text-[#5B2D8E] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </Link>
            <a 
              href="tel:4042822364"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Call (404) 282-2364
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
