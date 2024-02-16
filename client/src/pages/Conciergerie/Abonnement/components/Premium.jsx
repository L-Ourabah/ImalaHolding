import React, { useState } from "react";

import { Fade } from "react-swift-reveal";

export default function Premium() {
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
    case "avantagePremium":
      setTitreAffiche("Les avantages de Imala Premium");
      setTexteAffiche(`En tant que membre Premium, vous bénéficierez d'un accès
      prioritaire à nos concierges experts, disponibles 24h/24 et 7j/7
      pour répondre à vos demandes les plus exigeantes. Notre réseau
      exclusif de partenaires nous permet de vous ouvrir les portes de
      l'exceptionnel, qu'il s'agisse de réservations dans des
      établissements prisés, d'accès à des événements très convoités ou
      de la création d'expériences uniques qui dépassent l'ordinaire.`);
      break;
    case "comparaisonPremium":
       setTitreAffiche("Choisir Imala Premium");
      setTexteAffiche(`Avec notre offre Premium, attendez-vous à un niveau de service
      inégalé où chaque détail est soigneusement orchestré pour enrichir
      votre vie quotidienne et vos voyages d'une touche de luxe et de
      confort. Laissez-nous transformer l'ordinaire en extraordinaire et
      faire de chaque moment une occasion mémorable. Découvrez le luxe
      de la simplicité et l'art de vivre avec notre offre Premium.`);
      break;
    default:
       setTitreAffiche("");
      setTexteAffiche("");
      break;
  }
};
  return (
    <Fade>
      <section className="section_imala_premium">
        <div className="abo_contenu">
          <div className="abo_img">
            <div className="abo_square" id="imalaPremium" onClick={toggleAboTxtVisibility}>
              Imala Premium
            </div>
          </div>
          {isAboTxtVisible && (
          <div className="abo_txt">
            
            <p>
              Nous sommes ravis de vous présenter notre offre Premium, conçue
              pour ceux qui exigent le meilleur de la conciergerie. Notre
              service Premium est l'expression ultime de notre engagement envers
              l'excellence, offrant une expérience sur mesure et hautement
              personnalisée.</p>
{/* question */}
            <select value={selectedSujet} onChange= {handleSujetChange} id="select_imala_premium">
           <option value="" disabled> -- Sélectionner un sujet</option>
           <option value="avantagePremium">Quels sont les avantages de l'offre Imala Premium ?</option>
           <option value="comparaisonPremium">Quelle est la distinction de l'offre Imala Premium ?</option>
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
