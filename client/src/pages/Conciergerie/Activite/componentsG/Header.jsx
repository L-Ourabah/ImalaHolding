import React from 'react'
import '../Activite.css'
export default function Header(props) {
  return (
    <header className='header_activite'>
    
      <h1>{props.titreActivite}</h1>
    <img src={props.imgActivite} alt="banniere" srcSet="" id="header_img_ban" />
    
    </header>
  )
}
