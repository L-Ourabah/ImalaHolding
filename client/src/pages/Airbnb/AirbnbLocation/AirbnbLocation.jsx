import React from 'react'
import './AirbnbLocation.css'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'
import LocationDescription from './LocationDescription/LocationDescription'


export default function AirbnbLocation() {
  return (
    <div className='location-wrapper'>
      <BarreDeRecherche />
      <LocationDescription />
    </div>
  )
}
