import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import 'font-awesome/css/font-awesome.min.css';

import imala from '../media/images/logoImala.png'

function Footer() {
    return (
        <footer className="footer-container">






            <div className="logoLien">
                <div className="logoAdress">
                    <div> <Link to="/">
                        <img src={imala} />
                    </Link>
                    </div>

                    <div className="address-section">
                        <div className='adress1'>
                            <i className="fa-solid fa-map-marker"></i>
                            <p>Golf Sud, Dakar, Senegal</p>
                        </div>
                        <div className='adress1'>
                            <i className="fa-solid fa-phone"></i>
                            <p>+33 7 65 89 95 98</p>
                        </div>
                        <div className='adress1'>
                            <i className="fa-solid fa-envelope"></i>
                            <p><a href="mailto:support@company.com">Imala@company.com</a></p>
                        </div>
                    </div>
                </div>


                <div className="links-section">
                   
                    <div className="links-column">
                        <h2><Link to="/">Accueil</Link></h2>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/About">A propos</Link>
                    </div>

                    <div className="links-column">
                        <h2><Link to="/Conciergerie">Conciergerie</Link></h2>
                        <Link to="/ServiceConciergerie">Services</Link>
                        <Link to="/abonnement">Abonnement</Link>
                        <Link to="/loisirs">Loisirs</Link>
                        <Link to="/garderie">Garderie</Link>
                    </div>

                    <div className="links-column">
                        <h2><Link to="/Construction">Construction</Link></h2>
                        <Link to="/services">Services</Link>
                        <Link to="/conception">Conception</Link>
                        <Link to="/materiaux">Materiaux</Link>
                        <Link to="/realisation">Realisation</Link>
                        <Link to="/plan">Plan</Link>
                        <Link to="/devis">Devis</Link>


                    </div>

                    <div className="links-column">
                        <h2><Link to="/airbnb">Location</Link></h2>
                        <Link to="/inscription">Inscritpion</Link>
                        <Link to="/connexion">Connexion</Link>
                        <Link to="/reservation">Reservation</Link>
                        <Link to="/profil">Profil</Link>
                        <Link to="/profilClient">ProfilClient</Link>
                        <Link to="/logements">Logements</Link>
                    </div>

                </div>
                 {/* Liens en haut à droite */}
                <div className="footer-right">
                    <div className="footer-company-about">
                        <h2> <Link to="/about">A propos d'Imala</Link></h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quod eius. Reiciendis adipisci, recusandae labore maxime ipsam cum, iure sequi voluptas molestias amet magnam repudiandae repellendus, libero vitae consequuntur dolor.

                        </p>
                    </div>
                    <div className="footer-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>

            <div className="privacy">

                <div className="privacyReseau">
                    <div className="footer-row">
                        <Link to="/team">Team of service</Link>
                        <hr className='hr2' />
                        <Link to="/PolitiqueConfidentialite">Politique de Confidentialite</Link>
                        <hr className='hr2' />
                        <Link to="/cookies">Cookie policy</Link>
                    </div>

                </div>

                <div className="copyrights">
                    <h4>Copyrights</h4>
                    <p>&copy; 2023 Imala Holding</p>
                </div>
            </div>



        </footer>
    );
}

export default Footer;