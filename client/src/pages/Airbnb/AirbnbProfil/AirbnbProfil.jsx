// AirbnbProfil.js

import React, { useState } from 'react';
import '../AirbnbLocation/AirbnbLocation.css';
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche2';
import HeroBanner from './HeroBanner/HeroBanner';
import LogementsTab from './ContactTab/LogementsTab';
import ContactTab from './ContactTab/ContactTab';
import  "./AirbnbProfil.css"
import Header from '../../../components/NavBars/NavbarAirbnb.jsx'
export default function AirbnbProfil() {
  const [activeTab, setActiveTab] = useState('logements');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='location-wrapper'>
      <Header/>
      <BarreDeRecherche />
      <HeroBanner />
      
      <div className="tab-bar">
        <button onClick={() => handleTabChange('logements')} className={activeTab === 'logements' ? 'active' : ''}>Vos logements</button>
        <button onClick={() => handleTabChange('contacts')} className={activeTab === 'contacts' ? 'active' : ''}>Mes contacts</button>
      </div>
      <div className="tab-content">
        {activeTab === 'logements' && <LogementsTab />}
        {activeTab === 'contacts' && <ContactTab />}
      </div>
    </div>
  );
}
