import './ProjectCard.scss';
import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Slider from "react-slick";

// Icons
import githubIcon from '/resources/github.png';
import groupIcon from '/resources/group.png';
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

    const [showDetails, setShowDetails] = useState(() => {
        const savedState = localStorage.getItem(`showDetails-${title}`);
        return savedState ? JSON.parse(savedState) : false;
    });

    const toggleDetails = () => {
        const newState = !showDetails;
        setShowDetails(newState);
        localStorage.setItem(`showDetails-${title}`, JSON.stringify(newState));
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
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: false
    };

    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true}}
            className="animated-title">

            <div className="project-card">
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

                <AnimatePresence initial={false}>
                    {showDetails && (
                        <motion.div
                            initial={{height: 0, opacity: 0}}
                            animate={{height: 'auto', opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98]}}
                            className="project-details-wrapper">
                            {images && images.length > 0 && (
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
                            )}

                            <div className="project-details">
                                <p className="long-description">{longDescription}</p>

                                {amountPerson && (
                                    <p id={"group-amount"}>
                                        <img src={groupIcon} alt="Icone de groupe" className="group-icon"/>Réalisé
                                        à {amountPerson}
                                    </p>
                                )}

                                <h3>Rôle et responsabilités :</h3>
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
    );
};

export default ProjectCard;
