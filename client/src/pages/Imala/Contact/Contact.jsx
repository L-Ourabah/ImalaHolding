import React from 'react';
import Contactfd from "../../../media/images/contactfd.webp";

import tel from "../../../media/images/tel.png";
import email from "../../../media/images/email.png";
import adress from "../../../media/images/adress.png";

import "./Contact.css";
import ContactForm from "./Components/ContactForm.jsx";
import Map from './Components/Map.jsx';
import Navbar from '../../../components/NavBars/NavbarImala';
export default function Contact() {
  return (
    <main className="main_contact">
      <Navbar/>

      <div className=" section Contact " id="Contact">
        <h1>CONTACT</h1>

        <img src={Contactfd} alt="" />
      </div>

      <div className="contact-form " id='contact-form '>
        <div className="contact-title">
          <h2>Nous contactez</h2>
          <p>N'hésitez pas à nous contacter pour toute question, demande de renseignements ou besoin
d'assistance. Notre équipe est à votre disposition pour vous fournir toutes les informations
nécessaires et vous aider dans les meilleurs délais. Que ce soit par téléphone, email ou via notre
formulaire en ligne, nous nous engageons à vous répondre avec réactivité et professionnalisme.
Votre satisfaction est notre priorité et nous sommes impatients de vous entendre.</p>
        </div>


        <ContactForm />



      </div><div className="cordo">
        <div className="contact-title">
          <h2>Coordonnées</h2>
        </div>


        <div className="sect-info">
          <div className="contactes">
            <div className="tel">

              <img src={tel} alt="" />

              <div className="num"><p>+227 01 02 03 04 05</p></div>


            </div>
            <div className="email">
              <img src={email} alt="" />

              <div className="eml"><p>imala.holding@gmail.com</p></div>
            </div>
          </div>
          <div className="adress">
            <img src={adress} alt="" />
            <div className="adrs">
              <p>Adresse à Paris 57 rue Pajol 75018 Paris</p>
              <p>Adresse à Dakar Golf Sud Dakar Sénégal </p>
            </div>

          </div>
        </div>



      </div>
      <Map />

    </main>
  )
}
