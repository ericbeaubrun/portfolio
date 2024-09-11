import {Skills} from '../competences/Skills.jsx'
import Footer from "../Footer.jsx";
import AnimatedTitle from "../AnimatedTitle.jsx";
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
import "./Competences.scss"
import {motion} from "framer-motion";
// import {TypeAnimation} from "react-type-animation";

const Competences = () => {

    const url = 'https://skillicons.dev/icons?i=';

    const skillsBackEnd = [
        {
            startYear: "2021",
            name: 'Java',
            icon: url + "java",
            description: "Je maîtrise particulièrement ce langage, ayant travaillé sur plusieurs projets professionnels et académiques. " +
                "Je suis capable de développer des applications complexes, qu'elles soient web ou de bureau, en appliquant les bonnes pratiques de programmation " +
                "telles que les principes SOLID, tout en optimisant la performance et la maintenabilité du code."
        },
        {
            startYear: "2020",
            name: "Python",
            icon: url + "py",
            description: "Je maîtrise Python pour le développement de scripts, la création d'interfaces graphiques, l'extraction et le traitement de données, " +
                "ainsi que pour l'automatisation de tâches. Mon expérience comprend également la manipulation de bibliothèques populaires et l'écriture de code propre et maintenable."
        },
        {
            startYear: "2024",
            name: "Spring",
            icon: url + "spring",
            description: "Formé en autodidacte, j'ai acquis une solide compréhension des concepts de base de Spring, y compris le modèle MVC, Spring Data, Spring Security " +
                "et la création d'API REST. Je suis à l'aise avec le développement d'applications Java robustes et sécurisées."
        },
        {
            startYear: "2021",
            name: "PHP",
            icon: url + "php",
            description: "Je sais utiliser PHP pour développer des sites web dynamiques simples. Cependant, mes connaissances en PHP sont basiques car " +
                "j'ai eu peu d'occasion de l'utiliser durant mes projets académiques et professionnels."
        },
        {
            startYear: "2020",
            name: "C",
            icon: url + "c",
            description: "Durant ma scolarité universitaire, j'ai beaucoup utilisé le langage C. Je suis à l'aise avec les pointeurs, la gestion de la mémoire, " +
                "ainsi que les principes d'algorithmie et les structures de données. Mon expertise en C me permet de comprendre les concepts fondamentaux de la programmation bas niveau."
        },
        {
            startYear: "2024",
            name: "MySQL",
            icon: url + "mysql",
            description: "Je sais créer et manipuler des bases de données relationnelles en utilisant des requêtes SQL efficaces pour " +
                "mettre en place des applications CRUD avec des langages comme Java, Node.js ou PHP. Mon expérience comprend également l'optimisation des requêtes pour des performances accrues."
        },
        {
            startYear: "2023",
            name: "PostgreSQL",
            icon: url + "postgres",
            description: "Je suis capable de créer et gérer des bases de données relationnelles avec PostgreSQL, en utilisant des requêtes SQL avancées pour " +
                "concevoir et maintenir des applications CRUD robustes. Mon expertise inclut également la gestion des transactions et l'optimisation des performances."
        },
        {
            startYear: "2024",
            name: "Node.js",
            icon: url + "nodejs",
            description: "En cours de formation, je sais déjà mettre en place le backend d'un site web avec Node.js, y compris la gestion des routes, " +
                "la manipulation des bases de données, et l'intégration d'API REST."
        },
    ];

    const skillsFrontEnd = [
        {
            startYear: "2019",
            name: "HTML",
            icon: url + "html",
            description: "Je maîtrise la structure des pages web, l'utilisation des balises, et les bonnes pratiques pour créer des documents HTML valides. " +
                "Je suis également capable de structurer des pages complexes en veillant à l'accessibilité et à la compatibilité avec différents navigateurs."
        },
        {
            startYear: "2019",
            name: "CSS",
            icon: url + "css",
            description: "Je sais développer et améliorer l'apparence d'un site web selon des besoins spécifiques. Bien que je ne sois pas Web-Designer, " +
                "je maîtrise les bases du CSS, la création de mises en page responsive, et la réalisation d'animations simples pour rendre les interfaces utilisateurs plus dynamiques."
        },
        {
            startYear: "2023",
            name: "JavaScript",
            icon: url + "js",
            description: "Ayant un niveau intermédiaire en JavaScript, je maîtrise la manipulation du DOM, la gestion des événements, et l'implémentation " +
                "de fonctionnalités interactives. Je suis à l'aise avec la création de scripts pour améliorer l'expérience utilisateur sur les sites web."
        },
        {
            startYear: "2023",
            name: "React",
            icon: url + "react",
            description: "Formé en autodidacte, je maîtrise les aspects techniques de React, y compris la création de composants réutilisables et l'utilisation " +
                "des hooks basiques. Je suis à l'aise pour construire des interfaces utilisateur dynamiques et maintenables en suivant les bonnes pratiques de développement."
        },
        {
            startYear: "2024",
            name: "Vite",
            icon: url + "vite",
            description: "J'ai appris à utiliser Vite pour optimiser le processus de développement front-end."
        },
        {
            startYear: "2024",
            name: "Sass",
            icon: url + "sass",
            description: "J'utilise Sass pour écrire des styles CSS plus maintenables et modulaires."
        },
        {
            startYear: "2024",
            name: "Typescript",
            icon: url + "ts",
            description: "Je suis capable de typer mon code JavaScript avec TypeScript, ce qui améliore la fiabilité et la maintenabilité de mes projets front-end."
        },
    ];

    const skillsSoftwares = [
        {
            startYear: "2022",
            name: 'Git',
            icon: url + 'git',
            description: "Je maîtrise Git pour la gestion de versions, permettant une collaboration fluide et efficace sur des projets en équipe."
        },
        {
            startYear: "2024",
            name: 'Figma',
            icon: url + 'figma',
            description: "Je sais utiliser Figma pour maquetter la conception graphique d'interfaces utilisateur principalement pour du " +
                "Web et Mobile."
        },
        {
            startYear: "2022",
            name: 'IntelliJ IDEA',
            icon: url + 'idea',
            description: "J'utilise IntelliJ IDEA pour le développement Java, en exploitant ses outils de débogage et ses fonctionnalités avancées  " +
                "pour améliorer ma productivité."
        },
        {
            startYear: "2022",
            name: 'WebStorm',
            icon: url + 'webstorm',
            description: "WebStorm est mon environnement de développement principal pour le développement en JavaScript et TypeScript."
        },
        {
            startYear: "2022",
            name: 'Notion',
            icon: url + 'notion',
            description: "Je suis à l'aise avec Notion pour organiser mon travail, gérer mes projets, prendre des notes, et collaborer avec " +
                "les équipes " +
                "de développeur. C'est mon outil favori pour rester productif et organisé."
        },
        {
            startYear: "2021",
            name: 'Photoshop',
            icon: url + 'ps',
            description: "Je sais utiliser Photoshop pour la création et l'édition d'images, y compris la retouche photo, la conception " +
                "graphique, et la préparation des visuels pour le web."
        },
        {
            startYear: "2021",
            name: 'Premiere Pro',
            icon: url + 'pr',
            description: "Je maîtrise Premiere Pro pour le montage vidéo et l'intégration d'effets visuels. Je suis capable de " +
                "produire des vidéos professionnelles pour divers projets."
        },
    ];

    const title = [
        {
            type: "heading1",
            text: "Mes compétences"
        }
    ];

    const DEFAULT_TYPING_SPEED = 5000;

    return (
        <>
            <div className="all-skills-wrapper">
                <ScrollProgressCircle/>


                <div className='background-title'>
                    <AnimatedTitle titles={title}/>
                </div>

                {/*<div className="type-animation-text">*/}
                {/*    <TypeAnimation*/}
                {/*        sequence={*/}
                {/*            [*/}
                {/*                "Excellente maîtrise des langages de programmation web (HTML5, CSS3, JavaScript/ES6+)",*/}
                {/*                DEFAULT_TYPING_SPEED,*/}

                {/*                "Compétences dans l'utilisation de frameworks de développement front-end, en particulier React.",*/}
                {/*                DEFAULT_TYPING_SPEED,*/}

                {/*                "Compréhension des principes de développement d’API, en particulier avec Spring.",*/}
                {/*                DEFAULT_TYPING_SPEED,*/}

                {/*                "Expérience dans le développement back-end avec Java.",*/}
                {/*                DEFAULT_TYPING_SPEED,*/}

                {/*                "Expérience dans la mise en place et la gestion de bases de données relationnelles (PostgreSQL, MySQL).",*/}
                {/*                DEFAULT_TYPING_SPEED,*/}

                {/*                // "Capacité à travailler en équipe tout en faisant preuve d’autonomie et de rigueur.",*/}
                {/*                // DEFAULT_TYPING_SPEED,*/}
                {/*                //*/}
                {/*                // "Capacité à concevoir des interfaces utilisateur complexes.",*/}
                {/*                // DEFAULT_TYPING_SPEED,*/}
                {/*            ]*/}
                {/*        }*/}
                {/*        deletionSpeed={130}*/}
                {/*        speed={{type: 'keyStrokeDelayInMs', value: 20}}*/}
                {/*        repeat={Infinity}*/}
                {/*    />*/}
                {/*</div>*/}


                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}>

                    <div className="all-skills-container">
                        <hr className="skills-divider"/>
                        <Skills title={"Back-End"} skills={skillsBackEnd}/>

                        <hr className="skills-divider"/>
                        <Skills title={"Front-End"} skills={skillsFrontEnd}/>

                        <hr className="skills-divider"/>
                        <Skills title={"Autres outils et logiciels"} skills={skillsSoftwares}/>
                    </div>

                </motion.div>


            </div>
            <Footer/>
        </>
    );
};

export default Competences;
