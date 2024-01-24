import React from 'react'
import Herobanner from '../Home/Herobanner/Herobanner'
import ServicesSection from './ServicesSection/ServicesSection'
import RealisationsSection from './RealisationsSection/RealisationsSection'
import InformationsSection from './InformationsSection/InformationsSection'
import ContactSection from './ContactSection/ContactSection'
import './Home.css'
import Navbar from '../../../components/NavBars/NavbarConstruction'


function Home() {
  return (
    <div className='home-container'>
        <div className='home-wrapper'>
          <Navbar/>
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