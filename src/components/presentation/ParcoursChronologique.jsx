import './ParcoursChronologique.scss';
import {motion} from "framer-motion";
import idiaTechIcon from "/resources/idia-tech2.png";
import cyIcon from "/resources/cy.png";

const ParcoursChronologique = () => {
    const parcours = [
        {
            annee: 'Juin 2020',
            titre: 'Baccalauréat scientifique',
            description: "Obtention de mon BAC qui m'a permis d'obtenir de solides bases en mathématiques.",
        },
        {
            annee: '2021-2024',
            titre: "Admission à l'université",
            description: "Admission à CY Cergy Paris Université dans un parcours Licence (Maths, Informatique, Physique et Ingénierie) où j'ai travaillé sur de nombreux projets" +
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

        // {
        //     annee: 'Septembre 2024',
        //     titre: "Admission en école d'ingénieur",
        //     description: "...",
        //
        // },
    ];

    return (
        <div className="timeline-container">
            {parcours.map((item, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
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
                </div>
            ))}
        </div>
    );
};

export default ParcoursChronologique;
