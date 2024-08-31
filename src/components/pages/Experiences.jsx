// import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
// import ProjectCard from "../experiences/ProjectCard.jsx";
// import AnimatedTitle from "../AnimatedTitle.jsx";
// import Footer from "../Footer.jsx";
// import "./Experiences.scss"

import ScrollProgressCircle from "/src/components/ScrollProgressCircle.jsx";
import ProjectCard from "/src/components/experiences/ProjectCard.jsx";
import AnimatedTitle from "/src/components/AnimatedTitle.jsx";
import Footer from "/src/components/Footer.jsx";
import "/src/components/pages/Experiences.scss"

// Icons
import idiaTechIcon from '/resources/idia-tech.png';
import aerienIcon from '/resources/aerien.png';
import applicationPedagogiqueIcon from '/resources/application_pedagogique.png';
import presencesIcon from '/resources/presences.png';
import libraryIcon from '/resources/librairie.png';
import conqueteIcon from '/resources/conquete.png';
import documentIcon from '/resources/document.png';

import aerienIcon1 from '/resources/projects/aerien1.gif';
import aerienIcon2 from '/resources/projects/aerien2.gif';
import aerienIcon3 from '/resources/projects/aerien3.gif';
import aerienIcon4 from '/resources/projects/aerien4.gif';

import learnPyIcon1 from '/resources/projects/learn_py1.gif';
import learnPyIcon2 from '/resources/projects/learn_py2.gif';
import learnPyIcon3 from '/resources/projects/learn_py3.gif';

import conqueteIcon1 from '/resources/projects/conquete1.gif';
import conqueteIcon2 from '/resources/projects/conquete2.gif';
import conqueteIcon3 from '/resources/projects/conquete3.gif';
import conqueteIcon4 from '/resources/projects/conquete4.gif';
import conqueteIcon5 from '/resources/projects/conquete5.gif';
import conqueteIcon6 from '/resources/projects/conquete6.gif';


const title = [
    {
        type: "heading1",
        text: "Mes Expériences"
    }
];

const Experiences = () => {
    return (
        <>
            <div className="experiences-container">
                <ScrollProgressCircle/>

                <div className='background-title'>
                    <AnimatedTitle titles={title}/>
                </div>

                <ProjectCard
                    isCompleted={false}
                    icon={idiaTechIcon}
                    title="Stage en Développement Java et Web-Mining"
                    date="Avril 2024"
                    description="Stage de 2 mois réalisé chez idIA-Tech (idia-tech.com)."
                    longDescription="Durant mon stage chez Idia Tech, j'ai participé au développement de scripts en Java pour
                    automatiser l'importation de produits depuis des sites fournisseurs vers des plateformes de e-commerce telles que Prestashop.
                    J'ai également contribué à l'amélioration de scripts existants et à divers projets internes de l'entreprise, tels que le site web,
                    le chatbot, et les scripts de prospection. Cette expérience m'a permis de renforcer mes compétences en programmation Java, Python et PHP."
                    roles={[
                        "Programmer des scripts (Java) permettant d’extraire d’importer et de traiter des données depuis des sites web.",
                        "Suivre le cahier des charges pour programmer des scripts d'automatisation d'imports de données.",
                        "Programmer en Java des fonctionnalités sur le projet Grimport Crawler.",
                        "Contribuer à d'aures projets en court de développement (chatBot, site web, scripts).",
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
                    amountPerson={4}
                    // isCompleted={true}
                    isCompleted={false}
                    images={[aerienIcon1, aerienIcon2, aerienIcon3, aerienIcon4]}
                    githubLink="https://github.com/ericbeaubrun/aerien"
                    icon={aerienIcon}
                    title="Simulateur de Trafic Aérien"
                    date="Janvier 2024"
                    description="Projet en équipe réalisé en dernière année de licence."
                    longDescription="Développement d'un simulateur de trafic aérien en Java, incluant une interface graphique
paramétrable en temps réel et utilisant des concepts avancés comme le calcul de
trajectoire, l’évitement des collisions et la concurrence en multithreading."
                    roles={[
                        "Mise en place de l'interface graphique.",
                        "Programmation des algorithmes de traitement."
                    ]}
                    skills={[
                        'Java',
                        'Conception UI/UX',
                        'Multithreading'
                    ]}
                />

                <ProjectCard
                    amountPerson={5}
                    // isCompleted={true}
                    isCompleted={false}
                    images={[learnPyIcon1, learnPyIcon2, learnPyIcon3]}
                    githubLink="https://github.com/ericbeaubrun/learn_py_app"
                    icon={applicationPedagogiqueIcon}
                    title="Application Pédagogique pour les Étudiants"
                    date="Octobre 2023"
                    description=""
                    longDescription="Développement d'une application interactive en Python pour enseigner la programmation
aux étudiants. L'application inclut un éditeur de code, la génération de feedbacks en temps
réel, et le stockage des statistiques des étudiants au format JSON."
                    roles={[
                        "Mise en place de l'interface graphique.",
                        "Programmation des fonctionnalités essentielles.",
                        "Sécurisation de l'application et anti-triche."
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
                    amountPerson={3}
                    isCompleted={false}
                    icon={presencesIcon}
                    title="Système de Gestion de Présences des Étudiants"
                    date="Septembre 2023"
                    description="Projet de Base de Données et Réseau réalisé en dernière année de licence."
                    longDescription="Création d'un système en Java et Python pour le suivi des présences des étudiants via des
cartes NFC. Le projet inclut la mise en place d'un serveur Java, une base de données
PostgreSQL, et une interface de communication réseau (TCP/IP)."
                    roles={[
                        "Modélisation et mise en place de la base de données.",
                        "Développement intégral du serveur en Java.",
                        "Sécurisation et gestion des erreurs coté serveur.",
                        "Programmation des requêtes SQL."
                    ]}
                    skills={[
                        'Java',
                        'Python',
                        'TCP/IP',
                        'Cyber-sécurité',
                        'SQL',
                        'PostgreSQL'
                    ]}
                />

                <ProjectCard
                    amountPerson={2}
                    isCompleted={false}
                    icon={libraryIcon}
                    title="Librairie en Ligne"
                    date="Mars 2022"
                    description="Projet de Développement Web réalisé en deuxième année de licence."
                    longDescription="Projet visant à créer un site web dynamique permettant la recherche et la consultation de livres via appels API,
                    tout en mettant en œuvre des fonctionnalités telles que l'affichage de graphiques statistiques, le stockage des livres consultés par les utilisateurs,
                    et la gestion des cookies pour personnaliser l'expérience utilisateur."
                    roles={[
                        "Programmation du Back-End du site",
                        "Ajout de fonctionnalités de recherches de livres avec appels API.",
                        "Gestion des cookies et ajout  d'un historique utilisateur.",
                        "Optimisations des performances du site."
                    ]}
                    skills={[
                        'PHP',
                        'HTML',
                        'CSS',
                        'Javascript',
                        'JSON',
                        'XML'
                    ]}
                />

                <ProjectCard
                    amountPerson={3}
                    // isCompleted={true}
                    isCompleted={false}
                    images={[conqueteIcon1, conqueteIcon2, conqueteIcon3, conqueteIcon4, conqueteIcon5, conqueteIcon6]}
                    githubLink="https://github.com/ericbeaubrun/conquete"
                    icon={conqueteIcon}
                    title="Jeu de Plateau Stratégique Multijoueur"
                    date="Janvier 2022"
                    description="Projet de Génie Logiciel réalisé en équipe en deuxième année de licence."
                    longDescription="Création d'un jeu de plateau stratégique en Java, intégrant une IA pour des parties
multijoueur locales, la gestion des sauvegardes et la génération de graphiques statistiques
des parties. Traitements XML et tests unitaires réalisés avec JUnit."
                    roles={[
                        "Développement de l'interface graphique.",
                        "Programmation des algorithmes de traitement.",
                        "Programmation du comportement de l'IA contre le joueur.",
                        "Ajout des fonctionnalités de sauvegarde.",
                        "Réalisation des tests unitaires."
                    ]}
                    skills={[
                        'Java',
                        'Intelligence Artificielle',
                        'JUnit',
                        'Conception UI/UX'
                    ]}
                />
                <ProjectCard
                    isCompleted={false}
                    icon={documentIcon}
                    title="Logiciel de Gestion de Documents"
                    date="Octobre 2021"
                    description=""
                    longDescription="Développement d'un outil en Java simplifiant la manipulation, l’extraction et le traitement des métadonnées
                    de documents. Navigation dans une arborescence de fichiers et traitement de fichiers XML."
                    roles={[
                        "Développement de l'intégralité de l'application."
                    ]}
                    skills={[
                        'Java',
                        'XML',
                        'Conception UI/UX'
                    ]}
                />
            </div>

            <Footer/>
        </>
    );
};

export default Experiences;
