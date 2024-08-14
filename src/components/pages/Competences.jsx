import {Skills} from '../competences/Skills.jsx'
import Footer from "../Footer.jsx";
import "./Competences.scss"
import {motion} from "framer-motion";

export const Competences = () => {

    const url = 'https://skillicons.dev/icons?i=';

    const skills1 = [
        {name: 'HTML', icon: url + 'html'},
        {name: 'CSS', icon: url + 'css'},
        {name: 'Javascript', icon: url + 'js'},
        {name: 'Typescript', icon: url + 'ts'},
        {name: 'React', icon: url + 'react'},
        {name: 'Angular', icon: url + 'angular'},
    ];

    const skills2 = [
        {name: 'Java', icon: url + 'java'},
        {name: 'py', icon: url + 'python'},
        {name: 'spring', icon: url + 'spring'},
        {name: 'php', icon: url + 'php'},
        {name: 'c', icon: url + 'c'},
        {name: 'MySQL', icon: url + 'mysql'},
        {name: 'NodeJS', icon: url + 'nodejs'},
        {name: 'MongoDB', icon: url + 'mongodb'},
    ];

    const skills3 = [
        {name: 'Notion', icon: url + 'notion'},
        {name: 'Figma', icon: url + 'figma'},
        {name: 'Intellij', icon: url + 'idea'},
        {name: 'Git', icon: url + 'git'},

    ];

    return (
        <>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                className="animated-title">
                <div className="all-skills-container">
                    <Skills title={"Front-End"} skills={skills1}/>
                    <Skills title={"Back-End"} skills={skills2}/>
                    <Skills title={"Other"} skills={skills3}/>
                </div>
            </motion.div>

            <Footer/>
        </>
    );
};
