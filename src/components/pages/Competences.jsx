import {Skills} from '../competences/Skills.jsx'
import Footer from "../Footer.jsx";
import "./Competences.scss"
import {motion} from "framer-motion";
import AnimatedTitle from "../AnimatedTitle.jsx";
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";

const Competences = () => {

    const url = 'https://skillicons.dev/icons?i=';

    const skills1 = [
        {name: 'HTML', icon: url + 'html'},
        {name: 'CSS', icon: url + 'css'},
        {name: 'Javascript', icon: url + 'js'},
        {name: 'React', icon: url + 'react'},
        {name: 'Vite', icon: url + 'vite'},
        {name: 'Sass', icon: url + 'sass'},
        {name: 'Typescript', icon: url + 'ts'},
    ];

    const skills2 = [
        {name: 'Java', icon: url + 'java'},
        {name: 'Python', icon: url + 'py'},
        {name: 'Spring', icon: url + 'spring'},
        {name: 'PHP', icon: url + 'php'},
        {name: 'C', icon: url + 'c'},
        {name: 'MySQL', icon: url + 'mysql'},
        {name: 'PostgreSQL', icon: url + 'postgres'},
        {name: 'Node.js', icon: url + 'nodejs'},
    ];

    const skills3 = [
        {name: 'Git', icon: url + 'git'},
        {name: 'Figma', icon: url + 'figma'},
        {name: 'Intellij', icon: url + 'idea'},
        {name: 'WebStorm', icon: url + 'webstorm'},
        {name: 'Notion', icon: url + 'notion'},
        {name: 'Photoshop', icon: url + 'ps'},
        {name: 'Premiere Pro', icon: url + 'pr'},

    ];

    const title = [
        {
            type: "heading1",
            text: "Mes compétences"
        }
    ];

    return (
        <>

            <div className="all-skills-wrapper">
                <ScrollProgressCircle/>

                <div className='background-title'>
                    <AnimatedTitle titles={title}/>
                </div>

                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}>

                    <div className="all-skills-container">
                        <hr className="skills-divider"/>
                        <Skills title={"Back-End"} skills={skills2}/>

                        <hr className="skills-divider"/>
                        <Skills title={"Front-End"} skills={skills1}/>

                        <hr className="skills-divider"/>
                        <Skills title={"Autres outils et logiciels"} skills={skills3}/>
                    </div>

                </motion.div>


            </div>
            <Footer/>
        </>
    );
};

export default Competences;
