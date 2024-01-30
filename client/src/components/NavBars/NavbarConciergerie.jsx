import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import conciergerie from '../../media/images/conciergerie.png';
import '../../styles/Header/NavbarConciergerie.css';





function openNav() {
  document.getElementById("myNav").style.width = "100%";

}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const navbarClass1 = `navbar ${scrolled ? "scrolled" : ""}`;

  return (
    <nav className={navbarClass1}>
      <div className="navbar_desktop">
        <div className="logo"><Link to="/">
                        <img src={conciergerie} />
                    </Link></div>
        <div className="onglets">
          <Link to={"/conciergerie"}>Accueil</Link>

          <div
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link to={"/ServiceConciergerie"}>Services <Icon icon="pepicons-pencil:triangle-down" /></Link>
            {dropdownVisible && (
              <div className="dropdown-content">
                <Link to={"/ServiceConciergerie/nettoyage"}>Nettoyage</Link>
                <Link to={"/ServiceConciergerie/transport"}>Transport</Link>
                <Link to={"/ServiceConciergerie/garderie"}>Garderie</Link>
                <Link to={"/ServiceConciergerie/nourriture"}>Nourriture</Link>
                <Link to={"/ServiceConciergerie/loisirs"}>Loisirs</Link>
                <Link to={"/ServiceConciergerie/guidetouristique"}>Guide<br /> Touristique</Link>
                {/* Ajoutez autant d'options que nécessaire */}
              </div>
            )}
          </div>
          <Link to={"/abonnement"}>Abonnement</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to="/">Imala Holding</Link>
          
        </div>
        <span id="flag"><Icon icon="openmoji:flag-france" /></span>
      </div>
      {/*menu mobile*/}


      <div className='navbar_mobile'>

        <div className="logo_mobile"><Link to="/">
                        <img src={conciergerie} />
                    </Link></div>

        <div className="onglet_mobile">
          <span id="flag"><Icon icon="openmoji:flag-france" /></span>


          <span className='burgerMenu' onClick={openNav}>☰ </span>
        </div>

        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
          <div className="overlay-content">
            <h1 id="logo_mobile" ><Link to="/">
                        <img src={conciergerie} />
                    </Link></h1>
            <Link to={'/'}>Accueil</Link>
            <Link to={"/service"}>Services</Link>
            <Link to={"/abonnement"}>Abonnement</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>

        </div>

      </div>

    </nav>
  );
}