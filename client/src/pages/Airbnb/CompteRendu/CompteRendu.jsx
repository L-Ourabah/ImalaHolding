import React from 'react'
import { Link } from 'react-router-dom'
import './CompteRendu.css'
import VignetteAppartement from '../VignetteAppartement/VignetteAppartement'
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche'
import CompteRenduServices from './CompteRenduServices/CompteRenduServices'
import CompteRenduResume from './CompteRenduResume/CompteRenduResume'
import {ConfirmButton} from '../../../components/StyledComponents/ConfirmButton'

function CompteRendu() {
  return (
    <div>
      <BarreDeRecherche />
      <div className='compte-rendu-wrapper container'>
        <h1>COMPTE-RENDU DE LA RESERVATION</h1>
        <div className='vignette-container'>
          <VignetteAppartement />
        </div>
        <hr />
        <div className='compte-rendu-services-container'>
          <CompteRenduServices />
        </div>
        <hr/>
        <div className='compte-rendu-resume-container'>
          <CompteRenduResume />
        </div>
        <div className='compte-rendu-cgu-container'>
          <Link to='/'>Lire les Conditions Générales d'Utilisations</Link>
          <form>
            <div className='cgu-read-container cgu-checkbox-container'>
              <label htmlFor="read">J'ai bien lu et approuve les <span>Condition Générales d'Utilisations.</span></label>
              <input type='checkbox' id='read' name='read'/>
            </div>
            <div className='cgu-newsletter-container cgu-checkbox-container'>
              <label htmlFor="newsletter">Je souhaite recevoir les annonces concernants les derniers biens et offres correspondants à mes préférences.</label>
              <input type='checkbox' id='newsletter' name='newsletter'/>
            </div>
          </form>
        </div>
        <div className='compte-rendu-validate-button'>
          <ConfirmButton>Passer au paiement</ConfirmButton>
        </div>
        <Link to='/contact' className='compte-rendu-contact-link'>Besoin de plus de renseignements? N’hésitez pas à nous contacter !</Link>
      </div>
    </div>
    
  )
}

export default CompteRendu