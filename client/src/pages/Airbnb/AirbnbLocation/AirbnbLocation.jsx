import React from 'react'
import './AirbnbLocation.css'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'
import LocationDescription from './LocationDescription/LocationDescription'
import LocationAvis from './LocationAvis/LocationAvis'
import Navbar from "../../../components/NavBars/NavbarAirbnb"

export default function AirbnbLocation() {
  return (
    <div className='location-wrapper'>
      <Navbar/>
      <BarreDeRecherche />
      <LocationDescription />
      <LocationAvis />
    </div>
  )
}
