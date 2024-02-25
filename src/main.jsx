import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import GroceriesContextProvider, {GroceriesContext} from "./context/GroceriesContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <Router>
            <UserContextProvider>
                <GroceriesContextProvider>
                    <App/>
                </GroceriesContextProvider>
            </UserContextProvider>
        </Router>

    </React.StrictMode>,
)
