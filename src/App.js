import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Accueil from "./Components/Accueil";
import AboutMe from "./Components/About_me";
import Contact from "./Components/Contact";
import Projets from "./Components/Projets";
// import Projetsv2 from "./Components/Projetsv2";
import "./contact.css"
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className="main-page">
          <Switch>
            <Route exact path="/" component={Accueil}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route path="/Projets" component={Projets}/>
            <Route path="/Contact" component={Contact}/>
          </Switch>
          <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
