import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const AfficherNavbar = ({ children }) => {

  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState()

  useEffect(() => {
    console.log("Vous êtes sur la page", location)
    if(location.pathname === '/paiement'){
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
  }, [location])

  return(
    <div>
      {showNavbar && children}
    </div>
  )
}

export default AfficherNavbar