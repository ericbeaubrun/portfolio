import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
);

// Avec BrowseRouter
// import {BrowserRouter} from 'react-router-dom'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.scss'
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </React.StrictMode>,
// )
