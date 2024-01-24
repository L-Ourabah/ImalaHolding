
import React from 'react';
import { Link } from 'react-router-dom';
import './PolitiqueConfidentialite.css';
import Privacyfd from "../../media/images/cookiesfd.jpg";
//import { useTranslation } from 'react-i18next';

export default function PolitiqueConfidentialite() {
  //const { t } = useTranslation();


  return (
    <main className="main_privacy">

      <div className="Contact ">
        <h1>CONFIDENTIALITE</h1>
        <img src={Privacyfd} alt="" />
      </div>

      <div className="politique-confidentialite">

        <section>
          <h2>1. ("Collecte d'Informations")</h2>
          <p>Nous collectons différentes informations, y compris des données personnelles, lorsque vous utilisez notre site. Ces informations peuvent inclure votre nom, adresse e-mail, informations de paiement, etc. Nous les collectons de manière légale et transparente.</p>
        </section>

        <section>
          <h2>2. Utilisation des Informations</h2>
          <p>Nous utilisons les informations collectées pour fournir des services personnalisés, améliorer notre site, communiquer avec vous, traiter les transactions, et répondre à vos demandes. Nous ne partageons pas ces informations avec des tiers sans votre consentement, sauf lorsque cela est nécessaire pour fournir les services demandés ou exigé par la loi.</p>
        </section>

        <section>
          <h2>3. Cookies et Technologies Similaires</h2>
          <p>Notre site utilise des cookies et d'autres technologies similaires pour améliorer l'expérience de l'utilisateur, analyser le trafic du site et personnaliser le contenu. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.</p>
        </section>

        <section>
          <h2>4. Protection des Informations</h2>
          <p>Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations contre tout accès non autorisé, divulgation, altération ou destruction. Cela inclut un stockage sécurisé des informations, l'accès limité aux employés, et l'utilisation de protocoles de sécurité.</p>
        </section>

        <section>
          <h2>5. Partage d'Informations</h2>
          <p>Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers sans votre consentement. Cependant, nous pouvons partager vos informations avec des partenaires de confiance qui nous aident à exploiter notre site et à fournir des services, sous réserve de la confidentialité.</p>
        </section>

        <section>
          <h2>6. Durée de Conservation des Données</h2>
          <p>Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir les services demandés ou aussi longtemps que requis par les lois et réglementations applicables. Si vous souhaitez que nous supprimions vos informations, veuillez nous contacter à [votre@email.com].</p>
        </section>

        <section>
          <h2>7. Droits des Utilisateurs</h2>
          <p>Vous avez le droit d'accéder, de rectifier, de supprimer ou de limiter le traitement de vos informations personnelles. Pour exercer ces droits, veuillez nous contacter à [votre@email.com].</p>
        </section>

        <section>
          <h2>8. Modifications de la Politique de Confidentialité</h2>
          <p>Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Toutes les modifications seront publiées sur cette page avec la date de la dernière mise à jour.</p>
        </section>

        <section>
          <h2>9. Nous Contacter</h2>
          <p>Si vous avez des questions concernant notre politique de confidentialité, veuillez nous contacter à [votre@email.com].</p>
        </section>

        <section>
          <h2><Link to="/">Retour à l'accueil</Link></h2>
        </section>

      </div>
    </main>
  );
};