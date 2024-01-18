import React from 'react'
import './Paiement.css'
import ModeDePaiement from './ModeDePaiement/ModeDePaiement'
import PaiementPannel from './PaiementPannel/PaiementPannel'
import { ReturnButton } from '../../../components/ReturnButton/ReturnButton'
import Logo from '../../../assets/Imala-location-logo.png'

function Paiement() {

  return (
    <div className='paiement-wrapper container'>
      <div className='imala-location-logo'>
        <img src={Logo} alt='Logo Imala'/>
      </div>
      <ReturnButton />
      <div className='paiement-flex-container'>
        <ModeDePaiement />
        <PaiementPannel />
      </div>
    </div>
  )
}

export default Paiement