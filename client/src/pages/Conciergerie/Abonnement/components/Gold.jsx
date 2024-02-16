import React, { useState } from "react";
import { Fade } from "react-swift-reveal";

export default function Gold() {
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
      case "avantageGold":
        setTitreAffiche("Les avantages de Imala Gold");
        setTexteAffiche(`L'offre Imala Gold vous donne accès à un univers de services exclusifs et sur mesure, où vos désirs sont anticipés et comblés avec un haut niveau de personnalisation. Vous bénéficierez d'un accès illimité à des concierges dédiés, experts et dotés d'un réseau étendu pour répondre à vos besoins les plus exigeants.`);
        break;
      case "comparaisonGold":
         setTitreAffiche("Choisir Imala Gold");
        setTexteAffiche(`L'offre Imala Gold se distingue par son luxe, son confort et sa réactivité. Elle offre des réservations prioritaires dans des restaurants renommés, l'organisation d'événements privés et l'accès à des expériences uniques. Elle transforme votre quotidien en une succession de moments privilégiés et mémorables.`);
        break;
        case "autreGold":
          setTitreAffiche("Le + de la formule Imala Gold");
         setTexteAffiche(`Le plus de l'offre Imala Gold réside dans les avantages et privilèges spéciaux qu'elle offre à ses membres. Vous aurez accès à des invitations exclusives à des événements VIP, des expériences de voyage haut de gamme et des offres partenaires soigneusement sélectionnées pour répondre à vos standards d'excellence. Rejoignez le cercle Gold d'Imala et laissez-vous choyer par des moments d'exception.`);
         break;
      default:
         setTitreAffiche("");
        setTexteAffiche("");
        break;
    }
  };
  return (
    <Fade>
<section className='section_imala_golden'>
 <div className='abo_contenu'>
        <div className='abo_img'> 
            <div className='abo_square' id="imalaGolden" onClick={toggleAboTxtVisibility}>
            Imala Gold
            </div>
        </div>
        {isAboTxtVisible && (
        <div className="abo_txt">
        
        <p>Nous sommes enchantés de vous dévoiler notre offre Gold, la quintessence de notre savoir-faire, pour ceux qui attendent le meilleur en matière de services de conciergerie. 
         </p>
         <br/>
         {/* question */}
         <select value={selectedSujet} onChange= {handleSujetChange} id="select_imala_gold">
           <option value="" disabled> -- Sélectionner un sujet</option>
           <option value="avantageGold"> Quels sont les avantages de l'offre Imala Gold ?</option>
           <option value="comparaisonGold">Quelle est la distinction de l'offre Imala Gold ?</option>
           <option value="autreGold">Quel est le plus de l'offre Imala Gold ?</option>
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
  )
}
