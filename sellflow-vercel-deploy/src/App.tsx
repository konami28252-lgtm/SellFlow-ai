import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import ShadowMode from './components/ShadowMode'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Outcomes from './components/Outcomes'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ShadowMode />
        <HowItWorks />
        <Pricing />
        <Outcomes />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
