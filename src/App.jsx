// import "./App.scss";
// import Navbar from "./components/Navbar.jsx";
// import Presentation from "./components/pages/Presentation.jsx";
// import Experiences from "./components/pages/Experiences.jsx";
// import Competences from "./components/pages/Competences.jsx";
// import Contact from "./components/pages/Contact.jsx";
// import NotFound from "./components/pages/NotFound.jsx";

import "/src/App.scss";
import Navbar from "/src/components/Navbar.jsx";
import Presentation from "/src/components/pages/Presentation.jsx";
import Experiences from "/src/components/pages/Experiences.jsx";
import Competences from "/src/components/pages/Competences.jsx";
import Contact from "/src/components/pages/Contact.jsx";
import NotFound from "/src/components/pages/NotFound.jsx";

import {Route, Routes} from "react-router-dom";

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
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;
