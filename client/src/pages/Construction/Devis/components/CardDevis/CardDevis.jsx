import React from 'react'





export default function CardDevis() {
    return (
        


            <section className="nosDevis">



                <div className='title_devis'>
                    <h2>Nos Devis</h2>

                </div>

                <div className="secteurDevis">
                    .
                    <div className="secteur-card-devis" id="villa">
                        <h3>Devis pour une villa</h3>
                        <button><Link to="/Location">Voir plus</Link></button>

                    </div>

                    <div className="secteur-card-devis" id="immeuble">
                        <h3>Devis pour un immeuble</h3>
                        <button><Link to="/Location">Voir plus</Link></button>
                    </div>


                    <div className="secteur-card-devis" id="enclos">
                        <h3>Devis pour un enclos</h3>
                        <button><Link to="/Location">Voir plus</Link></button>



                    </div>


                    <div className="secteur-card-devis" id="plan">
                        <h3>Devis pour un plan</h3>
                        <button><Link to="/Location">Voir plus</Link></button>
                    </div>


                </div>
            </section>



    )
}
