import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Difference from '@/components/Difference'
import Programs from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import Location from '@/components/Location'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Ultimate Bodies By Carlos | Atlanta's Premier Fitness Family",
  description: "Transform your body and life at Ultimate Bodies By Carlos. Located on Piedmont Park in Midtown Atlanta. 30 years of changing lives. Start your free 3-day trial today.",
  keywords: "gym atlanta, personal training midtown, fitness piedmont park, carlos jordan trainer, atlanta fitness"
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Difference />
      <Programs />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
    </main>
  )
}
