import {ContactForm} from "../contact/ContactForm.jsx";
import {ContactCard} from "../contact/ContactCard.jsx";
import {motion} from "framer-motion";
import "./Contact.scss";

const Contact = () => {
    return (
        <>
            <div className="ContactBackground"></div>
            <motion.div
                className="ContactContent"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}>
                <ContactCard/>
                <ContactForm/>
            </motion.div>
        </>
    );
};

export default Contact;
