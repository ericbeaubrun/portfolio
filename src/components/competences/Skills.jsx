// import './Skills.scss';
//
// import {useState} from 'react';
// import {motion} from 'framer-motion';
//
// export const Skills = ({title, skills}) => {
//     const [selectedSkill, setSelectedSkill] = useState(null);
//
//     const handleSkillClick = (skill) => {
//         setSelectedSkill(selectedSkill === skill ? null : skill);
//     };
//
//     const calculateYears = (startYear) => {
//         const currentYear = new Date().getFullYear();
//         return currentYear - startYear;
//     };
//
//     return (
//         <div className="skills-container">
//             <h2 className="skills-title">{title}</h2>
//
//             <div className="skills-grid">
//                 {skills.map((skill) => (
//                     <div
//                         key={skill.name}
//                         className={`skill-card ${selectedSkill === skill ? 'selected' : ''}`}
//                         onClick={() => handleSkillClick(skill)}
//                     >
//                         <motion.div
//                             initial={{opacity: 0, scale: 0.8}}
//                             animate={{opacity: 1, scale: 1}}
//                             transition={{duration: 1, ease: 'easeOut'}}
//                         >
//                             <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon"/>
//                         </motion.div>
//
//                         <p className="skill-name">{skill.name}</p>
//                     </div>
//                 ))}
//             </div>
//
//
//             {selectedSkill && (
//                 <motion.div
//                     className="skill-details"
//                     initial={{opacity: 0, y: 20}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 0.5, ease: 'easeOut'}}
//                 >
//                     <h3 className="skill-details-title">{selectedSkill.name}</h3>
//                     {
//                         selectedSkill.startYear && selectedSkill.startYear < 2024 && (
//                             <p className="skill-experience">
//                                 {`Expérience : ${calculateYears(selectedSkill.startYear)} ans`}
//                             </p>
//                         )
//                     }
//                     <p className="skill-details-description">{selectedSkill.description}</p>
//                 </motion.div>
//             )}
//         </div>
//     );
// };
import './Skills.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Skills = ({ title, skills }) => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    const handleCloseModal = () => {
        setSelectedSkill(null);
    };

    const calculateYears = (startYear) => {
        const currentYear = new Date().getFullYear();
        return currentYear - startYear;
    };

    return (
        <div className="skills-container">
            <h2 className="skills-title">{title}</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`skill-card ${selectedSkill === skill ? 'selected' : ''}`}
                        onClick={() => handleSkillClick(skill)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                        </motion.div>

                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>

            {selectedSkill && (
                <SkillModal
                    skill={selectedSkill}
                    calculateYears={calculateYears}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

const SkillModal = ({ skill, calculateYears, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}  // Stop propagation to prevent closing the modal when clicking inside
            >
                <button className="close-button" onClick={onClose}>X</button>
                <h3 className="skill-details-title">{skill.name}</h3>
                {skill.startYear && skill.startYear < 2024 && (
                    <p className="skill-experience">
                        {`Expérience : ${calculateYears(skill.startYear)} ans`}
                    </p>
                )}
                <p className="skill-details-description">{skill.description}</p>
            </motion.div>
        </div>
    );
};
