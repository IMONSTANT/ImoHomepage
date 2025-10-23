import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

export default function App(){
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <main className="px-6 md:px-16 lg:px-28">
        <Hero />
        <About />
        <Services />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
