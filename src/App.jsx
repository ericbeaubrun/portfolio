import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ScrollProgressLine from "./components/ScrollProgress.jsx";
import Presentation from "./components/pages/Presentation.jsx";
import Experiences from "./components/pages/Experiences.jsx";
import Competences from "./components/pages/Competences.jsx";
import Contact from "./components/pages/Contact.jsx";

export const App = () => {
    return (

        <div className="App">
            {/*<ScrollProgressLine/>*/}
            <Navbar/>

            <Routes>
                <Route path="/" element={<Presentation/>}/>
                <Route path="/presentation" element={<Presentation/>}/>
                <Route path="/competences" element={<Competences/>}/>
                <Route path="/experiences" element={<Experiences/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
};

export default App;
