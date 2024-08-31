// import './ContactCard.scss';
// import ContactPicture from "./ContactPicture.jsx";

import '/src/components/contact/ContactCard.scss';
import ContactPicture from "/src/components/contact/ContactPicture.jsx";

// Icons
import mailIcon from '/resources/email.png';
import phoneIcon from '/resources/telephone.png';
import linkedinIcon from '/resources/linkedin.png';
import githubIcon from '/resources/github.png';

export const ContactCard = () => {
    return (
        <div className="contact-card motion-effect">
            <div className="colors-effect"><span></span><span></span></div>
            <div className="motion-effect__wrapper">
                <div className="contact-info">
                    <div>
                        <ContactPicture
                            altText="Photo de profil"
                        />
                    </div>
                    <h2 id="contact-title">Mes coordonnées</h2>
                    <ul className="contact-list">

                        <li>
                            <img src={phoneIcon} alt="Téléphone" className="icon"/>
                            <a href="tel:+33643414079">+33 6 43 41 40 79</a>
                        </li>

                        <li>
                            <img src={githubIcon} alt="GitHub" className="icon"/>
                            <a href="https://github.com/ericbeaubrun" target="_blank" rel="noopener noreferrer">
                                github.com/ericbeaubrun
                            </a>
                        </li>

                        <li>
                            <img src={mailIcon} alt="Email" className="icon"/>
                            <a href="mailto:e.adelaide.beaubrun@gmail.com">e.adelaide.beaubrun@gmail.com</a>
                        </li>

                        <li>
                            <img src={linkedinIcon} alt="LinkedIn" className="icon"/>
                            <a href="https://www.linkedin.com/in/eric-adelaide-beaubrun/" target="_blank"
                               rel="noopener noreferrer">
                                linkedin.com/in/eric-adelaide-beaubrun/
                            </a>
                        </li>

                    </ul>


                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=
                        2.562732696533203%2C48.514841828610436%2C2.6760292053222656%2C48.56541882864409&amp;layer=mapnik"
                        style={{border: 0}}
                        width="94%"
                        height="320px"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

        </div>
    );
};

// import './ContactCard.scss';
// import ContactPicture from "./ContactPicture.jsx";
//
// // Icons
// import mailIcon from '/resources/email.png';
// import phoneIcon from '/resources/telephone.png';
// import linkedinIcon from '/resources/linkedin.png';
// import githubIcon from '/resources/github.png';
//
// export const ContactCard = () => {
//     return (
//         <div className="contact-card c-subscribe-box">
//             <div className="rainbow"><span></span><span></span></div>
//             <div className="c-subscribe-box__wrapper">
//                 <div>
//                     <ContactPicture
//                         altText="Photo de profil"
//                     />
//                 </div>
//                 <h2 id="contact-title">Mes coordonées</h2>
//                 <ul className="contact-list">
//
//                     <li>
//                         <img src={phoneIcon} alt="Téléphone" className="icon"/>
//                         <a href="tel:+33643414079">+33 6 43 41 40 79</a>
//                     </li>
//
//                     <li>
//                         <img src={githubIcon} alt="GitHub" className="icon"/>
//                         <a href="https://github.com/ericbeaubrun" target="_blank" rel="noopener noreferrer">
//                             github.com/ericbeaubrun
//                         </a>
//                     </li>
//
//                     <li>
//                         <img src={mailIcon} alt="Email" className="icon"/>
//                         <a href="mailto:e.adelaide.beaubrun@gmail.com">e.adelaide.beaubrun@gmail.com</a>
//                     </li>
//
//                     <li>
//                         <img src={linkedinIcon} alt="LinkedIn" className="icon"/>
//                         <a href="https://www.linkedin.com/in/eric-adelaide-beaubrun/" target="_blank"
//                            rel="noopener noreferrer">
//                             linkedin.com/in/eric-adelaide-beaubrun/
//                         </a>
//                     </li>
//
//                 </ul>
//             </div>
//
//         </div>
//     );
// };
//

