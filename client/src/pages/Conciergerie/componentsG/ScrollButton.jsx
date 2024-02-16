import React, { useState, useEffect } from 'react';
import './componentsG.css';
import { Icon } from "@iconify/react";
export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} title="Retour en haut de la page">
         <Icon icon="gg:arrow-up-o" width="50" height="50" />
        </button>
      )}
    </div>
  );
}
