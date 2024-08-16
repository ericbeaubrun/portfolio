import './ProfilePicture.scss';
import {motion} from 'framer-motion';

export const ProfilePicture = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: -20}} // Animation de départ
                animate={{opacity: 1, y: 0}} // Animation d'arrivée
                transition={{duration: 0.5, delay: 0.2}} // Durée et délai de l'animation
                className="animated-title">

                <div className="container">
                    <div className="card">
                        <div className="image image3"></div>
                        <div className="info">
                            <h2 id="infoTitle">Qui suit-je ?</h2>
                            <p id="infoText">
                                Passionné par l'informatique et les jeux vidéo, je me distingue par ma curiosité pour les nouvelles technologies,
                                mon ouverture d'esprit, mon autonomie et mon aisance relationnelle.
                            </p>
                        </div>
                    </div>

                    <svg style={{display: 'none'}}>
                        <filter id="wavy1">
                            <feTurbulence x="0" y="0" baseFrequency="0.4" numOctaves="60" seed="1"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="20"/>
                        </filter>
                    </svg>
                    <svg style={{display: 'none'}}>
                        <filter id="wavy2">
                            <feTurbulence x="0" y="0" baseFrequency="0.4" numOctaves="60" seed="2"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="20"/>
                        </filter>
                    </svg>
                    <svg style={{display: 'none'}}>
                        <filter id="wavy3">
                            <feTurbulence x="0" y="0" baseFrequency="4.6" numOctaves="160" seed="3"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="10"/>
                        </filter>
                        <filter id="wavy4">
                            <feTurbulence x="0" y="0" baseFrequency="4.6" numOctaves="160" seed="4"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="10"/>
                        </filter>
                        <filter id="wavy5">
                            <feTurbulence x="0" y="0" baseFrequency="4.6" numOctaves="160" seed="5"></feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="10"/>
                        </filter>
                    </svg>
                </div>
            </motion.div>

        </>
    );
}
