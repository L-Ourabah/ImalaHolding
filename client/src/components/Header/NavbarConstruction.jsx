import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import logo from '../../media/images/constructionLogo.png';
import '../../styles/Header/NavbarAirbnb.css';


function openNav() {
  document.getElementById("myNav").style.width = "100%";
  
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 

export default function Navbar() {


  
  return (
    
    <nav className='navbar_airbnb'>
      <div className='navbar_airbnb_desktop'>
        <div className='logo'>   <Link to="/"><img src={logo} alt="logo" /></Link></div>
<div className='onglet_airbnb'>


    <Link to="./construction">Accueil</Link>
    <Link to="./">Services</Link>
    <Link to="./realisation">a</Link>
    <Link to="./contact">CONTACT</Link>
   
   
</div>

<div className='navbar_flag'><Icon icon="openmoji:flag-france" width="50" height="50" /></div>

</div>
{/*menu mobile*/ }
<div className='navbar_airbnb_mobile'>
  
<div className='logo_mobile'> <Link to="/"><img src={logo} alt="logo" /></Link></div>
<div className='onglets_airbnb_mobile'>
<div className='btn_connecter' >
    <Link to ="/connexion"><Icon icon="iconamoon:profile-circle-light" color="#3864ff" width="50" height="50" /></Link>
</div>

<span className='burger_icon' onClick={openNav} >☰ </span>
<div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
  <div className="overlay-content">
  <h1 className="logo" > <Link to="/"><img src={logo} alt="logo" /></Link></h1>
  <Link to={'/'}>Accueil</Link>
  <Link to="apropos">A Propos</Link>
    <Link to="contact">Contact</Link>
    <Link to="gpimala">Groupe Imala </Link>
  </div>
  
  </div>
</div>                      
</div>



    </nav>
  )
}