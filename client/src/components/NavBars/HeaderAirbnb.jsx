import React from 'react'
import { Link } from 'react-router-dom'
import FrenchIcon from '../../assets/FrenchIcon.svg'

export default function Header() {
  return (
    <div className='header-container'>
      <ul className='header-wrapper'>
        <li>
          <img src={FrenchIcon}/>
        </li>
        <div className='header-nav'>
          <li><Link to='/logements'>LOGEMENTS</Link></li>
          <li><Link to='/a_propos'>A PROPOS</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
          <li><Link to='/groupe_imala'>GROUPE IMALA</Link></li>
        </div>
        <li className='header-connection'><Link to='/connexion'>SE CONNECTER</Link></li>
      </ul>
    </div>
  )
}







