import React, { useState, useEffect } from 'react';

export default function Avis() {
  const [currentAvis, setCurrentAvis] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvis((prev) => (prev === avis.length - 1 ? 0 : prev + 1));
    }, 5000); // Changez cette valeur pour ajuster l'intervalle de défilement automatique
    return () => clearInterval(interval);
  }, [currentAvis]);

  const avis = [
    {
      id: 1,
      nomclient : "Jean",
      avisclient:"ceci est un avis 1 .",
      avisdate:"20 février 2024",
    },
    {
      id: 2,
      nomclient : "Marina",
      avisclient:"ceci est un avis 2 .",
      avisdate:"20 février 2024",},
    {
      id: 3,
      nomclient : "Jean",
      avisclient:"ceci est un avis 3 .",
      avisdate:"20 février 2024",  },
  ]
  return (
    <section className='section_avis'>
      <h2>Nos Avis </h2>
      <div className='avis_contenu'>
        <h4>{avis[currentAvis].nomclient}</h4>
        <p>{avis[currentAvis].avisclient}</p>
        <span> {avis[currentAvis].avisdate}</span>
      </div>
    </section>
  );
}
