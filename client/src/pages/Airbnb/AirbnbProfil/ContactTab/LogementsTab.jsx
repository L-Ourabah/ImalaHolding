import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import logementData from "./LogementData";
import { Link } from 'react-router-dom';

const LogementsTab = () => {
  return (
    <div className='logement'>
      {logementData.map(logement => (
        <div key={logement.id} className="logement-container">
          <div className="logement-container2">
            <div className="image-container">
              <img src={logement.img} alt={`Image de logement ${logement.id}`} className="logement-image" />
            </div>
            <div className="text-container">
              <p>{logement.description}</p>
              <div className="stars-container">
                {Array.from({ length: Math.floor(logement.etoiles) }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                ))}
                {logement.etoiles % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalf} className="star-icon" />
                )}
                <span className="note">{logement.etoiles}</span>
              </div>
            </div>
            <button className="kebab-button">&#8942;</button>
          </div>
          <div className="recomponse">
          
            {logement.descrecomponse && <p>{logement.descrecomponse}</p>}
            {logement.titre && (
              <>
                <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                {' ' + logement.titre}
              </>
            )}
          </div>
          <hr />
        </div>
      ))}
      <Link to="/connexion">
        <button className='btn-bien'>+ Ajouter un bien</button>
      </Link>
    </div>
  );
};

export default LogementsTab;


