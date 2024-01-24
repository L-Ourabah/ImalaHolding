import React from 'react'
import { Link } from 'react-router-dom'
import Etoiles5 from '../../../../media/images/Etoiles5.svg'
import Etoiles49 from '../../../../media/images/Etoiles4,9.svg'
import Etoiles48 from '../../../../media/images/Etoiles4,8.svg'
import Etoiles47 from '../../../../media/images/Etoiles4,7.svg'
import Etoiles4 from '../../../../media/images/Etoiles4.svg'
import Etoiles3 from '../../../../media/images/Etoiles3.svg'
import Etoiles2 from '../../../../media/images/Etoiles2.svg'
import Etoiles1 from '../../../../media/images/Etoiles1.svg'


function AvisPannel() {
  return (
    <div className='location-avis-pannel'>
      <div className='location-avis-pannel-evaluations'>
        <h3>Evaluations</h3>
        <div className='avis-pannel-evaluations-stars'>
          <div>
            <Link>5 étoiles</Link>
            <img src={Etoiles5} alt='5 étoiles'/>
            <p>94%</p>
          </div>
          <div>
            <Link>4 étoiles</Link>
            <img src={Etoiles4} alt='4 étoiles'/>
            <p>5%</p>
          </div>
          <div>
            <Link>3 étoiles</Link>
            <img src={Etoiles3} alt='3 étoiles'/>
            <p>1%</p>
          </div>
          <div>
            <Link>2 étoiles</Link>
            <img src={Etoiles2} alt='2 étoiles'/>
            <p>0%</p>
          </div>
          <div>
            <Link>1 étoile</Link>  
            <img src={Etoiles1} alt='1 étoile'/>
            <p>0%</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='location-avis-pannel-services'>
        <h3>Evaluations par services</h3>
        <div className='avis-pannel-evaluations-stars'>
          <div>
            <Link>Propreté</Link>
            <img src={Etoiles47} alt='4.7 étoiles'/>
            <p>4.7</p>
          </div>
          <div>
            <Link>Décoration</Link>
            <img src={Etoiles49} alt='4.9 étoiles'/>
            <p>4.9</p>
          </div>
          <div>
            <Link>Convivialité</Link>
            <img src={Etoiles5} alt='5 étoiles'/>
            <p>5</p>
          </div>
          <div>
            <Link>Emplacement</Link>
            <img src={Etoiles48} alt='4.8 étoiles'/>
            <p>4.8</p>
          </div>
          <div>
            <Link>Qualité-prix</Link>  
            <img src={Etoiles49} alt='4.9 étoiles'/>
            <p>4.9</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvisPannel