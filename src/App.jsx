import {Route, Routes} from "react-router-dom";
import "./App.scss";
import {Navbar} from "./components/Navbar.jsx";
import {Projets, Contact, Presentation, Competences} from "./components/pages";

export const App = () => {

    return (
        <>
            <div className="App">
                
                {/*<motion.div*/}
                {/*    initial={{opacity: 0, y: -20}} // Animation de départ*/}
                {/*    animate={{opacity: 1, y: 0}} // Animation d'arrivée*/}
                {/*    transition={{duration: 0.5, delay: 0.2}} // Durée et délai de l'animation*/}
                {/*    className="animated-title">*/}
                {/*    <div className="wave-background">*/}
                {/*    </div>*/}
                {/*</motion.div>*/}

                <Navbar/>

                <Routes>
                    <Route path="portfolio/" element={<Presentation/>}/>
                    <Route path="portfolio/competences" element={<Competences/>}/>
                    <Route path="portfolio/experiences" element={<Projets/>}/>
                    <Route path="portfolio/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </>
    );
};

export default App;
