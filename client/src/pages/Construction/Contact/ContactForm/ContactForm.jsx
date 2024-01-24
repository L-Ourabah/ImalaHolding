import React from 'react'

function ContactForm() {
  return (
    <div className='contact-form-container'>
      <h2>Contactez-nous</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dignissimos atque aperiam inventore delectus quam vel consectetur? Odit, exercitationem nobis vel eveniet iure rem officiis dolores earum optio fugit esse!</p>
      <form>
        <div className='name-container'>
          <div className='input-container'>
            <label for='lastname'>Nom:</label>
            <input type='text' id='lastname' name='lastname' required/>
          </div>
          <div className='input-container'>
            <label for='firstname'>Prénom:</label>
            <input type='text' id='firstname' name='firstname' required/>
          </div>
        </div>
        <div className='input-container'>
          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' required/>
        </div>
        <div className='input-container'>
          <label for='subject'>Sujet:</label>
          <select name='subject' id='subject' required>
            <option value=''>-- Choisissez un sujet --</option>
            <option value='selling'>Question concernant une vente</option>
            <option value='buying'>Question concernant un achat terrain</option>
            <option value='others'>Autres</option>
          </select>
        </div>
        <div className='input-container'>
          <label for='message'>Message:</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div className='input-container submit-container'>
          <input type='submit' value='Envoyer' />
        </div>
        
      </form>
    </div>
  )
}

export default ContactForm