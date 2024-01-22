import React from 'react'
import img from '../../../../assets/appartement1.jpg'
import { Icon } from '@mdi/react';


export default function GalerieAccueil() {
  return (

    <section className='galerie_airbnb_accueil'>

     {/*card contenue airbnb */ }

<div className="card_airbnb_accueil">
      <h3>Dakar , Senegal</h3>
   
   <div className="card_airbnb_accueil_img">
     <img src={img} alt="salon" />
   </div>
   
   <div className="card_airbnb_accueil_footer">
       <p> <span>250€</span> / mois</p>
       <Icon icon="mdi:heart-outline" color="gray" width="30" height="30" />
   </div>
   
</div>
   
    {/* */ }

     {/*card contenue airbnb */ }

     <div className="card_airbnb_accueil">
      <h3>Dakar , Senegal</h3>
   
   <div className="card_airbnb_accueil_img">
     <img src={img} alt="salon" />
   </div>
   
   <div className="card_airbnb_accueil_footer">
       <p> <span>250€</span> / mois</p>
       <Icon icon="mdi:heart-outline" color="gray" width="30" height="30" />
   </div>
   
</div>
   
    {/* */ }
   
        {/*card contenue airbnb */ }

<div className="card_airbnb_accueil">
      <h3>Dakar , Senegal</h3>
   
   <div className="card_airbnb_accueil_img">
     <img src={img} alt="salon" />
   </div>
   
   <div className="card_airbnb_accueil_footer">
       <p> <span>250€</span> / mois</p>
       <Icon icon="mdi:heart-outline" color="gray" width="30" height="30" />
   </div>
   
</div>
   
    {/* */ }

        {/*card contenue airbnb */ }

<div className="card_airbnb_accueil">
      <h3>Dakar , Senegal</h3>
   
   <div className="card_airbnb_accueil_img">
     <img src={img} alt="salon" />
   </div>
   
   <div className="card_airbnb_accueil_footer">
       <p> <span>250€</span> / mois</p>
       <Icon icon="mdi:heart-outline" color="gray" width="30" height="30" />
   </div>
   
</div>
   
    {/* */ }
   
    </section>
  )
}