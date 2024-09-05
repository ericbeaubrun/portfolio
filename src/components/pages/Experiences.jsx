import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
import ProjectCard from "../experiences/ProjectCard.jsx";
import AnimatedTitle from "../AnimatedTitle.jsx";
import Footer from "../Footer.jsx";
import "./Experiences.scss"

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


const title = [{
    type: "heading1", text: "Mes expériences en développement"
}];

const Experiences = () => {
    return (<>
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
                description="Stage de 2 mois réalisé chez idIA-Tech."
                longDescription="Durant mon stage chez idIA-Tech, j'ai participé au développement de scripts en Java pour
                    automatiser l'importation de produits depuis des sites fournisseurs vers des plateformes de e-commerce telles que Prestashop.
                    J'ai également contribué à l'amélioration de scripts existants et à divers projets internes de l'entreprise, tels que le site web,
                    le chatbot, et les scripts de prospection. Cette expérience m'a permis de renforcer mes compétences en programmation Java, Python et PHP."
                roles={["Programmer des scripts (Java) permettant d’extraire d’importer et de traiter des données depuis des sites web.", "Suivre le cahier des charges pour programmer des scripts d'automatisation d'imports de données.", "Programmer en Java des fonctionnalités sur le projet Grimport Crawler.", "Contribuer à d'aures projets en court de développement (chatBot, site web, scripts).",]}
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

                description="Réalisé dans le cadre d'un projet de Software Engeniering en dernière année de licence."

                longDescription="Ce simulateur de trafic aérien a pour objectif de modéliser les déplacements et
                    interactions des avions dans un espace aérien contrôlé. Développé en Java, il utilise le multithreading
                    pour gérer les avions simultanément. La simulation est représentée dans une interface graphique 2D
                    où l'utilisateur peut observer les trajectoires des avions, les données des aéroports,
                    ainsi que des informations en temps réel sur la position, la vitesse et l'altitude des appareils.
                    Le système inclut également des mécanismes pour éviter les collisions et gérer les atterrissages d'urgence.
                    Les vols sont générés à partir de données prédéfinies et gérés dynamiquement. Le projet a été conçu avec une
                    approche modulaire, incluant des calculs complexes pour la gestion des avions (vitesse, carburant, altitude)
                    et un algorithme optimisé pour éviter les collisions."

                roles={["Développement d'une interface graphique interactive.",
                    "Modélisation du système et programmation des algorithmes en Java.",
                    "Participation à la rédaction de la documentation technique et intégration continue via GitHub."]}

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
aux étudiants. Le jeu est structuré en chapitres et niveaux avec une difficulté progressive, abordant des notions telles
que les types de données, les boucles, les variables et les conditions. L’utilisateur code directement dans un éditeur intégré au jeu.
L'application inclut la génération de feedbacks en temps réel, et le stockage des statistiques des étudiants au format JSON.
"
                roles={[
                    "Développement d’une interface graphique interactive avec PyQT6.",
                    "Utilisation de QScintilla pour créer un éditeur de code interactif.",
                    "Création d’un système de niveaux progressifs.",
                    "Vérification de la syntaxe des scripts utilisateurs.",
                    "Sécurisation de l'application et anti-triche."]}
                skills={[
                    'Python',
                    'PyQT6',
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
                description=""
                longDescription="Création d'un système réseau-client TCP/IP avec un programme client en Python et un serveur en Java pour le suivi
                des présences des étudiants via des cartes NFC. Le serveur traite ces données, interagit avec une base de données PostgreSQL via JDBC,
                et enregistre les présences dans une table dédiée. Le système gère également les erreurs (carte invalide, lecteur défectueux, etc.),
                et les enseignants peuvent consulter ces données via une interface web reliée à la même base de données.
                Le site web permet également l'authentification des utilisateurs et la consultation des rapports de présence."
                roles={[
                    "Modélisation et mise en place de la base de données.",
                    "Développement d’un serveur Java pour gérer la communication entre lecteurs de carte et base de données.",
                    "Sécurisation et gestion des erreurs côté serveur.",
                    "Réalisation de tests réseaux.",
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
                                tout en mettant en œuvre des fonctionnalités telles que l'affichage de graphiques statistiques, le stockage des livres consultés
                                par les utilisateurs, et la gestion des cookies pour personnaliser l'expérience utilisateur."
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
                description="Projet de Software Engineering réalisé en deuxième année de licence."
                longDescription="Création d'un jeu de plateau stratégique en Java. Chaque joueur contrôle un territoire délimité par des cases de sa couleur,
                    et doit gérer l’or, construire des structures et commander des soldats.
                    Le système de jeu inclut une économie basée sur les ressources acquises et l'or gagné à chaque tour.
                    Les soldats peuvent être déplacés pour conquérir des cases adverses. Le jeu inclut également des fonctionnalités de sauvegarde
                    et de chargement de partie, la possibilité de jouer en multijoueur local, une IA qui prend des décisions contre le joueur
                    et la génération de graphiques statistiques des parties."
                roles={[
                    "Développement de l'interface graphique avec les options de jeu, les actions du joueur et l'affichage des informations de la partie.",
                    "Programmation du comportement de l'IA capable de prendre des décisions stratégiques contre le joueur.",
                    "Implémentation des mécanismes stratégiques tels que la gestion des ressources et la conquête de territoire.",
                    "Implémentation d'un mécanisme de sérialisation des données pour permettre de sauvegarder et reprendre des parties en cours.",
                    "Réalisation des tests unitaires avec JUnit."
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
                roles={["Développement de l'intégralité de l'application."]}
                skills={[
                    'Java',
                    'XML',
                    'Conception UI/UX'
                ]}
            />
        </div>

        <Footer/>
    </>);
};

export default Experiences;
