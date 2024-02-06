import React from 'react'
import { Icon } from '@iconify/react'
export default function CoordoonneeContact() {
  return (
     
    <section className='coordonnes_contact_airbnb'>

    <h3> 2 - Contactez-nous </h3>
{/** coordonnées*/}
    <div className='contenu_contact_airbnb'>

        <div className='card_contact'>
            <h4>Par mail</h4>
            <Icon icon="material-symbols:mail-outline" color="#3864ff" width="100" height="100" />
            <p>Ecrivez-nous à l’adresse suivante:</p>
            <a href=''>imala.support@gmail.com</a>
            <p> Nous vous répondrons dans les plus brefs délais</p>
         </div>

        <div className='card_contact'>
         <h4>Par téléphone</h4>
         <Icon icon="ant-design:phone-outlined" color="#3864ff" width="100" height="100" />
         <p>Ecrivez-nous à l’adresse suivante:</p>
        <a href=''>01.23.45.67.89</a>
        <p>Nous vous répondrons dans les plus brefs délais</p>

        </div>
    
    </div>
{/**texte qui mène au faq  */}
    <div className='txt_contact_airbnb'>
        <p>Jetez un oeil à notre FAQ pour savoir si votre question a déjà été répondu :</p>
        <a href=''>Cliquez ici</a>
    </div>

    </section>
    
  )
}
