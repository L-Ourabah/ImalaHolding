import React from 'react'
import Herobanner from '../Home/Herobanner/Herobanner'
import ServicesSection from './ServicesSection/ServicesSection'
import RealisationsSection from './RealisationsSection/RealisationsSection'
import InformationsSection from './InformationsSection/InformationsSection'
import ContactSection from './ContactSection/ContactSection'
import './Home.css'


function Home() {
  return (
    <div className='home-container'>
        <div className='home-wrapper'>
          <Herobanner />
          <ServicesSection />
          <RealisationsSection />
          <InformationsSection />
          <ContactSection />
        </div>
    </div>
  )
}

export default Home