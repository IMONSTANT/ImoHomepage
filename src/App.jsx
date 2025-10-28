import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Solutions from './components/Solutions'
import ImoManagerSection from './components/ImoManagerSection'
import TechAccordion from './components/TechAccordion'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ParticlesBackground from './components/ParticlesBackground'

export default function App(){
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <main className="px-6 md:px-16 lg:px-28">
        <HeroSection />
        <About />
        <Solutions />
        <ImoManagerSection />
        <TechAccordion />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
