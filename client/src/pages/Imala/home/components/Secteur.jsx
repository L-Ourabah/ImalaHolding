import React from 'react'
import { Link } from 'react-router-dom';
import "./Secteur.css"
export default function Secteur() {
    return (

        <section id="secteurs">
            <div className='title_secteur'>
                <h2>Nos Secteurs</h2>
            </div>

            <div className="secteur8">
                <div className="secteur_card" id="habitation">
                    <h3> <Link to="/Location">Habitation</Link></h3>
                </div>

                <div className="secteur_card" id="construction">
                    <h3><Link to="/Construction">Construction</Link></h3>
                </div>

                <div className="secteur_card" id="conciergerie">
                    <h3><Link to="/Conciergerie">Conciergerie</Link></h3>
                </div>
            </div>
        </section>


    )
}