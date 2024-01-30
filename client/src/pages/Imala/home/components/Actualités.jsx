// Actualite.js
import React, { useState, useEffect } from "react";
import "./Actualités.css"; 


export default function Actualite() {
  const [currentIndexActu, setCurrentIndexActu] = useState(0);
  const actualites = [
    {
      title: "New projet",
      content: "La Construction en Terre Compressée (CTC) émerge comme une solution novatrice et durable dans le BTP africain. Utilisant la terre locale, cette méthode économique et écologique réduit l'empreinte carbone, tout en offrant une excellente isolation thermique. Favorisant le développement local, la CTC s'impose comme une réponse pratique et responsable pour une construction respectueuse de l'environnement sur le continent africain.",
      image: null,
    },
    {
      title: "Développement du pays hotes",
      content: "La Construction en Terre Compressée (CTC) émerge comme une solution novatrice et durable dans le BTP africain. Utilisant la terre locale, cette méthode économique et écologique réduit l'empreinte carbone, tout en offrant une excellente isolation thermique. Favorisant le développement local, la CTC s'impose comme une réponse pratique et responsable pour une construction respectueuse de l'environnement sur le continent africain.",
      image: null, // Si vous ne voulez pas afficher d'image pour cette actualité
    },
    {
      title: "Matériaux innovant",
      content: "La Construction en Terre Compressée (CTC) émerge comme une solution novatrice et durable dans le BTP africain. Utilisant la terre locale, cette méthode économique et écologique réduit l'empreinte carbone, tout en offrant une excellente isolation thermique. Favorisant le développement local, la CTC s'impose comme une réponse pratique et responsable pour une construction respectueuse de l'environnement sur le continent africain.",
      image: null,
    },
  ];

  const nextActualite = () => {
    setCurrentIndexActu((prevIndex) => (prevIndex + 1) % actualites.length);
  };

  const prevActualite = () => {
    setCurrentIndexActu(
      (prevIndex) => (prevIndex - 1 + actualites.length) % actualites.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextActualite();
    }, 5000); // Défilement automatique toutes les 5 secondes, ajustez selon vos besoins

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
    <section className="actualite">
      <h2 className="da">Dernières Actualités</h2>
      <div className="carrousel">
        {actualites.map((actualite, index) => (
          <div
            key={index}
            className={`actualite-item ${
              index === currentIndexActu ? "visible" : ""
            }`}
          >
            <h3>{actualite.title}</h3>

            {actualite.image && (
              <img
                src={actualite.image}
                alt={`Image pour ${actualite.title}`}
                className="small-image" // Assurez-vous que la classe small-image est définie dans votre CSS
              />
            )}

            {actualite.content && (
              <p >{actualite.content}</p>
              
              
            )}

            {/* Boutons de contrôle à l'intérieur du carrousel */}
            <div className="controls">
              <button  onClick={prevActualite} className="btnActu">&lt;</button>
              <button onClick={nextActualite }className="btnActu" >&gt;</button>
            </div>
          </div>
        ))}
      </div>
    </section></div>
  );
}


