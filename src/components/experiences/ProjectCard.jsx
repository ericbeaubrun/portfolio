import React, {useState} from 'react';
import './ProjectCard.scss';

const ProjectCard = ({icon, title, date, description, longDescription, roles, skills}) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="project-card">
            <div className="project-header">
                <img src={icon} alt={`${title} icon`} className="project-icon"/>
                <div className="project-info">
                    <h2 className="project-title">{title}</h2>
                    <p className="project-date">{date}</p>
                    <p className="project-description">{description}</p>
                </div>
            </div>
            <button className="toggle-details-button" onClick={toggleDetails}>
                {showDetails ? 'Voir moins' : 'Voir plus'}
            </button>
            {showDetails && (
                <div className="project-details">
                    <p className="long-description">{longDescription}</p>
                    <h3>Rôle et Responsabilités :</h3>
                    <ul className="roles-list">
                        {roles.map((role, index) => (
                            <li key={index}>{role}</li>
                        ))}
                    </ul>
                    <h3>Compétences :</h3>
                    <ul className="skills-list">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
