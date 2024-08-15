import {ContactForm} from "../contact/ContactForm.jsx";
import Footer from "../Footer.jsx";
import {ContactCard} from "../contact/ContactCard.jsx";
import {ContactPicture} from "../contact/ContactPicture.jsx";
import {motion} from "framer-motion";
import ScrollProgress from "../ScrollProgress.jsx";
import ScrollProgressCircle from "../ScrollProgressCircle.jsx";

export const Contact = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                className="animated-title">
                <ContactCard/>
                <ContactForm/>
            </motion.div>
            {/*<Footer/>*/}
        </>
    );
};
