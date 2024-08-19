import "./AnimatedTitle.scss";
import {motion} from "framer-motion";
import AnimatedText from "./AnimatedText.jsx";

const AnimatedTitle = ({ titles = [] }) => {

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="title-container">
                {titles.map((item, index) => (
                    <AnimatedText {...item} key={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default AnimatedTitle;
