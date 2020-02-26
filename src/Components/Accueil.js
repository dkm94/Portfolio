import React, { Component } from "react";
import Navbar from "./Navbar";
// import Contact from "./Contact";
import "../accueil.css";

class Accueil extends Component {

    render(){

        return(
            <section className="header">
                <Navbar />
                {/* <Contact /> */}
                <div className="nom">
                    <h1>Diane Mpacko</h1>
                </div>
                <div className="titre-pro">
                    <h2>Front-end <br/> developper</h2>
                </div>
                <div className="bouton-about-me">

                </div>
            </section>
        );
    }
}

export default Accueil;