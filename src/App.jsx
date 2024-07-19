import React from 'react'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import WhereToBuy from './components/where-to-buy/WhereToBuy'
import AppBanner from './components/app-banner/AppBanner'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  )
}

export default App