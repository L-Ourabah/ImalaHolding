import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './FormConnexion.css';


export default function FormAirbnbInscription() {
   
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const connecterForm = () => {
        const newErrors = {};

        

        // Valider l'email avec une regex plus complexe
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "L'adresse email n'est pas valide";
        }

        // Valider le mot de passe avec des critères de complexité
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,}$/;
        if (!passwordRegex.test(motDePasse)) {
            newErrors.motDePasse = 'Le mot de passe doit contenir au moins 10 caractères, dont au moins une majuscule, une minuscule, un chiffre, et un caractère spécial';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleGoogleSignIn = () => {
        console.log('Connecté via Google');
    };

    const handleFacebookSignIn = () => {
        console.log('Connecté via Facebook');
    };

    const handleAppleSignIn = () => {
        console.log('Connecté via Apple');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (connecterForm()) {
            console.log('Formulaire soumis :', { email, motDePasse });
        } else {
            console.log('Le formulaire contient des erreurs');
        }
    };

    return (
        <div className='connexion-container'>
            {/* Formulaire de connexion */}
            <h2>CONNEXION</h2>
            <form className="form-connexion" onSubmit={handleFormSubmit}>
            

             

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div>
                    <label>Mot de passe:</label>
                    <div className="password-input">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Mot de passe"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                        />
                        {errors.motDePasse && <span className="error">{errors.motDePasse}</span>}
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                </div>
 <div className="Connecter-pas">
                <div className="btnConnecter">
                    <button className='btnConnecter' type="submit">Se connecter</button>
                </div>

                {/* Boutons d'inscription */}
                <div className="btnInscription">
                    <p className='vnm'>Vous n'êtes pas membre ?</p>
                    <p className='inscri'><Link to='/inscription'>M'inscrire</Link></p>
                </div>
            </div>


            </form>
           

            {/* Options de connexion */}
            <div className="btn-option">
                <p >S'inscrire avec les options suivantes</p>
                <div className="option">
                    {/* Bouton Google avec icône */}
                    <button className="btn1" onClick={handleGoogleSignIn}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>

                    {/* Bouton Facebook avec icône */}
                    <button className="btn2" onClick={handleFacebookSignIn}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>

                    {/* Bouton Apple avec icône */}
                    <button className="btn3" onClick={handleAppleSignIn}>
                        <FontAwesomeIcon icon={faApple} />
                    </button>
                </div>
            </div>
        </div>
    );
}