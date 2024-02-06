import React from 'react'
import './Contact.css'
import Herobanner from './Herobanner/Herobanner'
import ContactForm from './ContactForm/ContactForm'
import ContactDetails from './ContactDetails/ContactDetails'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-wrapper'>
        <Herobanner />
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  )
}

export default Contact