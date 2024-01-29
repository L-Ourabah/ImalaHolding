// ProfilTab.jsx

import React, { useState } from 'react';
import ia from "../../../../media/images/ia.jpg"
const ProfilTab = () => {
  // Données internes pour simuler des informations de profil
  const initialProfileData = {
    name: 'ia',
    email: 'ia@example.com',
    city: 'Ville-Enchantée',
    profileImage: ia,
  };

  const [isEditing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Ajoutez ici la logique pour sauvegarder les modifications, par exemple, via une API.
    setEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileData({
        ...profileData,
        profileImage: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="profil-content">
      <h2>Mon Profil</h2>
     
      <p>Bienvenue sur mon profil Airbnb. Je suis un voyageur passionné et j'aime découvrir de nouveaux endroits.</p>

      {isEditing ? (
        <div id="edit-profile-form" className="active">
          <label>Nom:</label>
          <input type="text" value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} />

          <label>Email:</label>
          <input type="text" value={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} />

          <label>Ville:</label>
          <input type="text" value={profileData.city} onChange={(e) => setProfileData({ ...profileData, city: e.target.value })} />

          {/* Champ d'entrée pour la nouvelle photo de profil */}
          <label>Nouvelle Photo de Profil:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          <button onClick={handleSaveClick} id="save-profile-btn">Enregistrer</button>
        </div>
      ) : (
        <div id="profil-info" className="active">
          <h2>Mes Informations</h2>
          <ul>
            <li><strong>Nom:</strong> {profileData.name}</li>
            <li><strong>Email:</strong> {profileData.email}</li>
            <li><strong>Ville:</strong> {profileData.city}</li>
          </ul>

          <button onClick={handleEditClick} id="edit-profile-btn">Modifier le Profil</button>
        </div>
      )}
    </div>
  );
};

export default ProfilTab;
