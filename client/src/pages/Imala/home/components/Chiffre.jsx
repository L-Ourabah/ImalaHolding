import React, { useState, useEffect, useRef } from 'react';
import "./Chiffre.css"
// Composant ChiffreCard
const ChiffreCard = ({ targetValue, label, text }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`ChiffreCard (${label}): Component mounted`);

        let interval;

        // Vérification pour le défilement progressif jusqu'à la valeur cible
        if (count < targetValue) {
            interval = setInterval(() => {
                // Mise à jour du compteur
                setCount((prevCount) => {
                    console.log(`ChiffreCard (${label}): Count increased to ${prevCount + 1}`);
                    return prevCount + 1;
                });
            }, 100); // durée de l'intervalle
        }

        // Fonction de nettoyage pour arrêter l'intervalle
        return () => {
            clearInterval(interval);

        };
    }, [count, targetValue, label]);

    // Rendu de la carte chiffre
    return (
        <div className="chiffre_card">
            <h4>{label}</h4>
            <div className="chiffre_num">
                <p>{count}</p>
                </div>
            
            <div className="chiffre_txt">
                <p> {text} </p>
            </div>
        </div>
    );
};

// Composant principal SectionChiffre
export default function SectionChiffre() {
    const chiffreSectionRef = useRef(null);
    const [resetChiffres, setResetChiffres] = useState(false);

    useEffect(() => {
        console.log("SectionChiffre: Component mounted");

        const handleScroll = () => {
            if (chiffreSectionRef.current) {
                const sectionTop = chiffreSectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                console.log(`SectionChiffre: Section top position: ${sectionTop}, Window height: ${windowHeight}`);

                // Si la section est dans la vue ou en train de sortir de la vue
                if (sectionTop < windowHeight && sectionTop > 0) {
                    console.log('SectionChiffre: Section in view. Resetting chiffres.');
                    setResetChiffres(true);
                } else {
                    console.log('SectionChiffre: Section not in view.');
                    setResetChiffres(false);
                }
            }
        };

        // Écoute de l'événement de défilement
        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('SectionChiffre: Scroll event listener removed.');
            console.log('SectionChiffre: Component unmounted.');
        };
    }, []);

    return (
        <section ref={chiffreSectionRef} className="section chiffre">
            <h2 className="chif">Nos Chiffres</h2>
            <div className="chiffre_content">
                <ChiffreCard
                    label="Imala location"
                    targetValue={25}

                    text="Par le biais d’imala location, nous avons loué au moins 25 APPARTEMENTS"
                    key={resetChiffres ? 'reset-location' : 'location'}
                />
                <hr />
                <ChiffreCard
                    label="Imala construction"
                    targetValue={4}

                    text="Nous avons réalisé 3 villas et un immeuble"
                    key={resetChiffres ? 'reset-construction' : 'construction'}
                />
                <hr />
                <ChiffreCard
                    label="Imala conciergerie"
                    targetValue={20}


                    text="Nous avons réalisé 20 prestation par le biais de notre conciergerie"
                    key={resetChiffres ? 'reset-conciergerie' : 'conciergerie'}
                />
            </div>

        </section>
    );
}