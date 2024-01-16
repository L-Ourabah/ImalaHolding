import React from 'react'
import { Link } from 'react-router-dom'

function CompteRenduResume() {
  return (
    <div className='compte-rendu-resume-wrapper'>
      <h2>Résumé</h2>
      <div className='compte-rendu-resume-flex'>
        <div className='resume-section-flex'>
          <p>Nombre de voyageurs :</p>
          <p>3 voyageurs</p>
          <p> </p>
        </div>
        <div className='resume-section-flex'>
          <p>Dates de réservations :</p>
          <p>22/11 -30/11 (8 nuits)</p>
          <p>1400€</p>
        </div>
        <div className='resume-section-flex'>
          <p>Repas</p>
          <p>Matin, midi, soir (Au choix)</p>
          <p>Sur place</p>
        </div>
        <div className='resume-section-flex'>
          <p>Garderie</p>
          <p>Toute la journée (9h - 22h)</p>
          <p>Sur place</p>
        </div>
        <div className='resume-section-flex'>
          <p>Locaiton de véhicule</p>
          <p>Toute la journée (Horaires sur place)</p>
          <p>Sur place, en fonction du véhicule</p>
        </div>
        <div className='resume-section-flex'>
          <p>Frais IMALA :</p>
          <p><Link>Frais de services</Link></p>
          <p>168€</p>
        </div>
        <div className='resume-total'>
          <p>TOTAL</p>
          <p>1568€</p>
        </div>
      </div>
      <div className='resume-additional-informations'>
        <p>Prix potentiel maximal pour les repas : <span>540€</span> (Prix des repas si consommés matin, midi et soir, tous les jours et par tous les voyageurs).</p>
        <p>
          Attention ! Le total ne prend pas en compte les repas, la garderie et la location de véhicule qui se fera directement dans nos agences.
          Ces services vous seront débités directement en fonction de votre consommation.
        </p>
      </div>
      
    </div>
  )
}

export default CompteRenduResume