// ContactTab.js
import React from 'react';
import { profilDataMessagerie, profilDataEtendre } from './ProfilData';

export default function ContactTab() {
    return (
        <div className='contactTab'>


            <div className="container-contact">
                <div className="container-messagerie">
                    <h3>MESSAGERIE</h3>
                    {profilDataMessagerie.map(profil => (
                        <div key={profil.id} className="messagerie">
                            <div className="img-messagerie">
                                <img src={profil.img} alt={profil.name} />
                            </div>
                            <div className="profil-messagerie">
                                <h2>{profil.name}</h2>
                                <p>{profil.description}</p>
                            </div>
                            <button className="kebab-button">&#8942;</button>
                        </div>
                    ))}
                </div>



                <div className="container-etendre">
                    <h3>Etendez vos contacts</h3>
                    {profilDataEtendre.map(profil => (
                        <div key={profil.id}
                            className="etendu">
                            <div className="img-messagerie">
                                <img src={profil.img} alt={profil.name} />
                            </div>
                            <div className="profil-messagerie">
                                <h2>{profil.name}</h2>
                                <p>{profil.description}</p>
                            </div>
                            <div className="action-buttons">
                                <button className="add-button"><i className="fas fa-plus"></i></button>
                                <button className="reject-button"><i className="fas fa-times"></i></button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


