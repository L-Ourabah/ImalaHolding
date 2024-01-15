import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './FormInscri.css';


export default function FormAirbnbInscription() {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Valider le prénom
        if (!prenom.trim()) {
            newErrors.prenom = 'Le prénom est requis';
        }

        // Valider le nom
        if (!nom.trim()) {
            newErrors.nom = 'Le nom est requis';
        }

        // Valider la date de naissance
        if (!dateNaissance) {
            newErrors.dateNaissance = 'La date de naissance est requise';
        }

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

        if (validateForm()) {
            console.log('Formulaire soumis :', { prenom, nom, dateNaissance, email, motDePasse });
        } else {
            console.log('Le formulaire contient des erreurs');
        }
    };

    return (
        <div className='inscription-container'>
            {/* Formulaire d'inscription */}
            <h2>INSCRIPTION</h2>
            <form className="form-inscri" onSubmit={handleFormSubmit}>
                {/* Champs du formulaire */}

                <div className="prenom-nom">
                    <div className='prenom'>
                        <label>Prénom:</label>
                        <input
                            type="text"
                            placeholder="Prénom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                        {errors.prenom && <span className="error">{errors.prenom}</span>}
                    </div>

                    <div className='nom'>
                        <label>Nom:</label>
                        <input
                            type="text"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        {errors.nom && <span className="error">{errors.nom}</span>}
                    </div>
                </div>

                <div>
                    <label>Date de Naissance:</label>
                    <input
                        type="date"
                        value={dateNaissance}
                        onChange={(e) => setDateNaissance(e.target.value)}
                    />
                    {errors.dateNaissance && <span className="error">{errors.dateNaissance}</span>}
                </div>

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

 <div className="valider-deja">
                <div className="btnvalider">
                    <button className='btnValider' type="submit">S'inscrire</button>
                </div>

                {/* Boutons d'inscription */}
                <div className="btnInscription">
                    <p className='vdm'>Vous êtes déjà membre ?</p>
                    <p className='cnx'><Link to='/connexion'>Connectez-vous</Link></p>
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


