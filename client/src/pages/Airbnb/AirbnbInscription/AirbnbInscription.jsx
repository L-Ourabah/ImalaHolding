import React from 'react'

import Header from '../../../components/NavBars/NavbarAuth.jsx'
import Form from './Formulaire/FormAirbnbInscription.jsx'

import './AirbnbInscription.css'
export default function AirbnbInscription() {
  return (
    <div className='auth'>


      <Header />
      <Form/>
    </div>
  )
}
