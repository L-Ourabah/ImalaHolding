import React, { useState } from 'react';
import '../Activite.css';
import Modal from './Modal';

export default function GalerieDetails({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className='section_galerie_details'>
      <div className="titre_activite_details">
        <h2>Galerie</h2>
      </div>
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
      <div className="galerie_activite_details">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className='card_activite_details' onClick={() => openModal(image)}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>Aucune image</p>
        )}
      </div>
    </section>
  );
}

