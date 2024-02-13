import React from "react";
import "../Activite.css";
import GalerieDetails from "../componentsG/GalerieDetails";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import transportData from "./TransportData"; // Importe les données d'activité depuis le fichier TransportData.js
import Navbar from "../../../../components/NavBars/NavbarConciergerie";

export default function TransportDetails() {
  const { id } = useParams();
  const selectedActivity = transportData.find((item) => item.id === parseInt(id, 10));

  if (!selectedActivity) {
    return <div>Activité non trouvée</div>;
  }

  return (
    <>
      <Navbar />
      <header className="header_activite">
        <h1>{selectedActivity.title}</h1>
        <img src={selectedActivity.image} alt={selectedActivity.title} />
      </header>

      <main>
        <div className="main_activite_details">
          <div className="titre_activite_details">
            <Link to="../ServiceConciergerie/transport">Retour</Link>
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
              <Icon icon="healthicons:truck-driver" height="50" />
              <p>{selectedActivity.tarif1}</p>
              <br />
              <Icon icon="f7:car-fill" height="50" />
              <p>{selectedActivity.tarif2}</p>
              <br />
              <p>{selectedActivity.tarif3}</p>
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
