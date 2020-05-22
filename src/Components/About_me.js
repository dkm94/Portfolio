
import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../aboutMe.css";
import photoId from "../img/ID_Diane.jpg";

class AboutMe extends Component {

    render() {

        return(

            <section className="aboutme">
                <div className="ab-me">
                    <div className="cadre-ab-me">
                        <div className="titre-ab-me">
                            <h3>About me</h3>
                        </div>
                        <div className="presentation">
                            <div className="photo-id">
                                <img src={photoId} alt="photoid"/>
                            </div>
                            <div className="titre-presentation">
                                <div className="presentation-id">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills-col">
                                <h4>Langages</h4>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Javascript</li>
                                    <li>JQuery</li>
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h4>FULL STACK</h4>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>Mongodb</li>
                                    <li>ReactJS</li>
                                    <li>NoSQL</li>
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h4>Outils</h4>
                                <ul>
                                    <li>Postman</li>
                                    <li>Robo3T</li>
                                    <li>Github/GIT</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bouton-ab-me">
                            <button className="submit-btn btn-portfolio"><Link to="/files/CV_MPACKO_Diane_Dev_Web.pdf" target="_blank" download style={{color: '#000000'}}>TELECHARGER MON CV</Link></button>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default (AboutMe);