import ProjectCard from "../experiences/ProjectCard.jsx";
import {motion} from "framer-motion";
import Footer from "../Footer.jsx";
import {AnimatedTitle} from "../AnimatedTitle.jsx";

// const title = [
//     {
//         type: "heading1",
//         text: "Mes Expériences"
//     }
// ];

export const Experiences = () => {
    return (
        <>
            {/*<AnimatedTitle titles={title}/>*/}

            <div className="spacing"></div>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                className="animated-title">

                <ProjectCard
                    icon={"./resources/idia-tech.png"}
                    title="Stage en Développement Java et Web-Mining"
                    date="Janvier 2024"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={[
                        '???',
                        '???'
                    ]}
                    skills={[
                        'Java',
                        'Javascript',
                        'Python',
                        'PHP',
                        'API',
                        'SQL',
                        'Prestashop'
                    ]}
                />

                <ProjectCard
                    icon={"./resources/aerien.png"}
                    title="Simulateur de Trafic Aérien"
                    date="Janvier 2024"
                    description="Développement d'un simulateur de trafic aérien en Java, incluant une interface graphique
paramétrable en temps réel et utilisant des concepts avancés comme le calcul de
trajectoire, l’évitement des collisions et la concurrence en multithreading.
"
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={[
                        '???',
                        '???'
                    ]}
                    skills={[
                        'Java',
                        'Conception UI/UX',
                        'Multithreading'
                    ]}
                />

                <ProjectCard
                    icon={"./resources/application_pedagogique.png"}
                    title="Application Pédagogique pour les Étudiants"
                    date="Octobre 2023"
                    description="Développement d'une application interactive en Python pour enseigner la programmation
aux étudiants. L'application inclut un éditeur de code, la génération de feedbacks en temps
réel, et le stockage des statistiques des étudiants au format JSON.
"
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={[
                        '???',
                        '???'
                    ]}
                    skills={[
                        'Python',
                        'PyQT',
                        'CSS',
                        'JSON',
                        'Conception UI/UX'
                    ]}
                />

                <ProjectCard
                    icon={"./resources/presences.png"}
                    title="Système de Gestion de Présences des Étudiants"
                    date="Septembre 2023"
                    description="Création d'un système en Java et Python pour le suivi des présences des étudiants via des
cartes NFC. Le projet inclut la mise en place d'un serveur Java, une base de données
PostgreSQL, et une interface de communication réseau (TCP/IP)."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={[
                        '???',
                        '???'
                    ]}
                    skills={[
                        'Java',
                        'Python',
                        'TCP/IP',
                        'Cybersécurité',
                        'PostgreSQL',
                        'SQL'
                    ]}
                />

                <ProjectCard
                    icon={"./resources/librairie.png"}
                    title="Librairie en Ligne"
                    date="Mars 2022"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={[
                        'Programmation du Back-End du site',
                        'API'
                    ]}
                    skills={[
                        'PHP',
                        'API'
                    ]}
                />

                <ProjectCard
                    icon={"./resources/conquete.png"}
                    title="Jeu de Plateau Stratégique Multijoueur"
                    date="Janvier 2022"
                    description="Création d'un jeu de plateau stratégique en Java, intégrant une IA pour des parties
multijoueur locales, la gestion des sauvegardes et la génération de graphiques statistiques
des parties. Traitements XML et tests unitaires réalisés avec JUnit."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={[
                        '???',
                        '???'
                    ]}
                    skills={[
                        'Java',
                        'Intelligence Artificielle',
                        'JUnit',
                        'Conception UI/UX'
                    ]}
                />

                <ProjectCard
                    icon={"./resources/document.png"}
                    title="Logiciel de Gestion de Documents"
                    date="Octobre 2021"
                    description="Brève description du projet."
                    longDescription="Longue description du projet, expliquant les détails, les challenges, et les solutions."
                    roles={[
                        '???',
                        '???'
                    ]}
                    skills={[
                        'Python',
                        'PyQT',
                        'CSS',
                        'JSON',
                        'Conception UI/UX'
                    ]}
                />


            </motion.div>

            <Footer/>
        </>
    );
};
