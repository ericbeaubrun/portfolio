import './Skills.scss';
import {useState} from 'react';
import {motion} from 'framer-motion';

export const Skills = ({title, skills}) => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(selectedSkill === skill ? null : skill);
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
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 1, ease: 'easeOut'}}
                        >
                            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon"/>
                        </motion.div>

                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>


            {selectedSkill && (
                <motion.div
                    className="skill-details"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: 'easeOut'}}
                >
                    <h3 className="skill-details-title">{selectedSkill.name}</h3>
                    {
                        selectedSkill.startYear && selectedSkill.startYear < 2024 && (
                            <p className="skill-experience">
                                {`Expérience : ${calculateYears(selectedSkill.startYear)} ans`}
                            </p>
                        )
                    }
                    <p className="skill-details-description">{selectedSkill.description}</p>
                </motion.div>
            )}
        </div>
    );
};


// import './Skills.scss';
// import {motion} from "framer-motion";
//
// export const Skills = ({title, skills}) => {
//     return (
//         <div className="skills-container">
//             <h2 className="skills-title">{title}</h2>
//
//             <div className="skills-grid">
//                 {
//                     skills.map((skill) => (
//                         <div key={skill.name} className="skill-card">
//
//                             <motion.div
//                                 initial={{opacity: 0, scale: 0.8}}
//                                 animate={{
//                                     opacity: 1,
//                                     scale: 1
//                                 }}
//                                 transition={{duration: 1, ease: "easeOut"}}
//                             >
//                                 <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon"/>
//                             </motion.div>
//
//                             <p className="skill-name">{skill.name}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };
