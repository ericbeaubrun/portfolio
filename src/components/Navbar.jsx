import './Navbar.scss';
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

export const Navbar = () => {
    return (
        <>
            {/*<div className="wave-background"></div>*/}

            <section className="landing"></section>
            <a className="anchor" name="nav-9"></a>

            <section className="nav-9 navbar">
                <nav>
                    <NavLink to="portfolio/">
                        <div className="item">
                            <div data-text="Profil et objectifs" className="linktext">Présentation</div>
                        </div>
                    </NavLink>

                    <NavLink to="portfolio/competences">
                        <div className="item">
                            <div data-text="Mes points forts" className="linktext">Compétences</div>
                        </div>
                    </NavLink>

                    <NavLink to="portfolio/projets">
                        <div className="item">
                            <div data-text="Mon parcours détaillé" className="linktext">Experiences</div>
                        </div>
                    </NavLink>

                    {/*<NavLink to="/todo">*/}
                    {/*    <div className="item">*/}
                    {/*        <div data-text="Découvrir mon histoire" className="linktext">Parcours professionnel</div>*/}
                    {/*    </div>*/}
                    {/*</NavLink>*/}

                    <NavLink to="portfolio/contact">
                        <div className="item">
                            <div data-text="me joindre" className="linktext">Contact</div>
                        </div>
                    </NavLink>
                </nav>
            </section>
        </>
    );
};
