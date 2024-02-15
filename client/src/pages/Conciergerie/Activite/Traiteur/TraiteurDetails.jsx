import React from "react";
import "../Activite.css";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../../../components/NavBars/NavbarConciergerie';
import { Icon } from "@iconify/react";
import traiteurData from "./TraiteurData"; // Importe les données d'activité depuis le fichier NettoyageData.js
import GalerieDetails from "../../../Conciergerie/Activite/componentsG/GalerieDetails";
console.log("Activites", traiteurData);

export default function TraiteurDetails() {
  const { id } = useParams(); // Récupère le paramètre d'URL
  console.log("Activity ID:", id);

  const selectedActivity = traiteurData.find(
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
           
            <Link to="../ServiceConciergerie/traiteur">Retour</Link>
            <h2>{selectedActivity.title}</h2>
          </div>

          <div className="contenu_activite_details">
            <div className="img_activite_details">
              <img src={selectedActivity.image} alt={selectedActivity.title} />
            </div>
            <div className="txt_activite_details">
              <h3>Description:</h3>
              <p>{selectedActivity.description}</p>
              <h3>Tarif :</h3>
              <Icon icon="f7:person-2-fill"  height="50" />
              <p>{selectedActivity.tarif1}</p>
              <br />
             <p>{selectedActivity.tarif2}</p>
              <br />
            
              <p>{selectedActivity.tarif3}</p>
              <br />
              <p>{selectedActivity.tarif4}</p>
              <br />
              <p>{selectedActivity.tarif5}</p>
              <br/>
              <h3>Pour plus d'information : </h3>
             <p>Veuillez appeler ou consulter le formulaire de contact </p>
             <br/>
             <Link to="../contact">Contact</Link>
             <br/>
            </div>
          </div>
        </div>

       {/* I la galerie */}
       <GalerieDetails images={selectedActivity.images} />

      </main>
    </>
  );
}
