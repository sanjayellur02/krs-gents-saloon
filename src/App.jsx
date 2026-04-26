import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Offers from './components/Offers'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import StickyBar from './components/StickyBar'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Offers />
      <WhyUs />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
      <StickyBar />
    </>
  )
}
