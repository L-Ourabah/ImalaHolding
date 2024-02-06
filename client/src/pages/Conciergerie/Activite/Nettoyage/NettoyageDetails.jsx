import React from "react";
import "../Activite.css";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import nettoyageData from "./NettoyageData"; // Importe les données d'activité depuis le fichier NettoyageData.js
import Navbar from "../../../../components/NavBars/NavbarConciergerie";
console.log("Activites", nettoyageData);

export default function NettoyageDetails() {
  const { id } = useParams(); // Récupère le paramètre d'URL
  console.log("Activity ID:", id);

  const selectedActivity = nettoyageData.find(
    (item) => item.id === parseInt(id, 10)
  ); // Trouve l'activité correspondante en utilisant l'identifiant
  console.log("Selected activity ID:", selectedActivity);
  if (!selectedActivity) {
    return <div>Activité non trouvée</div>; // Affiche un message d'erreur si l'activité n'est pas trouvée
  }

  return (
    <>
    <Navbar/>
      <header className="header_activite">
        <h1>{selectedActivity.title}</h1>
        <img src={selectedActivity.image} alt={selectedActivity.title} />
      </header>

      <main>
        <div className="main_activite_details">
          <div className="titre_activite_details">
      
            <Link to="../ServiceConciergerie/nettoyage">Retour</Link>
            <h2>{selectedActivity.title}</h2>
          </div>

          <div className="contenu_activite_details">
            <div className="img_activite_details">
              <img src={selectedActivity.image} alt={selectedActivity.title} />
            </div>
            <div className="txt_activite_details">
              <h3>Description:</h3>
              <p>{selectedActivity.description}</p>
              <h3>Contact : </h3>
              <p>voici les contact</p>
              {/*<h3>Réseaux :</h3>
            <div className="icon_activite_details">
              <span><Icon icon="line-md:facebook" /></span>
              <span> <Icon icon="line-md:instagram" /></span>
              <span><Icon icon="line-md:twitter-x" /></span>
  </div>*/}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
