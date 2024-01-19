import React from 'react'
import Header from '../../components/NavBars/NavbarConstruction.jsx'
import ban from '../../media/images/Rectangle 209.png';
export default function construction() {
  return (
    <div>
      
      <Header/>
      
      <div className=" section ban">
        <h1>IMALA</h1>
        <h2>Limmobilier dans toute sa splendeur'</h2>
      </div>

      <div className="banniere_accueil">
      <img src={ban} alt="" />
      </div></div>
  )
}
