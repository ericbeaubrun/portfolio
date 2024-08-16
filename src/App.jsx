import {Route, Routes} from "react-router-dom";
import "./App.scss";
import {Navbar} from "./components/Navbar.jsx";
import {Experiences, Contact, Presentation, Competences} from "./components/pages";
import ScrollProgressLine from "./components/ScrollProgress.jsx";

export const App = () => {
    return (

        <div className="App">
            <ScrollProgressLine/>
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
