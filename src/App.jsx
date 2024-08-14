import {Route, Routes} from "react-router-dom";
import "./App.scss";
import {Navbar} from "./components/Navbar.jsx";
import {Projets, Contact, Presentation, Competences} from "./components/pages";

export const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Presentation/>}/>
                <Route path="/presentation" element={<Presentation/>}/>
                <Route path="/competences" element={<Competences/>}/>
                <Route path="/experiences" element={<Projets/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
};

export default App;
