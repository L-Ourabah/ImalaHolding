import React from 'react'

function ModeDePaiement() {
  return (
    <div className='paiement-mode-container'>
      <h1>Mode de paiement</h1>
      <form action='' method='post' className='paiement-mode-wrapper'>
        <div className='paiement-credit-card'>
          <div className='paiment-credit-card-title paiement-margin'>
            <label for='credit-card'>Carte bancaire
              <input type='radio' name='paiement' id='credit-card'/>
            </label>
          </div>
          <div className='paiement-client-informations '>
            <div className='paiement-personnal-informations paiement-margin'>
              <p className='paiement-bold-text'>Adresse de facturation :</p>
              <p className='paiement-bold-text'>Jean DUPONT</p>
              <p>1 rue de la Paix</p>
              <p>75002, PARIS</p>
            </div>
            <hr />
            <div className='paiement-card-informations paiement-margin'>
              <h3>Entrez vos informations bancaires</h3>
              <form>
                <div className='card-number-container'>
                  <label for='card-number'>Numéro de carte</label>
                  <input 
                    type='text'
                    id='card-number'
                    name='card-number'
                    onKeyDown={(event) => {
                      if (!/[0-9]||[\u0008]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    required
                  />
                </div>

                <div className='card-owner-container'>
                  <label for='card-owner'>Titulaire de la carte</label>
                  <input 
                    type='text'
                    id='card-owner'
                    name='card-owner'
                    onKeyDown={(event) => {
                      if (!/^[A-Za-z]+$/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    required
                  />
                </div>
  
                <div className='card-expiration-cryptogram'>

                  <div>
                    <label for='card-expiration'>Date d'expiration</label>
                    <input 
                      type='text'
                      id='card-expiration'
                      name='card-expiration'
                      onKeyDown={(event) => {
                        if (!/[0-9]||[u+0008]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label for='card-cryptogram'>Cryptogramme</label>
                    <input 
                      type='text'
                      id='card-cryptogram'
                      name='card-cryptogram'
                      onkeydown="/[0-9]/i.test(event.key)"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='credit-card-valid paiement-margin'>
            <p>Carte bancaire acceptées :</p>
            
          </div>
        </div>
        <div className='paiement-paypal-title paiement-margin'>
          <label for='paypal'>Paypal
            <input type='radio' name='paiement' id='paypal'/>
            <span></span>
          </label>
        </div>
      </form>
    </div>
  )
}

export default ModeDePaiement