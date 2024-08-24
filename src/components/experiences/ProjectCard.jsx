import './ProjectCard.scss';
import {useState,useEffect} from "react";
import {motion} from "framer-motion";
import Slider from "react-slick";

// Icons
import githubIcon from '/resources/github.png';
import groupIcon from '/resources/group.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({
                         icon,
                         title,
                         date,
                         description,
                         longDescription,
                         roles,
                         skills,
                         githubLink,
                         images,
                         isCompleted,
                         amountPerson
                     }) => {

    // const [showDetails, setShowDetails] = useState(false);
    //
    // const toggleDetails = () => {
    //     setShowDetails(!showDetails);
    // };

    const [showDetails, setShowDetails] = useState(() => {
        const savedState = localStorage.getItem(`showDetails-${title}`);
        return savedState ? JSON.parse(savedState) : false;
    });

    const toggleDetails = () => {
        const newState = !showDetails;
        setShowDetails(newState);
        localStorage.setItem(`showDetails-${title}`, JSON.stringify(newState)); // Sauvegarde dans localStorage
    };

    useEffect(() => {
        const savedState = localStorage.getItem(`showDetails-${title}`);
        if (savedState !== null) {
            setShowDetails(JSON.parse(savedState));
        }
    }, [title]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true}}
            className="animated-title">

            <div className="project-card">
                {/* Ajout du point lumineux */}
                <div className={`status-indicator ${isCompleted ? 'completed' : 'not-completed'}`}></div>

                <div className="project-header">
                    <img src={icon} alt={`${title} icon`} className="project-icon"/>
                    <div className="project-info">
                        <h2 className="project-title">{title}</h2>
                        <p className="project-date">{date}</p>
                        <p className="project-description">{description}</p>

                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                                <img src={githubIcon} alt="GitHub icon" className="github-icon"/>Code source
                            </a>
                        )}
                    </div>
                </div>

                {
                    showDetails ?
                        <button className="toggle-details-button" onClick={toggleDetails}>&#x25BC; Détails</button>
                        : <button className="toggle-details-button" onClick={toggleDetails}>&#x2BC8; Détails</button>
                }

                {showDetails && images && images.length > 0 &&
                    (
                        <div className="carousel-wrapper">
                            <Slider {...settings} className="project-carousel">
                                {images.map((image, index) => (
                                    <div key={index} className="carousel-image-container">
                                        <img src={image} alt={`project screenshot ${index + 1}`}
                                             className="carousel-image"/>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    )
                }

                {showDetails &&
                    (

                        <div className="project-details">
                            <p className="long-description">{longDescription}</p>

                            {amountPerson && (<p id={"group-amount"}><img src={groupIcon} alt="Icone de groupe"
                                                                          className="group-icon"/>Réalisé à {amountPerson}</p>)}

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
                    )
                }

            </div>

        </motion.div>
    );
};

export default ProjectCard;
