import React, { Component } from "react";
import "../aboutMe.css";
import Navbar from "./Navbar";
import photoId from "../img/woman.png";

class AboutMe extends Component {

    render() {

        return(

            <section className="aboutme">
                <Navbar />
                <div className="ab-me">
                    <div className="cadre-ab-me">
                        <div className="presentation">
                            <div className="photo-id">
                                <img src={photoId} alt="photoid"/>
                            </div>
                            <div className="titre-presentation">
                                <div className="titre-ab-me">
                                    <h3>About me.</h3>
                                </div>
                                <div className="presentation-id">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills-col">
                                <h4>Langages</h4>
                                <ul>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h4>Frameworks</h4>
                                <ul>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h4>Outils</h4>
                                <ul>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                    <li>XXXXXX</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bouton-ab-me">
                            <button className="submit-btn btn-portfolio">PORTFOLIO</button>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default (AboutMe);