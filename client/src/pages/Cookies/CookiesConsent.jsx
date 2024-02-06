import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';
/*
import { useTranslation } from 'react-i18next';
  const { t } = useTranslation();*/

  

   
  


const CookieConsent = () => {
  // État pour suivre si l'utilisateur a accepté les cookies
  const [cookieAccepted, setCookieAccepted] = useState(false);

  // Effet qui se déclenche lorsque le composant est monté
  useEffect(() => {
    // Message de journalisation indiquant que le composant CookieConsent est monté
    console.log("Le composant CookieConsent est monté.");

    // Vérification si l'utilisateur a déjà accepté les cookies dans le localStorage
    const isCookieAccepted = localStorage.getItem('cookieAccepted');
    console.log("Vérification du cookieAccepted dans le localStorage:", isCookieAccepted);

    // Mise à jour de l'état si l'utilisateur a déjà accepté les cookies
    if (isCookieAccepted) {
      setCookieAccepted(true);
    }
  }, []);

  // Gestionnaire de clic pour accepter les cookies
  const handleAccept = () => {
    // Message de journalisation indiquant que l'utilisateur a accepté les cookies
    console.log("L'utilisateur a accepté les cookies.");

    // Enregistrement de la décision de l'utilisateur dans le localStorage
    localStorage.setItem('cookieAccepted', true);

    // Mise à jour de l'état pour refléter l'acceptation des cookies
    setCookieAccepted(true);

    // Affichage du contenu actuel du localStorage dans la console
    console.log("Contenu actuel du localStorage:", JSON.stringify(localStorage, null, 2));
  };

  // Gestionnaire de clic pour refuser les cookies
  const handleReject = () => {
    // Message de journalisation indiquant que l'utilisateur a refusé les cookies
    console.log("L'utilisateur a refusé le suivi des cookies.");

    // Alerte l'utilisateur pour informer du refus des cookies
    alert("Vous avez refusé le suivi des cookies.");
  };

  // Si les cookies sont acceptés, le composant CookieConsent ne sera pas affiché
  if (cookieAccepted) {
    console.log("Les cookies sont acceptés. Le composant CookieConsent ne sera pas affiché.");
    return null;
  }

  // Rendu du composant CookieConsent
  return (
    <div className="cookie-consent">
      <p>Ce site utilise des cookies. Acceptez-vous le suivi des cookies ?</p>
      <button onClick={handleAccept}>Accepter</button>
      <button onClick={handleReject}>Refuser</button>
      <Link to="/PolitiqueConfidentialite">
        <button>Voir la Politique de Confidentialité</button>
      </Link>
    </div>
  );
};

// Export du composant CookieConsent
export default CookieConsent;