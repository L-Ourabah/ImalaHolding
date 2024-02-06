import React from 'react'

function ContactDetails() {
  return (
    <div className='contact-details-container'>
      <div className='contact-details-wrapper'>
        <h2>Coordonées</h2>
        <div className='contact-details-cards'>
          <div className='contact-details-single-card'>
            <div className='contact-details-phone-number'>
              <img />
              <p>+227 01 02 03 04 05</p>
            </div>
            <div className='contact-details-email-address'>
              <img/>
              <p>imala.construction@gmail.com</p>
            </div>
          </div>
          <div className='contact-details-single-card'>
            <div className='contact-details-position'>
              <img />
              <p>120 des Fleury <br/>Code Postal <br/> Ville, Pays</p>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61744.42108281518!2d-17.50711046357686!3d14.711103815382108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2zRGFrYXIsIFPDqW7DqWdhbA!5e0!3m2!1sfr!2sfr!4v1702569608782!5m2!1sfr!2sfr" width="100%" height="400px" style={{border:0, padding:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default ContactDetails