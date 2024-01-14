import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header/HeaderCnxInscri.css'

export default function Header() {
  return (
    <div className='nav-container'>
    
       
        <div className='navTitle'>
          <h2><Link to='/logements'>IMALA</Link></h2>
        
        </div>
      
     
    </div>
  )
}