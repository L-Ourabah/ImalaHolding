// ContactForm.js
import React, { useState } from "react";
import "./ContactFormDevis.css";

// Composant de formulaire de contact
const ContactForm = () => {
    // État local pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        sujet: "",
        message: "",
    });

    // Fonction de gestion des changements d'entrée dans le formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour envoyer le formulaire (backend, 02Switch, API, etc.)
        console.log("Formulaire soumis avec les données :", formData);
    };

    // Rendu du composant
    return (

        <div className="information-devis">

            <h2>DEMANDE D'INFORMATION</h2>
        <div className="contact-form-container-devis">
            {/* Formulaire */}
            <form className="form" onSubmit={handleSubmit}>
                {/* Nom et prénom groupés dans une div */}
                <div className="form-nom">
                    {/* Champ Nom */}
                    <div className="form-group">
                        <label htmlFor="nom">Nom :</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Champ Prénom */}
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom :</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Champ Email */}
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Sujet */}
                <div className="form-group">
                    <label htmlFor="sujet">Type de devis:</label>
                    <input
                        type="text"
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Champ Message */}
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Bouton d'envoi du formulaire */}
                <div className="form-group-button">
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </div></div>
    );
};

export default ContactForm;

