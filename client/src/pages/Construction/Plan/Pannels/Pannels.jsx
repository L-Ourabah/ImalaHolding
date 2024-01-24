import React from 'react'
import '../Plan.css'

function Pannels() {
  return (
    <div className='plan-pannels-container'>
      <div className='plan-pannel-container pannels-container'>
        <div className='plan-pannel-wrapper pannels-wrapper'>
          <h2>Plan béton armé</h2>
          <p>Confiez-nous la réalisation de votre projet de construction en béton armé. Nous mettrons en œuvre un plan détaillé, basé sur les dernières techniques</p>
        </div>
      </div>
      <div className='plan-pannel-container pannels-container'>
        <div className='plan-pannel-wrapper pannels-wrapper'>
          <h2>Plan architéctural</h2>
          <p>Laissons notre expertise architecturale créer un plan pour un bâtiment qui répond à vos besoins spécifiques, en harmonie avec les codes locaux et en tenant compte de vos aspirations esthétiques et fonctionnelles.</p>
        </div>
      </div>
      <div className='plan-pannel-container pannels-container'>
        <div className='plan-pannel-wrapper pannels-wrapper'>
          <h2>Plan 3D</h2>
          <p>Visualisez votre projet en 3D avec notre plan architectural interactif. Cela vous permettra de naviguer à travers votre futur appartement, villas et immeuble, de visualiser la disposition des pièces et de comprendre comment l'espace sera organisé.</p>
        </div>
      </div>
    </div>
  )
}

export default Pannels