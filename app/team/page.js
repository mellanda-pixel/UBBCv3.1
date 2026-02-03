import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Team | Ultimate Bodies By Carlos',
  description: 'Meet the trainers and coaches at Ultimate Bodies By Carlos. 30+ years of expertise transforming lives in Atlanta.',
}

const trainers = [
  {
    name: "Carlos Jordan",
    title: "Founder & Head Trainer",
    nickname: "The Body Surgeon",
    bio: "With over 30 years of experience, Carlos has transformed thousands of lives in Atlanta. Creator of the Global Cup Championship and mentor to 50+ trainers, his passion for fitness is matched only by his commitment to every member's success.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    specialties: ["Personal Training", "Boot Camp", "Strength & Conditioning"]
  },
  {
    name: "Melody",
    title: "Nutrition Coach",
    bio: "Melody brings a holistic approach to fitness, combining workout expertise with nutritional guidance to help members achieve sustainable results.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
    specialties: ["Nutrition Planning", "Wellness Coaching", "Weight Management"]
  },
  {
    name: "Melamd Floyd",
    title: "Group Fitness Instructor",
    bio: "Known for high-energy classes that push limits while keeping the fun alive. Melamd creates an atmosphere where everyone feels welcome.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    specialties: ["HIIT Training", "Group Classes", "Cardio Conditioning"]
  },
  {
    name: "J. Christopher",
    title: "Strength Coach",
    bio: "Specializing in strength and conditioning, J. Christopher helps members build muscle, increase power, and achieve their physique goals.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop",
    specialties: ["Strength Training", "Muscle Building", "Athletic Performance"]
  }
]

export default function TeamPage() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Our Team</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
              MEET THE <span className="gradient-text">FAMILY</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Our trainers aren't just coaches—they're mentors, motivators, and part of your fitness journey. Get to know the people who make UBBC special.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={trainers[0].image}
                alt={trainers[0].name}
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#5B2D8E] text-white px-6 py-3 rounded-xl">
                <p className="font-bold text-lg">"{trainers[0].nickname}"</p>
              </div>
            </div>
            <div>
              <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Founder</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
                {trainers[0].name}
              </h2>
              <p className="text-[#5B2D8E] font-medium mb-4">{trainers[0].title}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {trainers[0].bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {trainers[0].specialties.map((specialty, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
              Our Training Team
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.slice(1).map((trainer, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">
                    {trainer.name}
                  </h3>
                  <p className="text-[#5B2D8E] font-medium text-sm mb-3">{trainer.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, sIdx) => (
                      <span key={sIdx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stats */}
      <section className="py-16 bg-[#5B2D8E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "30+", label: "Years in Atlanta" },
              { value: "50+", label: "Trainers Mentored" },
              { value: "1000s", label: "Lives Changed" },
              { value: "1", label: "Big Family" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-white/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
