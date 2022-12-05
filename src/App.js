import React, {useState} from 'react';
import Navigation from "./components/Navigation/Navigation";
import './App.css';
import Home from "./pages/homePage/Home";
import {Routes, Route, Navigate} from "react-router-dom";
import Blogpost from "./pages/blogPage/Blogpost";
import Blogoverview from "./pages/blogOverview/Blogoverview";
import Login from "./pages/loginPage/Login";
// import Page from "./pages/specialPage/Page";
import NotFound from "./pages/NotFound/NotFound";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Navigation toggleIsAuthenticated={toggleIsAuthenticated} isAuthenticated={isAuthenticated}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login toggleIsAuthenticated={toggleIsAuthenticated}/>}/>
                <Route path="/blogoverview" element={isAuthenticated ? <Blogoverview/> : <Navigate to="/"/>}/>
                <Route path="/blogpost/:id" element={isAuthenticated ? <Blogpost/> : <Navigate to="/"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
