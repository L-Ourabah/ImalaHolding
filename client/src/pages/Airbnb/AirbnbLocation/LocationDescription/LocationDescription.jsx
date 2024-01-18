import React from 'react'
import { Link } from 'react-router-dom'
import UserImage from '../../../../assets/Demba.jpeg'
import { TitleH2 } from '../../../../components/StyledComponents/TitleH2'
import LocationPannel from '../LocationPannel/LocationPannel'
import Slider from '../../../../components/Slider/Slider'

function LocationDescription() {
  return (
    <div className='location-description-page'>
      <div className='location-description-container container'>
        <h1>Duplex moderne situé à Fann-Point E-Amitié avec vue sur la mer</h1>
        <div className='location-description-wrapper'>
          <p>6 voyageurs, 3 chambres, 4 lits, 2 salles de bain</p>
          <div className='location-links-wrapper'>
            <p>Vous aimez ce logement ?</p>
            <div className='location-links'>
              <Link to='/'>Partager</Link>
              <Link to='/'>Favoris</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='location-owner-container container'>
        <div className='location-owner-image'>
          <img src={UserImage} alt="User profile picture"/>
        </div>
        <div className='location-owner-name'>
          <p>Logement proposé par :</p>
          <Link to='/'>Demba SOUMARE</Link>
        </div>
      </div>
      <div className='location-flex container'>
        <div className='location-flex-description'>
          <div className='location-slider-container'>  
            <Slider />
          </div>
          <div className='location-description-section'>
            <TitleH2 className=''>Description du bien</TitleH2>
            <p>
              Cet élégant duplex incarne le style de vie urbain, offrant non 
              seulement un refuge contemporain, mais également une 
              proximité immédiate avec les attractions culturelles, les 
              restaurants branchés  et les boutiques sophistiquées de Dakar.
              <br />
              <br />
              Une expérience de vie exceptionnelle au cœur de la vie 
              trépidante de la capitale sénégalaise.  
            </p>
          </div>
          <div className='location-services-section'>
            <TitleH2>Services proposés</TitleH2>
            <ul>
              <div>
                <li className='location-services-li'>WiFi</li>
                <p>
                  WiFi rapide vous permettant de vous connecter à internet, 
                  passer des appels vidéo, et poster sur les réseaux sociaux. 
                </p>
              </div>            
              <div>
                <li className='location-services-li'>Ménage</li>
                <p>Ménage offert par notre conciergerie.</p>
              </div>
              <div>
                <li className='location-services-li'>Télévision</li>
                <p>Télévision mise à disposition avec les chaînes du bouquet Canal +.</p>
              </div>
            </ul>
          </div>
        </div>
        <div className='location-flex-pannel'>
          <LocationPannel />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default LocationDescription