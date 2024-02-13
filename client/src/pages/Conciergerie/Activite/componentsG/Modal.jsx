import React from 'react';
import '../Activite.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal_conciergerie" onClick={closeModal}>
      <img src={image} alt="Image en grand" className="modal-img" />
    </div>
  );
};

export default Modal;
