import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import conciergerie from '../../media/images/logoImala.png';
import '../../styles/Header/NavbarImala.css';





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

  const navbarClassImala = `navbarImala ${scrolled ? "scrolled" : ""}`;

  return (
    <nav className={navbarClassImala}>
      <div className="navbar_desktopImala">
        <div className="logoImala"><Link to="/">
                        <img src={conciergerie} />
                    </Link></div>
        <div className="ongletsImala">
          <Link to={"/"}>Accueil</Link>

          <div
            className="dropdownImala"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link to={"/service"}>Services <Icon icon="pepicons-pencil:triangle-down" /></Link>
            {dropdownVisible && (
              <div className="dropdownImala-content">
                <Link to={"/conciergerie"}>Conciergerie</Link>
                <Link to={"/construction"}>Construction</Link>
                <Link to={"/airbnb"}>Location</Link>
               
              </div>
            )}
          </div>
          <Link to={"/about"}>A propos</Link>
          <Link to={"/contact"}>Contact</Link>
         
        </div> 
        <span id="flagImala"><Icon icon="openmoji:flag-france" /></span>
      </div>
      {/*menu mobile*/}


      <div className='navbar_mobileImala'>

        <div className="logoOImala">Logo</div>

        <div className="onglet_mobileImala">
          <span id="flag"><Icon icon="openmoji:flag-france" /></span>


          <span className='burgerMenuImala' onClick={openNav}>☰ </span>
        </div>

        <div id="myNav" className="overlayImala">
          <a href="javascript:void(0)" className="closebtnImala" onClick={closeNav}>×</a>
          <div className="overlayImala-content">
            <h1 id="logo_mobileImala" >Logo</h1>
            <Link to={'/'}>Accueil</Link>
            <Link to={"/conciergerie"}>Conciergerie</Link>
                <Link to={"/construction"}>Construction</Link>
                <Link to={"/airbnb"}>Location</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>

        </div>

      </div>

    </nav>
  );
}