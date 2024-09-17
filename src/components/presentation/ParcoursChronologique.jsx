import './ParcoursChronologique.scss';
import idiaTechIcon from "/resources/idia-tech2.png";
import cyIcon from "/resources/cy.png";

import { useState } from 'react';
import { motion } from 'framer-motion';
import content from '../../content/presentation.json';

const ParcoursChronologique = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const parcours = [
        {
            annee: content.parcours.container1.date,
            titre: content.parcours.container1.title,
            description: content.parcours.container1.description
        },
        {
            annee: content.parcours.container2.date,
            titre: content.parcours.container2.title,
            description: content.parcours.container2.description,
            icon: cyIcon,
        },
        {
            annee: content.parcours.container3.date,
            titre: content.parcours.container3.title,
            description: content.parcours.container3.description,
            icon: idiaTechIcon,
        },
        {
            annee: content.parcours.container4.date,
            titre: content.parcours.container4.title,
            description: content.parcours.container4.description,
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
                    animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 10 }}
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
    );};

export default ParcoursChronologique;
