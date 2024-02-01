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
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    lien: "../ServiceConciergerie/nettoyage",
    image: "https://images.pexels.com/photos/10573242/pexels-photo-10573242.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
   {
     id: 2,
      title: "Garderie",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      lien: "../ServiceConciergerie/garderie",
      image: "https://images.pexels.com/photos/8363100/pexels-photo-8363100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    
    },
    {
      id: 3,
      title: "Transport",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        lien: "../ServiceConciergerie/transport",
      image: "https://images.pexels.com/photos/18189671/pexels-photo-18189671/free-photo-of-ville-route-circulation-gens.jpeg?auto=compress&cs=tinysrgb&w=1600",
     
    },
    {
      id: 4,
      title: "Guide Touristique",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        lien: "../ServiceConciergerie/guidetouristique",
      image: "https://images.pexels.com/photos/4856284/pexels-photo-4856284.jpeg?auto=compress&cs=tinysrgb&w=1600",
     
    },
    {
      id: 5,
      title: "Traiteur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        lien: "../ServiceConciergerie/traiteur",
      image: "https://images.pexels.com/photos/7262909/pexels-photo-7262909.jpeg?auto=compress&cs=tinysrgb&w=1600",
     
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
