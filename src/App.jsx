import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <main>
        <Header/>
        <Hero/>
        <Services/>
        <WhyChoose/>
        <HowItWorks/>
        <Footer/>
      </main>
    </>
  )
}

export default App
