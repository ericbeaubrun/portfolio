// import "./TitrePresentation.scss";
// import {motion} from "framer-motion";
// import AnimatedText from "./AnimatedText.jsx";
//
// export const AnimatedTitle = () => {
//
//     const placeholderText = [
//         {
//             type: "heading1",
//             text: "Etudiant en Master développement full stack"
//         },
//         {
//             type: "heading2",
//             text: "Eric ADELAIDE BEAUBRUN"
//         }
//     ];
//
//     const containerVariants = {
//         hidden: {
//             opacity: 0
//         },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.05
//             }
//         }
//     };
//
//     return (
//         <motion.div
//             className="App"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//         >
//             <div className="container2">
//                 {placeholderText.map((item, index) => (
//                     <AnimatedText {...item} key={index}/>
//                 ))}
//             </div>
//         </motion.div>
//     );
// }
import "./presentation/TitrePresentation.scss";
import {motion} from "framer-motion";
import AnimatedText from "./AnimatedText.jsx";

export const AnimatedTitle = ({ titles = [] }) => {

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

