// import React from 'react';
// import {motion} from 'framer-motion';
// import './ParcoursChronologique.scss';
// import idiaTechIcon from "/resources/idia-tech2.png";
// import cyIcon from "/resources/cy.png";
//
// const ParcoursChronologique = () => {
//     const parcours = [
//         {
//             annee: '2020',
//             titre: 'Baccalauréat',
//             description: "Obtention de mon BAC spé Maths qui m'a permis de consolider mes connaissances en sciences et de découvrir la programmation informatique.",
//         },
//         {
//             annee: '2021-2024',
//             titre: 'Université',
//             description: "Admission à l'Université dans un parcours Licence Maths, Informatique, Physique et Ingénierie, où j'ai travaillé sur de nombreux projets, développant des solutions Logicielles, Web, Backend et Frontend.",
//         },
//         {
//             annee: 'Avril 2024',
//             titre: 'Stage en entreprise',
//             description: "Réalisation d’un stage passionnant chez idIA-Tech en tant que développeur dans le domaine du Web-Mining.",
//             icon: idiaTechIcon,
//         },
//         {
//             annee: 'Juin 2024',
//             titre: 'Licence Générale',
//             description: "Obtention de mon diplôme BAC+3 en Informatique.",
//             icon: cyIcon,
//         },
//     ];
//
//     const variants = {
//         hiddenLeft: {
//             opacity: 0,
//             x: 100, // Start off-screen to the right
//         },
//         hiddenRight: {
//             opacity: 0,
//             x: -100, // Start off-screen to the left
//         },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: {
//                 duration: 0.8,
//                 ease: "easeOut"
//             }
//         }
//     };
//
//     return (
//         <div className="timeline-container">
//             {parcours.map((item, index) => (
//                 <motion.div
//                     whileInView="visible"
//                     viewport={{once: true}}
//                     key={index}
//                     className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
//                     initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
//                     // animate="visible"
//                     variants={variants}
//                 >
//                     <div className="timeline-content">
//                         {item.icon && (
//                             <div className="timeline-icon">
//                                 <img src={item.icon} alt={`Icone ${item.titre}`}/>
//                             </div>
//                         )}
//                         <h3 className="timeline-year">{item.annee}</h3>
//                         <h4 className="timeline-title">{item.titre}</h4>
//                         <p className="timeline-description">{item.description}</p>
//                     </div>
//                 </motion.div>
//             ))}
//         </div>
//     );
// };
//
// export default ParcoursChronologique;


import React from 'react';
import './ParcoursChronologique.scss';
import idiaTechIcon from "/resources/idia-tech2.png";
import cyIcon from "/resources/cy.png";
import {motion} from "framer-motion";

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
            icon: idiaTechIcon,
        },
        {
            annee: 'Juin 2024',
            titre: 'Licence Générale',
            description: "Obtention de mon diplôme BAC+3 en Informatique.",
            icon: cyIcon,
        },
    ];

    return (
        <div className="timeline-container">
            {parcours.map((item, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}>
                        <div className="timeline-content">
                            {item.icon && (
                                <div className="timeline-icon">
                                    <img src={item.icon} alt={`Icone ${item.titre}`}/>
                                </div>
                            )}
                            <h3 className="timeline-year">{item.annee}</h3>
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
