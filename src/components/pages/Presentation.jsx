import "./Presentation.scss";
import {motion} from "framer-motion";
import ProfilePicture from "../presentation/ProfilePicture.jsx";
import ParagraphPresentation from "../presentation/ParagraphPresentation.jsx";
import AnimatedTitle from "../AnimatedTitle.jsx";
import Buttons from '../presentation/Buttons.jsx';
import Footer from "../Footer.jsx";
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
import ParcoursChronologique from "../presentation/ParcoursChronologique.jsx";

const Presentation = () => {


    const text_presentation1 = `
    Bienvenue sur mon portfolio ! Je m'appelle Eric, j'ai 23 ans et je suis passionné 
    d'informatique depuis mon plus jeune âge. Titulaire d'une licence en informatique, mon objectif est de 
    devenir ingénieur développeur full stack, spécialisé dans le développement web, tout en explorant également les domaines du 
    développement d'applications mobiles et de bureau.
    `

    const text_presentation2 = `
    Ma passion pour l'informatique est née au lycée, lorsque j'ai commencé à programmer sur ma calculatrice (TI 82 Advanced). 
    J'ai créé mes premiers programmes, allant de simples jeux à des jeux plus complexes comme Puissance 4. Cette première expérience 
    en programmation a renforcé mon envie de m'orienter vers une filière informatique afin d'apprendre à résoudre des problèmes plus complexes 
    et d'automatiser des tâches.
    `

    const text_presentation3 = `
    Aujourd'hui, je possède des connaissances solides en Back-End avec Java et Spring, et j'ai également acquis des compétences 
    en Front-End, principalement avec React et dans une moindre mesure avec Angular. Curieux de nature, je souhaite également découvrir 
    de nouvelles technologies, telles que Django.
    `

    const text_presentation4 = `
    À long terme, je vise à obtenir un diplôme d'ingénieur BAC+5 et à être embauché en CDI en tant que développeur full stack. 
    Actuellement, je recherche une alternance de 24 à 36 mois pour continuer à développer mes compétences dans ce domaine 
    et intégrer une école d'ingénieur en Île-de-France.
    `

    const titles = [
        {
            type: "heading1",
            text: "Etudiant en Master développement full stack"
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
                    transition={{duration: 0.5, delay: 0.2}}
                    className="animated-title">
                    <ProfilePicture/>


                    <Buttons
                        textBtn1="Linkedin"
                        linkBtn1="https://www.linkedin.com/in/eric-adelaide-beaubrun/"
                        textBtn2="CV"
                        linkBtn2="/portfolio/resources/cv_eric_adelaide_beaubrun.pdf"
                    />
                </motion.div>

                <div className="spacing"></div>
                <div className="spacing"></div>

            </div>

            <ParagraphPresentation text={text_presentation1} direction={"left"}/>
            <ParagraphPresentation text={text_presentation2} direction={"right"}/>
            <ParagraphPresentation text={text_presentation3} direction={"left"}/>
            <ParagraphPresentation text={text_presentation4} direction={"right"}/>

            <h2 id="titre-parcours">Mon parcours</h2>
            <ParcoursChronologique/>
            {/*<CenteredImage alt="Description of the image"/>*/}

            <Buttons
                textBtn1="Compétences"
                linkBtn1="/portfolio/#/competences"
                textBtn2="Experiences"
                linkBtn2="/portfolio/#/experiences"
            />

            <Footer/>
        </>
    );
};

export default Presentation;
