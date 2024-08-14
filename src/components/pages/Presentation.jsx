import "./Presentation.scss";
import {ProfilePicture} from "../presentation/ProfilePicture.jsx";
import {ParagraphPresentation} from "../presentation/ParagraphPresentation.jsx";
import {TitrePresentation} from "../presentation/TitrePresentation.jsx";
import {Buttons} from '../presentation/Buttons.jsx';

import Footer from "../Footer.jsx";
import CenteredImage from "../presentation/CenteredImage.jsx";
import {motion} from "framer-motion";


export const Presentation = () => {

    const text_presentation1 = `Bienvenue sur mon portfolio ! Je m'appelle Eric , j'ai 23 ans et je suis un passionné d'informatique depuis mon plus jeune âge. Actuellement titulaire d'une licence en informatique, mon objectif est de devenir ingénieur développeur full stack, spécialisé dans le développement web, tout en explorant également les domaines du développement d'applications mobiles et de bureau.`
    const text_presentation2 = `Mon parcours a commencé avec ma calculatrice TI 82 Advanced, où j'ai créé mes premiers programmes, allant de simples outils à des jeux plus complexes comme Puissance 4. Cette expérience a renforcé mon envie de résoudre des problèmes et d'automatiser des tâches, deux aspects qui me fascinent particulièrement dans l'informatique.`
    const text_presentation3 = `Je possède des connaissances solides en Java, Spring et React, et j'ai également acquis des compétences en Front-End avec React et Angular, ce qui me permet de concevoir des interfaces utilisateurs complexes, dynamiques, et adaptées à tous les écrans (Responsive Design). De plus, je m'intéresse au motion design, à l'UX, et à l'accessibilité pour créer des expériences utilisateurs optimales.`
    const text_presentation4 = `À long terme, je vise à obtenir un diplôme d'ingénieur BAC+5 et à être embauché en CDI en tant que développeur full stack. Actuellement, je recherche une alternance de 24 à 36 mois pour intégrer une école d'ingénieur et continuer à développer mes compétences dans ce domaine.`

    return (
        <>
            <TitrePresentation/>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                className="animated-title">
                <ProfilePicture/>
                <ParagraphPresentation text={text_presentation1}/>
                <ParagraphPresentation text={text_presentation2}/>
                <ParagraphPresentation text={text_presentation3}/>
                <ParagraphPresentation text={text_presentation4}/>
                <CenteredImage alt="Description of the image"/>
                <Buttons/>
            </motion.div>

            <Footer/>
        </>
    );
};
