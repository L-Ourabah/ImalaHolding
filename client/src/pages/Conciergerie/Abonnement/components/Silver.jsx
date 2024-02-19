import React, { useState } from "react";

import { Fade } from "react-swift-reveal";

export default function Silver() {
  const [selectedSujet, setSelectedSujet] = useState('');
  const [titreAffiche, setTitreAffiche] = useState('');
  const [texteAffiche, setTexteAffiche] = useState('');
  //afficher contenu abo_txt
  const [isAboTxtVisible, setIsAboTxtVisible] = useState(false);

  const toggleAboTxtVisibility = () => {
    setIsAboTxtVisible(!isAboTxtVisible);
  };
  const handleSujetChange = (event) => {
    setSelectedSujet(event.target.value);
    // Mettre à jour le texte affiché en fonction de l'option sélectionnée
    switch (event.target.value) {
      case "avantageSilver":
        setTitreAffiche("Les avantages de Imala Silver ");
        setTexteAffiche(`Les avantages principaux de l'offre Silver de conciergerie incluent un accès à une gamme étendue de services essentiels, une équipe dévouée prête à répondre efficacement et discrètement aux besoins des clients, ainsi que la flexibilité nécessaire pour adapter les services au rythme de vie des clients avec des options personnalisables et des tarifs préférentiels négociés.`);
        break;
      case "comparaisonSilver":
         setTitreAffiche("Choisir Imala Silver");
        setTexteAffiche(`L'offre Silver se distingue par son accès à une gamme étendue de services essentiels, une équipe dévouée pour répondre efficacement aux besoins des clients, ainsi que par sa flexibilité permettant d'adapter les services au rythme de vie des clients avec des options personnalisables et des tarifs préférentiels négociés.`);
        break;
        case "autreSilver":
         setTitreAffiche(" Le + de la formule Imala Silver");
        setTexteAffiche(`La formule Silver offre une flexibilité adaptée au rythme de vie des clients en proposant des services personnalisables et des tarifs préférentiels négociés, permettant aux clients d'adapter les services à leurs besoins spécifiques tout en bénéficiant d'un service fiable et attentif pour gagner du temps et réduire leur charge mentale à un prix abordable.`);
        break;
      default:
         setTitreAffiche("");
        setTexteAffiche("");
        break;
    }
  };
  
  return (
    <Fade>
    <section className="section_imala_silver">
      <div className="abo_contenu">
        <div className="abo_img">
          <div className="abo_square" id="imalaSilver" onClick={toggleAboTxtVisibility}>
            Imala Silver
          </div>
        </div>
        {isAboTxtVisible && (
        <div className="abo_txt">
          
          <p>
            Découvrez notre offre Silver, spécialement conçue pour ceux qui
            recherchent un service de conciergerie de qualité à un tarif
            compétitif. Avec l'offre Silver, bénéficiez d'un accès à une gamme
            étendue de services essentiels qui simplifieront votre quotidien.
            </p>
            <br/>
           {/* question */}
           <select value={selectedSujet} onChange= {handleSujetChange} id="select_imala_silver">
           <option value="" disabled> -- Sélectionner un sujet</option>
           <option value="avantageSilver"> Quels sont les avantages de l'offre Imala Silver ?</option>
           <option value="comparaisonSilver">En quoi l'offre Imala Silver  se distingue-t-elle ?</option>
           <option value="autreSilver">Quel est le plus de l'offre Imala Silver ?</option>
         
         </select>
                  {/*reponse */}
     <div className='contenu_reponse_conciergerie'>
        {titreAffiche && <h4>{titreAffiche}</h4>}
       {texteAffiche && <p>{texteAffiche}</p>}
          </div>
        </div>
         )}
      </div>
     
    </section>
    </Fade>
  );
}
