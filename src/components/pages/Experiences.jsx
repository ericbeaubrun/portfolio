import ProjectCard from "../experiences/ProjectCard.jsx";
import {motion} from "framer-motion";
import React from "react";


export const Experiences = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                className="animated-title">
                {/* 1 */}
                <ProjectCard
                    icon={"./resources/github.png"}
                    title="Nom du Projet"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={['Développement frontend', 'Gestion de base de données']}
                    skills={['React', 'Node.js', 'MongoDB']}
                />

                {/* 2 */}
                <ProjectCard
                    icon={"./resources/github.png"}
                    title="Nom du Projet"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={['Développement frontend', 'Gestion de base de données']}
                    skills={['React', 'Node.js', 'MongoDB']}
                />

                {/* 3 */}
                <ProjectCard
                    icon={"./resources/github.png"}
                    title="Nom du Projet"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={['Développement frontend', 'Gestion de base de données']}
                    skills={['React', 'Node.js', 'MongoDB']}
                />

                {/* 4 */}
                <ProjectCard
                    icon={"./resources/github.png"}
                    title="Nom du Projet"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={['Développement frontend', 'Gestion de base de données']}
                    skills={['React', 'Node.js', 'MongoDB']}
                />

                {/* 5 */}
                <ProjectCard
                    icon={"./resources/github.png"}
                    title="Nom du Projet"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={['Développement frontend', 'Gestion de base de données']}
                    skills={['React', 'Node.js', 'MongoDB']}
                />

                {/* 6 */}
                <ProjectCard
                    icon={"./resources/github.png"}
                    title="Nom du Projet"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={['Développement frontend', 'Gestion de base de données']}
                    skills={['React', 'Node.js', 'MongoDB']}
                />

                {/* 7 */}
                <ProjectCard
                    icon={"./resources/github.png"}
                    title="Nom du Projet"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={['Développement frontend', 'Gestion de base de données']}
                    skills={['React', 'Node.js', 'MongoDB']}
                />
            </motion.div>
        </>
    );
};
