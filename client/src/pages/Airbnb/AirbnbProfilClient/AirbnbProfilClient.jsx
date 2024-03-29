import React, { useState } from 'react';
import Navbar from '../../../components/NavBars/NavbarAirbnb';
import BarreDeRecherche from '../BarreDeRecherche/BarreDeRecherche2';
import HeroBanner from './HeroBanner/HeroBanner';

import ReservationsTab from './Tabs/Reservations';
import MessagerieTab from './Tabs/Messagerie';
import ProfilTab from './Tabs/Profil';
import AideTab from './Tabs/Aide'

export default function AirbnbProfilClient() {
    const [activeTab, setActiveTab] = useState('profil');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

  return (
    <div>
      <Navbar />
      <BarreDeRecherche />
      <HeroBanner />
      <div className="profil-tab">
      <div className="tab-bar-profil">
        <button onClick={() => handleTabChange('profil')} className={activeTab === 'profil' ? 'active' : ''}>Profil</button>
        <button onClick={() => handleTabChange('reservations')} className={activeTab === 'reservations' ? 'active' : ''}>Reservations</button>
        <button onClick={() => handleTabChange('messagerie')} className={activeTab === 'messagerie' ? 'active' : ''}>Messagerie</button>
        <button onClick={() => handleTabChange('aide')} className={activeTab === 'aide' ? 'active' : ''}>Aide/Assistance</button>
        
      </div>
 
      <div className="tab-content-profil">
        {activeTab === 'profil' && <ProfilTab />}
        {activeTab === 'reservations' && <div><ReservationsTab/></div>}
        {activeTab === 'messagerie' && <MessagerieTab />}
        {activeTab === 'aide' && <AideTab />}
        
      </div>
      </div>
    </div>
  );
}
