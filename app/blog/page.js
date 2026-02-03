import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog | Ultimate Bodies By Carlos',
  description: 'Fitness tips, nutrition advice, and community updates from Ultimate Bodies By Carlos in Atlanta.',
}

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Stay Consistent with Your Fitness Goals",
    excerpt: "Consistency is key to any transformation. Here are Carlos's top tips for staying on track, even when life gets busy.",
    category: "Fitness Tips",
    date: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Nutrition Basics: Fueling Your Workout",
    excerpt: "What you eat matters just as much as how you train. Learn the fundamentals of pre and post-workout nutrition.",
    category: "Nutrition",
    date: "January 21, 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Meet Our Community: Jordan's 30lb Transformation",
    excerpt: "Jordan came to UBBC for wedding prep and left with a lifestyle change. Read her inspiring journey.",
    category: "Success Stories",
    date: "January 14, 2026",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Why Group Classes Beat Solo Workouts",
    excerpt: "The science behind community fitness and why training together leads to better results.",
    category: "Fitness Tips",
    date: "January 7, 2026",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Boot Camp Breakdown: What to Expect",
    excerpt: "New to boot camp? Here's everything you need to know before your first class at UBBC.",
    category: "Programs",
    date: "December 30, 2025",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&h=400&fit=crop",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "30 Years of Changing Lives in Atlanta",
    excerpt: "A look back at UBBC's journey from a small studio to Atlanta's premier fitness family.",
    category: "Community",
    date: "December 23, 2025",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    readTime: "8 min read"
  },
]

export default function BlogPage() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#5B2D8E] font-medium tracking-[0.2em] uppercase text-sm">Our Blog</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
              FITNESS INSIGHTS & <span className="gradient-text">COMMUNITY STORIES</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Tips, transformations, and updates from the UBBC family. Get inspired and informed on your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#5B2D8E] text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B2D8E] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-[#5B2D8E] font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Read More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3 rounded-full">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-600 mb-8">
            Get fitness tips, community updates, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B2D8E] focus:border-transparent"
            />
            <button type="submit" className="btn-primary px-8 py-3 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
