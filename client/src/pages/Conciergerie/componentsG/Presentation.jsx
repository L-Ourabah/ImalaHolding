import React from 'react'
import './componentsG.css'
import { Fade } from "react-swift-reveal";

export default function Presentation(props) {
  return (
    <section className="presentation_conciergerie">
        <Fade>
      <h2>{props.titrePresentation}</h2>
      <p>{props.textePresentation}</p>
      </Fade>
    </section>
  )
}
