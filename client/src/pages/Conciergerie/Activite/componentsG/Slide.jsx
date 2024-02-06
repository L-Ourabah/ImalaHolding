import React, { useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
export default function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

 useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Changez cette valeur pour ajuster l'intervalle de défilement automatique
    return () => clearInterval(interval);
  }, [currentSlide]);

const slides = [
  {
    id: 1,
    title: "Nettoyage",
    description: "Avec notre service de nettoyage de conciergerie, nous nous engageons à maintenir un standard élevé de propreté et de confort, pour que vous puissiez vous concentrer sur l'essentiel.",
    lien: "../ServiceConciergerie/nettoyage",
    image: "https://images.pexels.com/photos/10573242/pexels-photo-10573242.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
   {
     id: 2,
      title: "Garderie",
      description:
        "Plongez dans l'univers de notre garderie, où chaque enfant est accueilli dans un environnement chaleureux et stimulant, favorisant apprentissage, épanouissement et bien-être. Avec une équipe dévouée et des activités adaptées, nous offrons à vos enfants un lieu sûr et joyeux pour grandir et s'épanouir.",
      lien: "../ServiceConciergerie/garderie",
      image: "https://images.pexels.com/photos/8363100/pexels-photo-8363100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    
    },
    {
      id: 3,
      title: "Transport",
      description:
        "Découvrez notre service de transport, où chaque trajet est une occasion de voyager en toute sérénité, confort et élégance. Laissez-nous vous emmener vers votre destination, en vous offrant une expérience de voyage inoubliable à chaque étape du trajet.",
        lien: "../ServiceConciergerie/transport",
      image: "https://images.pexels.com/photos/18189671/pexels-photo-18189671/free-photo-of-ville-route-circulation-gens.jpeg?auto=compress&cs=tinysrgb&w=1600",
     
    },
    {
      id: 4,
      title: "Guide Touristique",
      description:
        "Explorez le Sénégal à travers nos expériences uniques. Imala Conciergerie vous invite à vivre des aventures inoubliables, des découvertes culturelles aux plaisirs de la nature, pour une immersion authentique dans notre magnifique pays.",
        lien: "../ServiceConciergerie/guidetouristique",
      image: "https://images.pexels.com/photos/4856284/pexels-photo-4856284.jpeg?auto=compress&cs=tinysrgb&w=1600",
     
    },
    {
      id: 5,
      title: "Traiteur",
      description:
        "Découvrez une expérience culinaire d'exception avec notre service de traiteur. Chez nous, chaque plat est une œuvre d'art gustative, conçue avec passion et créativité pour éveiller vos sens et ravir vos convives. Laissez-nous sublimer votre événement avec des saveurs exquises et un service attentif qui fera de chaque occasion un moment inoubliable.",
        lien: "../ServiceConciergerie/traiteur",
      image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600",
     
    },
    {
      id: 6,
      title: "Loisirs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        lien: "../ServiceConciergerie/loisirs",
      image: "https://images.pexels.com/photos/18189700/pexels-photo-18189700/free-photo-of-banc-paysage-gens-herbe.jpeg?auto=compress&cs=tinysrgb&w=1600",
     
    },
];

  return (
    <section className="section_activite_slide">
      <h2>Découvrez nos autres services </h2>
      
      <div className='slide_contenu'>
      <span id="btn_prev" onClick={previousSlide}><Icon icon="ooui:next-rtl"  /></span>
        
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
        <form method="get" action={slides[currentSlide].lien}>
          <button type="submit">Voir plus</button>
          </form>
          <span id="btn_next" onClick={nextSlide}><Icon icon="ooui:next-ltr"  /></span>
      </div>
    
    </section>
  );
}
