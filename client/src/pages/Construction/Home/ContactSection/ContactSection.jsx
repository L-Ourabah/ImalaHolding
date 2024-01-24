import React from 'react'
import './ContactSection.css'

function ContactSection() {
  return (
    <div className='home-contact-section'>
      <div className='home-contact-section-wrapper container'>
        <h2>Contactez-nous</h2>
        <p>
          Que vous ayez des questions, des commentaires ou que vous souhaitiez en savoir plus sur nos
          services, n'hésitez pas à nous contacter via notre formulaire de contact.
          <br/>
          Notre équipe est à votre disposition pour répondre à toutes vos demandes et vous aider à réaliser vos
          objectifs.
        </p>
        <button>Envoyer un message</button>
      </div>
    </div>
  )
}

export default ContactSection