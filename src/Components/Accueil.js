import React, { Component } from "react";
// import Contact from "./Contact";
import "../accueil.css";

class Accueil extends Component {

    render(){

        return(
            <div className="intro">
            <section className="header">
                {/* <Contact /> */}
                <div className="nom">
                    <h1>Diane Mpacko</h1>
                </div>
                <div className="titre-pro">
                    <h2>Frontend <br/> developer</h2>
                </div>
                <div className="bouton-about-me">

                </div>
            </section>
            </div>
        );
    }
}

export default Accueil;