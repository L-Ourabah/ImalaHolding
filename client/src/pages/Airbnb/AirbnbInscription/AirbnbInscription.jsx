import React from 'react'

import Header from '../../../components/Header/NavbarAuth.jsx'
import Form from './Formulaire/FormAirbnbInscription.jsx'

import './AirbnbInscription.css'
export default function AirbnbInscription() {
  return (
    <div className='inscription'>


      <Header />
      <Form/>
    </div>
  )
}
