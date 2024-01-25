import React from 'react'
import { Link } from "react-router-dom";

export default function Services() {
  return (
<section className='section_services_conciergerie' id="section_services_conciergerie">
       
       <div className='section_titre_conciergerie'>
             <h2>Nos Services</h2>
      <p>Découvrez nos services et laissez-vous surprendre par la qualité et la diversité de l'offre
         que nous avons soigneusement élaborée pour répondre à toutes vos demandes.
          Notre conciergerie est votre partenaire privilégié pour faciliter votre quotidien, avec une attention toute particulière portée à l'excellence et à la personnalisation de l'expérience. 
          Que vous cherchiez à organiser vos déplacements, à gérer les tâches ménagères ou à planifier vos voyages, nous sommes ici pour transformer vos besoins en réalité avec efficacité et discrétion. 
        </p>
         <Link to="service">Voir plus  </Link>
      </div>

      <div className='services_contenu_conciergerie'>
        {/*card nettoyage*/}
            <div className='card_services' id="card_nettoyage" >
                <div className="card_services_contenu">
                <h4>Nettoyage</h4>
                <form method='get' action="/service/nettoyage">
                    <button type='submit'> Voir plus</button>
                </form>
                </div>
            </div>
{/*card garderie*/}
            <div className='card_services' id="card_garderie" >
                <div className="card_services_contenu">
                <h4>Garderie</h4>
                <form method='get' action="/service/garderie">
                    <button type='submit'> Voir plus</button>
                </form>
                </div>   
            </div>
{/*card guide touristique*/}
            <div className='card_services' id="card_guidetour" >
                <div className="card_services_contenu">
                <h4>Guide <br/>Touristique</h4>
                <form method='get' action="/service/guidetouristique">
                    <button type='submit'> Voir plus</button>
                </form>
                </div>   
            </div>
{/*card transport*/}
            <div className='card_services' id="card_transport" >
                <div className="card_services_contenu">
                <h4>Transport</h4>
                <form method='get' action="/service/transport">
                    <button type='submit'> Voir plus</button>
                </form>
                </div>   
            </div>

        {/*card traiteur*/}

        <div className='card_services' id="card_traiteur" >
                <div className="card_services_contenu">
                <h4>Traiteur</h4>
                <form method='get' action="/service/traiteur">
                    <button type='submit'> Voir plus</button>
                </form>
                </div>   
        </div>

 {/*card loisirs */}
 <div className='card_services' id="card_loisirs" >
                <div className="card_services_contenu">
                <h4>Loisirs</h4>
                <form method='get' action="/service/loisirs">
                    <button type='submit'> Voir plus</button>
                </form>
                </div>   
        </div>

</div>
</section>
  )
}