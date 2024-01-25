import React from 'react'

export default function Presentation(props) {
  return (
    <section className="presentation_conciergerie">
      <h2>{props.titrePresentation}</h2>
      <p>{props.textePresentation}</p>
    </section>
  )
}