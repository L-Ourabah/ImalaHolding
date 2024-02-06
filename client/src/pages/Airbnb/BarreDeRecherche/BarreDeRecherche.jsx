import React from 'react'
import './BarreDeRecherche.css'

function BarreDeRecherche() {
  return (
    <div className='search-container'>
      <div className='searchbar'>
        <input type="text" placeholder='Envie de voyager ?'/>
        <div></div>
      </div>
      <div className='filter'>

      </div>
    </div>
  )
}

export default BarreDeRecherche