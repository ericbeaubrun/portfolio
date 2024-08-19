import React from 'react';
import './ParcoursChronologique.scss';


const ParcoursChronologique = () => {
    const parcours = [
        {
            annee: '2020',
            titre: 'Baccalauréat',
            description: "Obtention de mon BAC spé Maths qui m'a permis de consolider mes connaissances en sciences et de découvrir la programmation informatique.",
        },
        {
            annee: '2021-2024',
            titre: 'Université',
            description: "Admission à l'Université dans un parcours Licence Maths, Informatique, Physique et Ingénierie, où j'ai travaillé sur de nombreux projets, développant des solutions Logicielles, Web, Backend et Frontend.",
        },
        {
            annee: 'Avril 2024',
            titre: 'Stage en entreprise',
            description: "Réalisation d’un stage passionnant chez idIA-Tech en tant que développeur dans le domaine du Web-Mining.",
            iconPath: 'public/resources/cy.png',
        },
        {
            annee: 'Juin 2024',
            titre: 'Licence Générale',
            description: "Obtention de mon diplôme BAC+3 en Informatique.",
            iconPath: 'public/resources/idia-tech2.png',
        },
    ];

    return (
        <div className="timeline-container">
            {parcours.map((item, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-content">
                        {item.iconPath && (
                            <div className="timeline-icon">
                                <img src={item.iconPath} alt={`Icone ${item.titre}`} />
                            </div>
                        )}
                        <h3 className="timeline-year">{item.annee}</h3>
                        <h4 className="timeline-title">{item.titre}</h4>
                        <p className="timeline-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ParcoursChronologique;
