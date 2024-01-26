import React from 'react'

import './componentsG.css'

export default function Presentation(props) {
  return (
    <section className="presentation_conciergerie">
      <h2>{props.titrePresentation}</h2>
      <p>{props.textePresentation}</p>
    </section>
  )
}
