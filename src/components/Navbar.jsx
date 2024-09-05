import './Navbar.scss';
import {NavLink, useLocation} from "react-router-dom";
import {useEffect} from 'react';


const Navbar = () => {


    const location = useLocation();
    useEffect(() => {
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <>
            <section className="landing"></section>
            <a className="anchor" name="nav-9"></a>

            <section className="nav-9 navbar">
                <nav>
                    <NavLink to="/presentation">
                        <div className="item">
                            <div data-text="Parcours et Objectifs" className="linktext">Présentation</div>
                        </div>
                    </NavLink>

                    <NavLink to="/competences">
                        <div className="item">
                            <div data-text="Mes points forts" className="linktext">Compétences</div>
                        </div>
                    </NavLink>

                    <NavLink to="/experiences">
                        <div className="item">
                            <div data-text="Projets et Stages" className="linktext">Experiences</div>
                        </div>
                    </NavLink>

                    <NavLink to="/contact">
                        <div className="item">
                            <div data-text="me joindre" className="linktext">Contact</div>
                        </div>
                    </NavLink>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
