import React from 'react'

export default function Newsletter() {
  return (
<section className='section_newsletter' id="section_newsletter">
      {/* section titre */}
      <div className='newletter_contenu'>
            <div className='section_titre_conciergerie'>
                <h2>Newsletter</h2>
                <p>Inscrivez vous à notre newsletter ! </p>
            </div>
            
           {/* section formulaire */}
            <div className='newsletter_form'>
                <input type="text" placeholder='Ecrivez votre email'/>
                <button>S'abonner</button>
            </div>

      </div>

</section>
  )
}
