// import ProfilePicture from "../presentation/ProfilePicture.jsx";
// import ParagraphPresentation from "../presentation/ParagraphPresentation.jsx";
// import AnimatedTitle from "../AnimatedTitle.jsx";
// import Buttons from '../presentation/Buttons.jsx';
// import Footer from "../Footer.jsx";
// import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
// import ParcoursChronologique from "../presentation/ParcoursChronologique.jsx";
// import ImageWithText from "../ImageWithText.jsx";
// import ProfileStats from "../presentation/ProfileStats.jsx";
// import "./Presentation.scss";

import ParagraphPresentation from "/src/components/presentation/ParagraphPresentation.jsx";
import ParcoursChronologique from "/src/components/presentation/ParcoursChronologique.jsx";
import ProfilePicture from "/src/components/presentation/ProfilePicture.jsx";
import ScrollProgressCircle from "/src/components/ScrollProgressCircle.jsx";
import ProfileStats from "/src/components/presentation/ProfileStats.jsx";
import Buttons from '/src/components/presentation/Buttons.jsx';
import AnimatedTitle from "/src/components/AnimatedTitle.jsx";
import ImageWithText from "/src/components/ImageWithText.jsx";
import Footer from "/src/components/Footer.jsx";
import "/src/components/pages/Presentation.scss";

import {motion} from "framer-motion";

const LINKEDIN_LINK = "https://www.linkedin.com/in/eric-adelaide-beaubrun/";

const CV_FILENAME = "cv.pdf";

const iconsUrl = "https://skillicons.dev/icons?i=";

const stats = [
    {number: 5, label: "Années d'expérience"},
    {number: 100, label: "Projets réalisés"},
    {number: 25, label: "Sites web"}
];

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
    Je m'appelle Eric, j'ai 23 ans et je suis passionné par l'informatique depuis plus d'une dizaine d'années. Actuellement titulaire d'une licence en informatique, j'ai pu explorer de nombreux domaines telle que le web, le logiciel, le réseau, la data, l'intelligence artificielle et bien d'autres encore...
    `

    const text_presentation3 = `
    Mon objectif est donc de devenir développeur full stack, spécialisé dans le développement web (Java/React), tout en explorant également les domaines de la cybersécurité, du DevOps et du développement d'applications mobiles.
    `

    // const text_presentation = `
    // À long terme, je souhaite obtenir un diplôme d'ingénieur BAC+5 et décrocher un poste en CDI en tant que développeur full stack.
    // Actuellement, je suis à la recherche d'une alternance de 24 à 36 mois pour affiner mes compétences dans ce domaine et
    // intégrer une école d'ingénieur en Île-de-France.
    // `

    const text_presentation2 = `
    Je possède des compétences solides en back-end avec Java et Spring, ainsi qu'en front-end avec JavaScript/TypeScript et React. Étant curieux de nature, je suis également très intéressé par l'apprentissage d'autres technologies comme Django et Next.js.
    `

    const text_presentation_4 = [
        `
        Ma passion pour le développement est née au lycée, lorsque j'ai commencé à programmer sur ma calculatrice. J'ai fait mes premières créations, allant de simples petits programmes à des jeux plus complexes comme le Puissance 4. Cette expérience a renforcé mon envie de m'orienter vers une filière informatique pour apprendre à résoudre des problèmes et à automatiser des tâches.
        `
    ];

    const titles = [
        {
            type: "heading1",
            text: "Étudiant Développeur Full Stack"
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
                        linkBtn1={LINKEDIN_LINK}
                        textBtn2="CV"
                        linkBtn2={"/resources/" + CV_FILENAME}
                    />
                </motion.div>

                <div className="spacing"></div>
                <div className="spacing"></div>
                <div className="wave"></div>
            </div>

            <h2 id="paragraph-text-header">Bienvenue sur mon portfolio !</h2>
            <ParagraphPresentation text={text_presentation1} direction={"left"}/>
            <ParagraphPresentation text={text_presentation2} direction={"left"}/>
            <ParagraphPresentation text={text_presentation3} direction={"right"}/>
            <div className="wave-reverse"></div>

            <div>
                <div className={"spacing"}></div>
                <div className={"spacing"}></div>
                <h2 className="titre-presentation">En quelques chiffres</h2>
                <ProfileStats stats={stats}/>
            </div>

            <div className="spacing"></div>
            <div className="spacing"></div>

            <ImageWithText images={carouselImages} paragraphs={text_presentation_4}/>
            <h2 className="titre-presentation">Mon parcours</h2>
            <ParcoursChronologique/>

            <Buttons
                textBtn1="Compétences"
                linkBtn1="/#/competences"
                textBtn2="Experiences"
                linkBtn2="/#/experiences"
            />
            <div className="spacing"></div>

            <Footer/>
        </>
    );
};

export default Presentation;
