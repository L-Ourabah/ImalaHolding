import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import logo from '../../media/images/airbnb.png';
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
        <div className='logo'>   <Link to="/airbnb"><img src={logo} alt="logo" /></Link></div>
        <div className='onglet_airbnb'>
          <Link to="/airbnb">Accueil</Link>
          <Link to="/logements">Logements</Link>
          <Link to="/about">A propos</Link>
          <Link to="/airbnbContact">Contact</Link>
          <Link to="/">Imala Holding</Link>

        </div>
        <div className='btn_connecter' >
          <button type='submit'><Link to="/connexion">SE CONNECTER</Link></button>
        </div>
        <div className='navbar_flag'><Icon icon="openmoji:flag-france" width="50" height="50" /></div>

      </div>
      {/*menu mobile*/}
      <div className='navbar_airbnb_mobile'>

        <div className='logo_mobile_airbnb'> <Link to="/"><img src={logo} alt="logo" /></Link></div>
        <div className='onglets_airbnb_mobile'>
          <div className='btn_connecter' >
            <Link to="/connexion"><Icon icon="iconamoon:profile-circle-light" color="#3864ff" width="50" height="50" /></Link>
          </div>

          <span className='burger_icon' onClick={openNav} >☰ </span>
          <div id="myNav" className="overlayAirbnb">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
            <div className="overlay-content">
              <span className="logo_mobile_airbnb_over" > <Link to="/airbnb"><img src={logo} alt="logo" /></Link></span>
              <Link to="/airbnb">Accueil</Link>
              <Link to="/logements">Logements</Link>
              <Link to="/about">A propos</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Imala Holding</Link>
            </div>

          </div>
        </div>
      </div>



    </nav>
  )
}