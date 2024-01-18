import React from 'react'
import { Link } from 'react-router-dom'
import Demba from '../../../../assets/Demba.jpeg'
import Etoiles5 from '../../../../assets/Etoiles5.svg'
import Etoiles3 from '../../../../assets/Etoiles3.svg'

function LocationComments(props) {
  return (
    <div className='location-comment-container container'>
      <div className='comment-misc-container'>
        <div className='comment-poster'>
          <img src={`${props.firstname}.jpeg`} alt='Poster picture'/>
          <div className='comment-poster-informations'>
            <Link to='/'>{props.firstname} {props.lastname}</Link>
            <p>{props.city}</p>
          </div>
        </div>
        <div className='comment-timestamp'>
          <p>{props.timestamp}</p>
        </div>
      </div>
      <div className='comment-text'>
        <p>
        {props.comment}
        </p>
      </div>
      <div className='comment-score'>
        <img src={`Etoiles${props.stars}`} alt='Etoiles'/>
        <p>{props.stars} étoiles</p>
      </div>
    </div>
  )
}

export default LocationComments