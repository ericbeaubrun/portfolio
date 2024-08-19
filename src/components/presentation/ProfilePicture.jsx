import './ProfilePicture.scss';
import {motion} from 'framer-motion';

const ProfilePicture = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                className="animated-title">

                <div className="container">
                    <div className="card">
                        <div className="image"></div>
                        <div className="info">
                            <h2 id="infoTitle">Qui suit-je ?</h2>
                            <p id="infoText">
                                Passionné par l'informatique et les jeux vidéo, je me distingue par ma curiosité pour les nouvelles technologies,
                                mon ouverture d'esprit, mon autonomie et mon aisance relationnelle.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ProfilePicture;
