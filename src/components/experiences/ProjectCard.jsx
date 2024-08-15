import React, {useState} from 'react';
import './ProjectCard.scss';
import {motion} from "framer-motion";

const ProjectCard = ({icon, title, date, description, longDescription, roles, skills}) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="animated-title">

            <div className="project-card">
                <div className="project-header">
                    <img src={icon} alt={`${title} icon`} className="project-icon"/>
                    <div className="project-info">
                        <h2 className="project-title">{title}</h2>
                        <p className="project-date">{date}</p>
                        <p className="project-description">{description}</p>
                    </div>
                </div>

                {
                    showDetails ?
                        <button className="toggle-details-button" onClick={toggleDetails}>&#x25BC; Voir moins</button>
                        : <button className="toggle-details-button" onClick={toggleDetails}>&#x2BC8; Voir plus</button>
                }

                {showDetails && (
                    <div className="project-details">
                        <p className="long-description">{longDescription}</p>

                        <h3>Rôle et Responsabilités :</h3>
                        <ul className="roles-list">
                            {
                                roles.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))
                            }
                        </ul>

                        <h3>Compétences :</h3>
                        <ul className="skills-list">
                            {
                                skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>

        </motion.div>

    );
};

export default ProjectCard;
