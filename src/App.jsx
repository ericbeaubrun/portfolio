import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Presentation from "./components/pages/Presentation.jsx";
import Experiences from "./components/pages/Experiences.jsx";
import Competences from "./components/pages/Competences.jsx";
import Contact from "./components/pages/Contact.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Projets from "./components/pages/Projets.jsx";
import {Route, Routes} from "react-router-dom";

export const App = () => {
    return (
        <div className="App">
            {/*<ScrollProgressLine/>*/}
            <div className="spacing"></div>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Presentation/>}/>
                <Route path="/presentation" element={<Presentation/>}/>
                <Route path="/competences" element={<Competences/>}/>
                <Route path="/experiences" element={<Experiences/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projets" element={<Projets/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;
