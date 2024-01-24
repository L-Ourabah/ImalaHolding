import React from 'react'
import Herobanner from './Herobanner/Herobanner'
import Card from './Card/Card'
import Partners from './Partners/Partners'
import PlanBackground from '../../assets/images/plan-background.webp'
import ConceptionBackground from '../../assets/images/services-conception-background.jpeg'
import MaterialsBackground from '../../assets/images/materials-background.jpeg'

function Services() {
  return (
    <div className='services-container'>
      <div className='services-wrapper'>
        <Herobanner />
        <Card 
          link={'/plan'}
          title={"PLAN"} 
          description={"Imaginons ensemble un plan architectural qui transcende le quotidien, où chaque espace est conçu avec précision pour enrichir votre expérience de vie et refléter votre vision unique."}
          background={PlanBackground}
        />
        <Card 
          link={'/conception'}
          title={"CONCEPTION"} 
          description={"Laissez-nous transformer votre vision en réalité avec une conception architecturale qui équilibre esthétique moderne et fonctionnalité sur mesure, en parfaite harmonie avec l'environnement de votresite."}
          background={ConceptionBackground}
        />
        <Card 
          link={'/materials'}
          title={"MATERIAUX"} 
          description={"Chez IMALA CONSTRUCTION, nous sélectionnons rigoureusement les matériaux de construction pour assurer la durabilité et l'esthétique de votre futur bien, en harmonie avec l'innovation et le respect de l'environnement."}
          background={MaterialsBackground}
        />
        <Partners />
      </div>
    </div>
  )
}

export default Services