'use client'

import { useEffect, useRef } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import OrderForm from './sections/OrderForm'
import Contacts from './sections/Contacts'
import Navigation from './components/Navigation'
import ParticlesBackground from './components/ParticlesBackground'

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    // Vercel deployment fix
    <main ref={mainRef} className="relative min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <OrderForm />
      <Contacts />
    </main>
  )
}
