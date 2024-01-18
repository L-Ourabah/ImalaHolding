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

  const navbarClass1 = `navbar1 ${scrolled ? "scrolled" : ""}`;

  return (
    <nav className={navbarClass1}>
      <div className="navbar_desktop1">
        <div className="logo1"><Link to="/">
                        <img src={conciergerie} />
                    </Link></div>
        <div className="onglets1">
          <Link to={"/"}>Accueil</Link>

          <div
            className="dropdown1"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link to={"/service"}>Services <Icon icon="pepicons-pencil:triangle-down" /></Link>
            {dropdownVisible && (
              <div className="dropdown-content">
                <Link to={"/service/nettoyage"}>Nettoyage</Link>
                <Link to={"/service/transport"}>Transport</Link>
                <Link to={"/service/garderie"}>Garderie</Link>
                <Link to={"/service/nourriture"}>Nourriture</Link>
                <Link to={"/service/loisirs"}>Loisirs</Link>
                <Link to={"/service/guidetouristique"}>Guide<br /> Touristique</Link>
                {/* Ajoutez autant d'options que nécessaire */}
              </div>
            )}
          </div>
          <Link to={"/abonnement"}>Abonnement</Link>
          <Link to={"/contact"}>Contact</Link>
          <span id="flag1"><Icon icon="openmoji:flag-france" /></span>
        </div>
      </div>
      {/*menu mobile*/}


      <div className='navbar_mobile1'>

        <div className="logo1">Logo</div>

        <div className="onglet_mobile1">
          <span id="flag"><Icon icon="openmoji:flag-france" /></span>


          <span className='burgerMenu1' onClick={openNav}>☰ </span>
        </div>

        <div id="myNav1" className="overlay1">
          <a href="javascript:void(0)" className="closebtn1" onClick={closeNav}>×</a>
          <div className="overlay-content">
            <h1 id="logo_mobile1" >Logo</h1>
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