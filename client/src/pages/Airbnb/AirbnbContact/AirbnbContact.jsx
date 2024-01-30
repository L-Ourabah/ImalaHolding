import React from 'react'


import FormContact from './components/FormContact'
import CoordoonneeContact from './components/CoordoonneeContact'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'

import './AirbnbContact.css'
import Navbar from '../../../components/NavBars/NavbarAirbnb'

export default function AirbnbContact() {
  return (
    <>
 <Navbar/>

    <header className='header_contact_airbnb'>
    <BarreDeRecherche/>
    </header>

       <main className='main_contact_airbnb'>
        <FormContact/>
        <CoordoonneeContact/>
       </main>
       
    </>
  )
}
