import ProjectCard from "../experiences/ProjectCard.jsx";
import Footer from "../Footer.jsx";
import "./Experiences.scss"

import idiaTechIcon from '/resources/idia-tech.png';
import aerienIcon from '/resources/aerien.png';
import applicationPedagogiqueIcon from '/resources/application_pedagogique.png';
import presencesIcon from '/resources/presences.png';
import libraryIcon from '/resources/librairie.png';
import conqueteIcon from '/resources/conquete.png';
import documentIcon from '/resources/document.png';
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
import {AnimatedTitle} from "../AnimatedTitle.jsx";

const title = [
    {
        type: "heading1",
        text: "Mes Expériences"
    }
];

export const Experiences = () => {
    return (
        <>

            <div className="experiences-container">
                <ScrollProgressCircle/>

                {/*<div className="spacing"></div>*/}
                <AnimatedTitle titles={title}/>


                <ProjectCard
                    icon={idiaTechIcon}
                    title="Stage en Développement Java et Web-Mining"
                    date="Avril 2024"
                    description="Stage réalisé chez idIA-Tech (idia-tech.com) pour une durée de 2 mois"
                    longDescription="Durant mon stage chez Idia Tech, j'ai participé au développement de scripts en Java pour
                    automatiser l'importation de produits depuis des sites fournisseurs vers des plateformes de e-commerce telles que Prestashop.
                    J'ai également contribué à l'amélioration de scripts existants et à divers projets internes de l'entreprise, tels que le site web,
                    le chatbot, et les scripts de prospection. Cette expérience m'a permis de renforcer mes compétences en programmation Java, Python et PHP."
                    roles={[
                        "Suivre le cahier des charges pour programmer des scripts d'automatisation d'imports de données.",
                        "Programmer en Java des fonctionnalités sur le projet Grimport Crawler.",
                        "Contribuer à d'aures projets en court de développement (chatBot, site web, scripts) .",
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

                {/* @TODO*/}
                <ProjectCard
                    icon={aerienIcon}
                    title="Simulateur de Trafic Aérien"
                    date="Janvier 2024"
                    description=""
                    longDescription="Développement d'un simulateur de trafic aérien en Java, incluant une interface graphique
paramétrable en temps réel et utilisant des concepts avancés comme le calcul de
trajectoire, l’évitement des collisions et la concurrence en multithreading"
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
                    icon={applicationPedagogiqueIcon}
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
                    icon={presencesIcon}
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
                    icon={libraryIcon}
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
                    icon={conqueteIcon}
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
                    icon={documentIcon}
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
            </div>

            <div className="spacing"></div>

            <Footer/>
        </>
    );
};
