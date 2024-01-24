import React from 'react'
import { Link } from 'react-router-dom'
import { TitleH2 } from '../../../../components/StyledComponents/TitleH2'
import BestSeller from '../BestSeller/BestSeller'
import Positif from '../../../../media/images/positif.svg'
import Negatif from '../../../../media/images/negatif.svg'
import LocationComments from '../LocationComments/LocationComments'
import AvisPannel from '../AvisPannel/AvisPannel'

function LocationAvis() {
  return (
    <div className='location-avis-page'>
      <div className='location-avis-container container'>
        <TitleH2>Avis</TitleH2>
        <BestSeller/>
        <div className='location-avis-flex'>
          <div className='location-avis-comments'>
            <div className='location-avis-positive'>
              <div className='location-avis-positive-title'>
                <img src={Positif} alt='Commentaires positifs'/>
                <h3>Commentaires les plus positifs</h3>
              </div>
              <div className='location-avis-positive-comments'>
                <LocationComments 
                  firstname="Demba"
                  lastname="SOUMARE" 
                  city="Paris, France" 
                  timestamp="Il y a 2 semaines"
                  comment="Je recommande vivement la location de ce duplex à Fann-Point E-Amitié à 
                  quiconque recherche une expérience de vie exceptionnelle à Dakar. La vue sur 
                  la mer, la qualitédu logement et l'attention du propriétaire font de cet endroit 
                  un véritable havre de paix où il fait bon vivre."
                  stars="5"
                />
                <LocationComments 
                  firstname="Ourabah"
                  lastname="LOUNNAS" 
                  city="Nice, France" 
                  timestamp="Il y a 1 semaine"
                  comment="Je tiens à exprimer ma grande satisfaction suite à la location du duplex situé à
                  Fann-Point E-Amitié avec une vue imprenable sur la mer. Mon expérience dans 
                  cet appartement a été tout simplement exceptionnelle et je souhaite partager 
                  mon enthousiasme."
                  stars="5"
                />
              </div>
            </div>
            <div className='location-avis-negative'>
              <div className='location-avis-positive-title'> 
                <img src={Negatif} alt='Avis négatifs'/>
                <h3>Commentaires les moins positifs</h3>
              </div>
              <div className='location-avis-positive-comments'>
                <LocationComments 
                  firstname="Stella"
                  lastname="RICHAL" 
                  city="Aix-En-Provence, France" 
                  timestamp="Il y a 4 heures"
                  comment=""
                  stars="3"
                />
              </div>
            </div>
          </div>
          <AvisPannel />
        </div>
        <div className='see-more-comments-container'>
          <button className='see-more-comments'>VOIR TOUT LES COMMENTAIRES</button>
          <Link to='/'>Comment laisser un avis ?</Link>
        </div>
      </div>
    </div>
  )
}

export default LocationAvis