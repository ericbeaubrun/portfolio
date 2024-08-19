import './Buttons.scss';
import {motion} from "framer-motion";

export const Buttons = ({textBtn1, linkBtn1, textBtn2, linkBtn2}) => {
    const handleLinkedinButton = () => {
        window.location.href = linkBtn1;
    };

    const handleCvButton = () => {
        window.location.href = linkBtn2;
    };

    return (
        <motion.div
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            initial={{opacity: 0, scale: 0.8}}
            animate={{
                opacity: 1,
                scale: 1
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            <div className="buttonWrapper">
                <button className="btn btn-dark" onClick={handleLinkedinButton}>{textBtn1}</button>
                <button className="btn btn-light" onClick={handleCvButton}>{textBtn2}</button>
            </div>
        </motion.div>
    );
};

