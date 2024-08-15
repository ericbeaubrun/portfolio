import "./Footer.scss";
import mailIcon from '/resources/email.png';
import phoneIcon from '/resources/telephone.png';
import linkedinIcon from '/resources/linkedin.png';
import localisationIcon from '/resources/localisation.png';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="contact-list">
                <li>
                    <img src={localisationIcon} alt="Email" className="icon"/>
                    Le Mée Sur Seine (77350)
                </li>

                <li>
                    <img src={phoneIcon} alt="Téléphone" className="icon"/>
                    <a href="tel:+33643414079">+33 6 43 41 40 79</a>
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
                {/*<li>*/}
                {/*    <img src={githubIcon} alt="GitHub" className="icon" />*/}
                {/*    <a href="https://github.com/ericbeaubrun" target="_blank" rel="noopener noreferrer">*/}
                {/*        github.com/ericbeaubrun*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </footer>
    );
};

export default Footer;
