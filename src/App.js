import React from 'react';
// import { Route, NavLink, HashRouter } from "react-router-dom";
import Accueil from "./Components/Accueil";
import AboutMe from "./Components/About_me";
// import Contact from "./Components/Contact";
import Projets from "./Components/Projets";
import "./contact.css"
import './App.css';

function App() {
  
  return (
    <div className="main-page">
    <Accueil />
    <AboutMe />
    <Projets />
    </div>
  );
}

export default App;
