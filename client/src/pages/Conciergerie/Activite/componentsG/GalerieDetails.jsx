import React from 'react';
import '../Activite.css';

export default function GalerieDetails({ images }) {
  return (
    <section className='section_galerie_details'>
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} srcSet={image.srcSet} />
      ))}
    </section>
  );
}
