import React from "react";
import { Link } from 'react-router-dom';
import Devisfd from "../../../media/images/Devisfd.jpg";
import "./Devis.css";



export default function Devis() {
    return (
        <main className="main_Devis">
            <div className=" Devis" >
                <h1>DEVIS</h1>
                <img src={Devisfd} alt="" />
            </div>

            <section className="titleDevis">


                <h2>Nos Devis</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    perspiciatis consequuntur esse nobis. Fugiat assumenda, consectetur
                    ipsam officia aliquam dicta recusandae enim quasi laboriosam
                    aspernatur nam possimus. Odit, necessitatibus ipsum!
                </p>

            </section>

            <section className="nosDevis">



                <div className='title_devis'>
                    <h2>Nos Devis</h2>

                </div>

                <div className="secteurDevis">
                    .
                    <div className="secteur_card" id="villa">
                        <h3>Devis pour une villa</h3>
                        <button><Link to="/Location">Voir plus</Link></button>

                    </div>

                    <div className="secteur_card" id="immeuble">
                        <h3>Devis pour un immeuble</h3>
                        <button><Link to="/Location">Voir plus</Link></button>
                    </div>


                    <div className="secteur_card" id="enclos">
                        <h3>Devis pour un enclos</h3>
                        <button><Link to="/Location">Voir plus</Link></button>



                    </div>


                    <div className="secteur_card" id="plan">
                        <h3>Devis pour un plan</h3>
                        <button><Link to="/Location">Voir plus</Link></button>
                    </div>


                </div>
            </section>

            <section className="realDevis" >

                <h2>Realisation d'un devis</h2>

                <div className="realContenu">

                    <div className="rela1">
                    <img src={Devisfd} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta nihil corrupti labore laborum explicabo error iusto incidunt consequatur, aliquam fugit pariatur, unde rem officia debitis quisquam ut tempora deserunt.</p>
                    </div>


                    <div className="rela2">
                    <img src={Devisfd} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta nihil corrupti labore laborum explicabo error iusto incidunt consequatur, aliquam fugit pariatur, unde rem officia debitis quisquam ut tempora deserunt.</p>
                    </div>


                    <div className="rela3">
                    <img src={Devisfd} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta nihil corrupti labore laborum explicabo error iusto incidunt consequatur, aliquam fugit pariatur, unde rem officia debitis quisquam ut tempora deserunt.</p>
                    </div>

                </div>


            </section>



        </main>
    );
}