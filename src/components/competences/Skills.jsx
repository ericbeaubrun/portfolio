import './Skills.scss';
import { motion } from "framer-motion";

export const Skills = ({title, skills}) => {
    return (
        <div className="skills-container">
            <h2 className="skills-title">{title}</h2>

            <div className="skills-grid">
                {
                    skills.map((skill) => (
                        <div key={skill.name} className="skill-card">

                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{
                                    opacity: 1,
                                    scale: 1
                                }}
                                transition={{duration: 1, ease: "easeOut"}}
                            >
                                <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon"/>
                            </motion.div>

                            <p className="skill-name">{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

// import { motion } from "framer-motion";
//
// export const SkillsSection = ({ title, skills }) => {
//     return (
//         <div className="skills-container">
//             <h2 className="skills-title">{title}</h2>
//             <div className="skills-grid">
//                 {
//                     skills.map((skill) => (
//                         <motion.div
//                             key={skill.name}
//                             className="skill-card"
//                             initial={{ opacity: 0, scale: 0.8 }}  // Début de l'animation (invisible et plus petit)
//                             animate={{ opacity: 1, scale: 1 }}  // Fin de l'animation (complètement visible et taille normale)
//                             transition={{ duration: 0.6, ease: "easeOut" }}  // Durée et type de transition
//                         >
//                             <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon"/>
//                             <p className="skill-name">{skill.name}</p>
//                         </motion.div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };



