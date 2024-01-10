import React from 'react'
import './AirbnbLocation.css'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'
import LocationDescription from './LocationDescription/LocationDescription'
import LocationAvis from './LocationAvis/LocationAvis'


export default function AirbnbLocation() {
  return (
    <div className='location-wrapper'>
      <BarreDeRecherche />
      <LocationDescription />
      <LocationAvis />
    </div>
  )
}
