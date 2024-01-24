// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

import Footer from './components/Footer.jsx';
import CookieConsent from './pages/Cookies/CookiesConsent.jsx';

// Gère l'affichage de la navbar


// Création du point de rendu
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Footer />
      <CookieConsent />
    </Router>
  </React.StrictMode>,
);

