import "./Presentation.scss";
import {motion} from "framer-motion";
import ProfilePicture from "../presentation/ProfilePicture.jsx";
import ParagraphPresentation from "../presentation/ParagraphPresentation.jsx";
import AnimatedTitle from "../AnimatedTitle.jsx";
import Buttons from '../presentation/Buttons.jsx';
import Footer from "../Footer.jsx";
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
import ParcoursChronologique from "../presentation/ParcoursChronologique.jsx";
import ImageWithText from "../ImageWithText.jsx";

const iconsUrl = "https://skillicons.dev/icons?i=";

const carouselImages = [
    iconsUrl + 'java',
    iconsUrl + 'devto',
    iconsUrl + 'rust',
    iconsUrl + 'htmx',
    iconsUrl + 'js',
    iconsUrl + 'py',
    iconsUrl + 'linux',
    iconsUrl + 'c',
    iconsUrl + 'powershell',
];

const Presentation = () => {

    const text_presentation1 = `
    Bienvenue sur mon portfolio ! Je m'appelle Eric, j'ai 23 ans et je suis passionné 
    d'informatique depuis mon plus jeune âge. Titulaire d'une licence en informatique, mon objectif est de 
    devenir ingénieur développeur full stack, spécialisé dans le développement web, tout en explorant également les domaines du 
    développement d'applications mobiles et de bureau.
    `

    const text_presentation2 = `
    Je possède des compétences solides en Back-End avec Java et Spring, ainsi qu'en Front-End, principalement avec React 
    et un peu avec Angular. Étant curieux de nature, je suis également intéressé par l'apprentissage d'autres technologies comme Django.
    `

    const text_presentation3 = `
    À long terme, je souhaite obtenir un diplôme d'ingénieur BAC+5 et décrocher un poste en CDI en tant que développeur full stack. 
    Actuellement, je suis à la recherche d'une alternance de 24 à 36 mois pour affiner mes compétences dans ce domaine et 
    intégrer une école d'ingénieur en Île-de-France.
    `

    const text_presentation_4 = [
        "Ma passion pour l'informatique est née au lycée, lorsque j'ai commencé à programmer sur ma calculatrice (TI 82 Advanced). " +
        "J'ai créé mes premiers programmes, allant de simples jeux à des jeux plus complexes comme Puissance 4. " +
        "Cette première expérience en programmation a renforcé mon envie de m'orienter vers une filière informatique afin d'apprendre " +
        "à résoudre des problèmes plus complexes et d'automatiser des tâches."
    ];

    const titles = [
        {
            type: "heading1",
            text: "Étudiant en Master développement full stack"
        },
        {
            type: "heading2",
            text: "Eric ADELAIDE BEAUBRUN"
        }
    ];

    return (
        <>
            <ScrollProgressCircle/>

            <div className="area">
                <AnimatedTitle titles={titles}/>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}>
                    <ProfilePicture/>

                    <Buttons
                        textBtn1="Linkedin"
                        linkBtn1="https://www.linkedin.com/in/eric-adelaide-beaubrun/"
                        textBtn2="CV"
                        linkBtn2="/portfolio/resources/cv.pdf"
                    />
                </motion.div>

                <div className="spacing"></div>
                <div className="spacing"></div>
                <div className="wave"></div>
            </div>


            <ParagraphPresentation text={text_presentation1} direction={"left"}/>
            <ParagraphPresentation text={text_presentation2} direction={"left"}/>
            <ParagraphPresentation text={text_presentation3} direction={"right"}/>
            <div className="wave-reverse"></div>

            <div className="spacing"></div>
            <div className="spacing"></div>
            <div className="spacing"></div>

            <ImageWithText images={carouselImages} paragraphs={text_presentation_4}/>
            <div className="spacing"></div>

            <h2 id="titre-parcours">Mon parcours</h2>
            <ParcoursChronologique/>

            <Buttons
                textBtn1="Compétences"
                linkBtn1="/portfolio/#/competences"
                textBtn2="Experiences"
                linkBtn2="/portfolio/#/experiences"
            />
            <div className="spacing"></div>

            <Footer/>
        </>
    );
};

export default Presentation;
