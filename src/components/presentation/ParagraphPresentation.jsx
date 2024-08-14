import "./ParagraphPresentation.scss"
import {motion} from 'framer-motion';

export const ParagraphPresentation = ({text}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="animated-title">
            <div className={"myname-container"}>
                <p id={"myname"}>{text}</p>
            </div>
        </motion.div>
    );
};
