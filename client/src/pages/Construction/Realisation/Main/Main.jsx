import React from 'react'
import Data from '../RealisationsList'
import { Link } from 'react-router-dom'

function Main() {

  return (
    <div className='realisations-main'>
        <div className='realisations-main-wrapper container'>
          {Data.map((list) =>(
            <div className='realisations-main-image-container' >
              <Link to={`/${list.name}`}>
                <img src={list.images}/>
              </Link>
            </div> 
          ))}
        </div>
        <div className='realisations-main-text container'>
            <h2>Vous êtes intéréssé par nos projets ? <br/>Contactez-nous !</h2>
            <Link to='/'><button>Voir plus</button></Link>
        </div>
    </div>
  )
}

export default Main