import React, { useState, useEffect } from 'react';
import { Fade } from "react-swift-reveal";

export default function Avis() {
  const [currentAvis, setCurrentAvis] = useState(0);
//permet de changer contenu
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
      avisclient:`Mon concierge était efficace et discret. Il a géré toutes mes demandes avec
professionnalisme et a toujours été disponible lorsque j'avais de lui. J'ai vraiment besoin
apprécié son aide pour organiser mon voyage et je recommande vivement cette conciergerie
à tout le monde.`,
      avisdate:"20 mars 2024",
    },
    {
      id: 2,
      nomclient : "Sophie",
      avisclient:`La conciergerie a su anticiper mes besoins et m'a permis de profiter pleinement de mon
      séjour sans avoir à me soucier de rien. Le service était excellent et j'ai été surpris par la
      quantité de services qu'ils offrent. Je recommande vivement cette conciergerie à tous mes
      amis.`,
      avisdate:"10 février 2024",},
    {
      id: 3,
      nomclient : "Paul",
      avisclient:`J'ai eu l'occasion de tester le service de transport de cette conciergerie lors d'un voyage
      d'affaires. Le conducteur était courtois, professionnel et à pris grand soin de moi. J'ai
      vraiment apprécié la commodité et la tranquillité que ce service a contribué à mon voyage. Je
      serais ravi de recommencer.`,
      avisdate:"24 février 2024",  },
  ]
  return (
    <section className='section_avis'>
      <Fade>
      <h2>Nos Avis </h2>
      <div className='avis_contenu'>
        <h4>{avis[currentAvis].nomclient}</h4>
        <p>{avis[currentAvis].avisclient}</p>
        <span> {avis[currentAvis].avisdate}</span>
      </div>
      </Fade>
    </section>
  );
}
