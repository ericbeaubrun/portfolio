import './ParcoursChronologique.scss';
import idiaTechIcon from "/resources/idia-tech2.png";
import cyIcon from "/resources/cy.png";

import { useState } from 'react';
import { motion } from 'framer-motion';

const ParcoursChronologique = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const parcours = [
        {
            annee: 'Juin 2020',
            titre: 'Baccalauréat scientifique',
            description: "Obtention de mon BAC qui m'a permis d'obtenir de solides bases en mathématiques.",
        },
        {
            annee: '2021-2024',
            titre: "Admission à l'université",
            description: "Intégration du parcours licence Maths, Informatique, Physique et Ingénierie à Cergy-Pontoise où j'ai travaillé sur de nombreux projets" +
                " permettant de développer des solutions Back-End et Front-End.",
            icon: cyIcon,
        },
        {
            annee: 'Avril 2024',
            titre: 'Stage en entreprise',
            description: "Réalisation d’un stage passionnant dans le domaine du Web-Mining en tant que développeur Java au sein d'idIA-Tech.",
            icon: idiaTechIcon,
        },
        {
            annee: 'Juin 2024',
            titre: 'Licence Générale',
            description: "Obtention de mon diplôme BAC+3 en Informatique.",
        },
    ];

    return (
        <div className="timeline-container">
            {parcours.map((item, index) => (
                <motion.div
                    key={index}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                >
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        viewport={{once: true}}>
                        <div className="timeline-content">
                            {item.icon && (
                                <div className="timeline-icon">
                                    <img src={item.icon} alt={`Icone ${item.titre}`}/>
                                </div>
                            )}
                            <h3 className={"timeline-year timeline-year" + index}>{item.annee}</h3>
                            <h4 className="timeline-title">{item.titre}</h4>
                            <p className="timeline-description">{item.description}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default ParcoursChronologique;
