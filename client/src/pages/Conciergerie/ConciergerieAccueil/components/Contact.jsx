import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <section className='section_contact_conciergerie' id="section_contact_conciergerie">
        <h2>Nous Contacter</h2>

<div className='contact_contenu_conciergerie'>
    <div className='contact_img_conciergerie'> 
      <div className='contact_square_conciergerie'>l</div>
      <img src="https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img_contact-section" />
    </div>

    <div className="contact_txt_conciergerie">
        <h3>Besoin d'aide ?</h3>
       <p>Pour toute question ou demande d'information, n'hésitez pas à nous contacter. Notre équipe est là pour vous accompagner et vous fournir une assistance personnalisée. Nous sommes à votre écoute pour vous garantir une expérience exceptionnelle."</p> 
       <form method="get" action="contact">
                    <button type="submit"> Poursuivre</button>
                </form>
    </div>
</div>

    </section>
  )
}
