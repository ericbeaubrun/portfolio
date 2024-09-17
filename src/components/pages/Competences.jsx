import {Skills} from '../competences/Skills.jsx'
import Footer from "../Footer.jsx";
import AnimatedTitle from "../AnimatedTitle.jsx";
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
import "./Competences.scss"
import {motion} from "framer-motion";
// import {TypeAnimation} from "react-type-animation";

import content from "../../content/competences.json";

const Competences = () => {

    const url = 'https://skillicons.dev/icons?theme=light&i=';
    // const url = 'https://skillicons.dev/icons?i=';

    const title = [
        {
            type: "heading1",
            text: content["title "]
        }
    ];

    const skillsBackEnd = [
        {
            icon: url + "java",
            startYear: content.backend.competence1.startYear,
            name: content.backend.competence1.name,
            description: content.backend.competence1.description
        },
        {
            icon: url + "py",
            startYear: content.backend.competence2.startYear,
            name: content.backend.competence2.name,
            description: content.backend.competence2.description
        },
        {
            icon: url + "spring",
            startYear: content.backend.competence3.startYear,
            name: content.backend.competence3.name,
            description: content.backend.competence3.description
        },
        {
            icon: url + "php",
            startYear: content.backend.competence4.startYear,
            name: content.backend.competence4.name,
            description: content.backend.competence4.description
        },
        // {
        //     icon: url + "c",
        //     startYear: content.backend.competence5.startYear,
        //     name: content.backend.competence5.name,
        //     description: content.backend.competence5.description
        // },
        {
            icon: url + "mysql",
            startYear: content.backend.competence6.startYear,
            name: content.backend.competence6.name,
            description: content.backend.competence6.description
        },
        {
            icon: url + "postgres",
            startYear: content.backend.competence7.startYear,
            name: content.backend.competence7.name,
            description: content.backend.competence7.description
        },
        {
            icon: url + "nodejs",
            startYear: content.backend.competence8.startYear,
            name: content.backend.competence8.name,
            description: content.backend.competence8.description
        },
    ];

    const skillsFrontEnd = [
        // {
        //     icon: url + "html",
        //     startYear: content.frontend.competence1.startYear,
        //     name: content.frontend.competence1.name,
        //     description: content.frontend.competence1.description
        // },
        // {
        //     icon: url + "css",
        //     startYear: content.frontend.competence2.startYear,
        //     name: content.frontend.competence2.name,
        //     description: content.frontend.competence2.description
        // },
        {
            icon: url + "js",
            startYear: content.frontend.competence3.startYear,
            name: content.frontend.competence3.name,
            description: content.frontend.competence3.description
        },
        {
            icon: url + "ts",
            startYear: content.frontend.competence7.startYear,
            name: content.frontend.competence7.name,
            description: content.frontend.competence7.description
        },
        {
            icon: url + "sass",
            startYear: content.frontend.competence6.startYear,
            name: content.frontend.competence6.name,
            description: content.frontend.competence6.description
        },
        {
            icon: url + "react",
            startYear: content.frontend.competence4.startYear,
            name: content.frontend.competence4.name,
            description: content.frontend.competence4.description
        },
        // {
        //     icon: url + "vite",
        //     startYear: content.frontend.competence5.startYear,
        //     name: content.frontend.competence5.name,
        //     description: content.frontend.competence5.description
        // },


    ];

    const skillsSoftwares = [
        {
            icon: url + 'git',
            startYear: content.softwares.competence1.startYear,
            name: content.softwares.competence1.name,
            description: content.softwares.competence1.description
        },
        {
            icon: url + 'figma',
            startYear: content.softwares.competence2.startYear,
            name: content.softwares.competence2.name,
            description: content.softwares.competence2.description
        },
        {
            icon: url + 'idea',
            startYear: content.softwares.competence3.startYear,
            name: content.softwares.competence3.name,
            description: content.softwares.competence3.description
        },
        {
            icon: url + 'webstorm',
            startYear: content.softwares.competence4.startYear,
            name: content.softwares.competence4.name,
            description: content.softwares.competence4.description
        },
        {
            icon: url + 'notion',
            startYear: content.softwares.competence5.startYear,
            name: content.softwares.competence5.name,
            description: content.softwares.competence5.description
        },
        {
            icon: url + 'ps',
            startYear: content.softwares.competence6.startYear,
            name: content.softwares.competence6.name,
            description: content.softwares.competence6.description
        },
        {
            icon: url + 'pr',
            startYear: content.softwares.competence7.startYear,
            name: content.softwares.competence7.name,
            description: content.softwares.competence7.description
        },
    ];

    // const DEFAULT_TYPING_SPEED = 5000;

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
