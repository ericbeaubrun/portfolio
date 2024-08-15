// import "./ParagraphPresentation.scss"
// import {motion} from 'framer-motion';
//
// export const ParagraphPresentation = ({text}) => {
//     return (
//         // <motion.div
//         //     initial={{opacity: 0, y: -20}}
//         //     animate={{opacity: 1, y: 0}}
//         //     transition={{duration: 0.5, delay: 0.2}}
//         //     className="animated-title">
//         //     <div className={"paragraph-text-container"}>
//         //         <p id={"paragraph-text"}>{text}</p>
//         //     </div>
//         // </motion.div>
//         <div className="animated-title">
//              <div className={"paragraph-text-container"}>
//                  <p id={"paragraph-text"}>{text}</p>
//              </div>
//          </div>
//     );
// };


import "./ParagraphPresentation.scss"
import {motion} from 'framer-motion';

export const ParagraphPresentation = ({text, direction = "left"}) => {
    // Définir les animations en fonction de la direction
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -600 : 600  // Le paragraphe vient de la gauche ou de la droite
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 1.5, delay: 0.1}
        }
    };

    return (
        <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            animate="visible"
            variants={variants}
            className="animated-title"
        >
            <div className={"paragraph-text-container"}>
                <p id={"paragraph-text"}>{text}</p>
            </div>
        </motion.div>
    );
};
