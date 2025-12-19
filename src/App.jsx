import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const App = () => {
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);
  return (
    <>
      <main className='overflow-hidden'>
        <Header />
        <Hero />
        <Services />
        <WhyChoose />
        <HowItWorks />
        <Footer />
      </main>
    </>
  )
}

export default App
