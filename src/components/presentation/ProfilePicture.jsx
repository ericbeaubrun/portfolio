import './ProfilePicture.scss';
import {motion} from 'framer-motion';

const ProfilePicture = () => {
    const text = `
   Je suis un jeune développeur de 23 ans, passionné d'informatique et titulaire d'un BAC+3. 
   J'ai eu l'occasion de travailler sur de nombreux projets et sites web. Mon principal objectif 
   est de devenir développeur full stack, avec une spécialisation en Java pour le backend et React ou Angular pour le frontend.
    `

    return (
        <>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
            >

                <div className="container">
                    <div className="card">
                        <div className="image"></div>
                        <div className="info">
                            <h2 id="infoTitle">En quelques mots</h2>
                            <p id="infoText">{text}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ProfilePicture;

// import './ProfilePicture.scss';
// import {motion} from 'framer-motion';
//
// const ProfilePicture = () => {
//     const text = `
//    Je suis un jeune développeur de 23 ans, passionné d'informatique et titulaire d'un BAC+3.
//    J'ai eu l'occasion de travailler sur de nombreux projets et sites web. Mon principal objectif
//    est de devenir développeur full stack, avec une spécialisation en Java pour le backend et React ou Angular pour le frontend.
//     `
//
//     return (
//         <>
//             <motion.div
//                 initial={{opacity: 0, y: -20}}
//                 animate={{opacity: 1, y: 0}}
//                 transition={{duration: 0.5, delay: 0.2}}
//                 className="animated-title">
//
//                 <div className="container">
//                     <div className="card">
//                         <div className="image"></div>
//                         <div className="info">
//                             <h2 id="infoTitle">En quelques mots</h2>
//                             <p id="infoText">{text}</p>
//                         </div>
//                     </div>
//                 </div>
//             </motion.div>
//         </>
//     );
// }
//
// export default ProfilePicture;
