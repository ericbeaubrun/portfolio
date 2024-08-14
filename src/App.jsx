// import {Route, Routes} from "react-router-dom";
// import "./App.scss";
// import {Navbar} from "./components/Navbar.jsx";
// import {Projets, Contact, Presentation, Competences} from "./components/pages";
// import {useEffect, useState} from "react";
// import LoadingCircle from "./components/LoadingCircle.jsx";
//
// const App = () => {
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         // Simulate loading delay
//         const timeout = setTimeout(() => {
//             setLoading(false);
//         }, 1000);
//
//         return () => clearTimeout(timeout);
//     }, []);
//
//     return (
//         <>
//             {
//                 loading ?
//                     (
//                         <div className="app">
//                             <LoadingCircle/>
//                         </div>
//                     ) : (
//                         <div className="App">
//                             <div className="wave-background">
//                             </div>
//                                 <Navbar/>
//
//                                 <Routes>
//                                     <Route path="/home" element={<Presentation/>}/>
//                                     <Route path="/about" element={<Projets/>}/>
//                                     <Route path="/services" element={<Competences/>}/>
//                                     <Route path="/contact" element={<Contact/>}/>
//                                 </Routes>
//
//
//                         </div>
//                     )
//             }
//         </>
//     );
// };
//
// export default App;
import {Route, Routes} from "react-router-dom";
import "./App.scss";
import {Navbar} from "./components/Navbar.jsx";
import {Projets, Contact, Presentation, Competences} from "./components/pages";
import {motion} from "framer-motion";

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
                    <Route path="/" element={<Presentation/>}/>
                    <Route path="/competences" element={<Competences/>}/>
                    <Route path="/experiences" element={<Projets/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </>
    );
};

export default App;
