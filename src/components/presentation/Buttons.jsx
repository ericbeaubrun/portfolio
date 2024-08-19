import './Buttons.scss';
import {motion} from "framer-motion";

const Buttons = ({textBtn1, linkBtn1, textBtn2, linkBtn2}) => {
    const handleClick1 = () => {
        window.location.href = linkBtn1;
        window.scrollTo(0, 0);
    };

    const handleClick2 = () => {
        window.location.href = linkBtn2;
        window.scrollTo(0, 0);
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
                <button className="btn btn-dark" onClick={handleClick1}>{textBtn1}</button>
                <button className="btn btn-light" onClick={handleClick2}>{textBtn2}</button>
            </div>
        </motion.div>
    );
};

export default Buttons;
