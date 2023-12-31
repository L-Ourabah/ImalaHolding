// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Importation des composants Header et Footer
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Création du point de rendu
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

