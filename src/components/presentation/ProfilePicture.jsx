import './ProfilePicture.scss';
import {motion} from 'framer-motion';

import content from "../../content/presentation.json";

const ProfilePicture = () => {
    const text = content.hover_picture_text;

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
                            <h2 id="infoTitle">Mon point de vue</h2>
                            <p id="infoText">{text}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ProfilePicture;
