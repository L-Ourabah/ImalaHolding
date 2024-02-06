
import React, { useState } from 'react';
export default function FormContact() {
    const [selectedSujet, setSelectedSujet] = useState('');
    const [titreAffiche, setTitreAffiche] = useState('');
    const [texteAffiche, setTexteAffiche] = useState('');

  const handleSujetChange = (event) => {
    setSelectedSujet(event.target.value);
    // Mettre à jour le texte affiché en fonction de l'option sélectionnée
    switch (event.target.value) {
      case "question":
        setTitreAffiche("Vous avez un soucis avec le bien que vous avez loué ?");
        setTexteAffiche("ceci est le texte du bien loue  ");
        break;
      case "feedback":
         setTitreAffiche("Vous avez un feedback ?");
        setTexteAffiche("Texte pour l'option feedback");
        break;
      case "autres":
         setTitreAffiche("Vous avez autres");
        setTexteAffiche("Texte pour l'option autres");
        break;
      default:
         setTitreAffiche("");
        setTexteAffiche("");
        break;
    }
};

  return (
    
    <section className="sctn-contact_airbnb">
      <div className='form_contact_airbnb'>
{/* question */}
<h3> 1 - Comment pouvons-nous aider ? </h3>
         <select value={selectedSujet} onChange= {handleSujetChange}>
           <option value="" disabled> -- Sélectionner un sujet</option>
           <option value="bienlouer"> J'ai des questions concernant un bien que j'ai loué </option>
           <option value="feedback">J'ai des questions concernant un bien que j'ai mis en location </option>
           <option value="autres">Autres</option>
         </select>
         </div>
        
        {/*reponse */}
     <div className='contenu_reponse_airbnb'>
        {titreAffiche && <h4>{titreAffiche}</h4>}
       {texteAffiche && <p>{texteAffiche}</p>}
     </div>
    </section>
  )
}
