import React, { useEffect, useRef } from 'react';

const Map = () => {
  const apiKey = 'v10lc7dH4bSIvJLKoPDrGgj0rjJTKLbN';
  const scriptLoaded = useRef(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const initialiserCarte = () => {
      const MQ = window.L.mapquest;

      if (MQ) {
        MQ.key = apiKey;

        if (document.body) {
          // Détruire la carte si elle existe déjà
          if (mapRef.current) {
            mapRef.current.remove();
          }

          // Coordonnées du golfe sud de Dakar
          const coordinates = [14.776622017479653, -17.406824789935808];

          // Créer une nouvelle carte
          const carte = MQ.map('carte', {
            center: coordinates,
            zoom: 12,
          });

          // Ajouter la couche de tuiles après la création de la carte
          MQ.tileLayer('map').addTo(carte);

          // Mettre à jour la référence de la carte
          mapRef.current = carte;

          // Ajouter une localisation, par exemple, Golfe sud de Dakar
          MQ.geocoding().geocode('Golfe sud de Dakar, Sénégal');
        }
      }
    };

    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.src = `https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js?key=${apiKey}`;
      script.async = true;
      script.onload = () => {
        initialiserCarte();
        scriptLoaded.current = true;
      };

      if (document.body) {
        document.body.appendChild(script);

        return () => {
          // Nettoyer la carte lors du démontage du composant
          if (mapRef.current) {
            mapRef.current.remove();
          }

          document.body.removeChild(script);
        };
      }
    } else {
      initialiserCarte();
    }
  }, [apiKey]);

  return (
    <div className="api-carte">
      <div id="carte" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Map;