import "./Titre.scss"
import {motion} from 'framer-motion';

export const Titre = ({text}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}} // Animation de départ
            animate={{opacity: 1, y: 0}} // Animation d'arrivée
            transition={{duration: 0.5, delay: 0.2}} // Durée et délai de l'animation
            className="title-container">
            <div className="container">
                <h1 id={"main-title"}>{text}</h1>
            </div>
        </motion.div>
    );
};
