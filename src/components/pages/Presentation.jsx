import ProfilePicture from "../presentation/ProfilePicture.jsx";
import ParagraphPresentation from "../presentation/ParagraphPresentation.jsx";
import AnimatedTitle from "../AnimatedTitle.jsx";
import Buttons from '../presentation/Buttons.jsx';
import Footer from "../Footer.jsx";
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";
import ParcoursChronologique from "../presentation/ParcoursChronologique.jsx";
import ImageWithText from "../presentation/ImageWithText.jsx";
import ProfileStats from "../presentation/ProfileStats.jsx";
import "./Presentation.scss";
import {motion} from "framer-motion";
import DashedLine from "../presentation/DashedLine.jsx";
import content from '../../content/presentation.json';
import CardContainer from "../presentation/FeaturedCards.jsx";

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
    iconsUrl + 'react',
    iconsUrl + 'py',
    iconsUrl + 'linux',
    iconsUrl + 'nodejs',
    iconsUrl + 'devto',
    iconsUrl + 'htmx',
];

const Presentation = () => {

    const titles = [
        {
            type: "heading1",
            text: content.title
        },
        {
            type: "heading2",
            text: content.subtitle
        }
    ];

    const text_presentation1 = content.introduction.paragraph1;

    const text_presentation2 = content.introduction.paragraph2;

    const text_presentation_4 = [content.passion1];

    return (
        <>
            <ScrollProgressCircle/>
            <div className="presentation-container">
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

                    <div className="wave"></div>
                </div>

                <div className="text-presentation-container">
                    <h2 id="paragraph-text-header">{content.introduction.title}</h2>
                    <img src={"/resources/stars.png"} alt={"Stars divider"} className={"stars-divider"}/>
                    <ParagraphPresentation text={text_presentation1} direction={"left"}/>
                    <ParagraphPresentation text={text_presentation2} direction={"right"}/>
                </div>

                <div className="wave-reverse"></div>

                <div>
                    {/*<h2 className="titre-presentation">Résumé en chiffres</h2>*/}
                    <DashedLine direction="right"/>
                    <DashedLine direction="left"/>
                    <ProfileStats stats={stats}/>
                    <DashedLine direction="right"/>
                    <DashedLine direction="left"/>
                </div>

                <div >
                    {/*TODO*/}
                    {/*<h2 className="titre-presentation">Mes créations</h2>*/}
                    {/*<CardContainer/>*/}
                    <h2 className="titre-presentation"> Pour plus de détails...</h2>
                    <Buttons
                        textBtn1="GitHub"
                        linkBtn1="https://github.com/ericbeaubrun"
                        textBtn2="Me joindre"
                        linkBtn2="/#/contact"
                    />
                    {/*<Buttons*/}
                    {/*    textBtn1="Projets"*/}
                    {/*    linkBtn1="/#/projets"*/}
                    {/*    textBtn2="GitHub"*/}
                    {/*    linkBtn2="https://github.com/ericbeaubrun"*/}
                    {/*/>*/}
                </div>

                <ImageWithText images={carouselImages} paragraphs={text_presentation_4}/>

                <div className="mon-parcours">
                    <h2 className="titre-presentation">Mon Parcours</h2>
                    <ParcoursChronologique/>

                    <Buttons
                        textBtn1="Experiences"
                        linkBtn1="/#/experiences"
                        textBtn2="Compétences"
                        linkBtn2="/#/competences"
                    />
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default Presentation;
