
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
                        <div className="titre-section">
                            <h3>À PROPOS</h3>
                        </div>
                        <div className="presentation">
                            <div className="photo-id">
                                <img src={photoId} alt="photoid"/>
                            </div>
                            <div className="titre-presentation">
                                <div className="presentation-id">
                                    <blockquote>
                                        <p> Qui a dit que la curiosité était un vilain défaut ? Ne serait-ce pas ce qui vous emmène à moi...et très certainement ce qui m'a poussée dans cette voie !<br />
                                    Après des études de commerce international et de traduction, j'ai développé une appétence pour les métiers du numérique qui me permettent à présent de faire partie de la grande famille des développeurs web.
                                    Ma maîtrise de l'anglais a été un atout durant ma formation de Développeur web fullstack JS, et reste une ressource indispensable dans l'apprentissage continu de nouveaux outils/langages et veilles technologiques.<br />
                                    Je suis ouverte aux projets MERN Stack en frontend, backend et fullstack. En tant que junior, je suis prête à mettre en application toutes mes connaissances acquises depuis le début de mon parcours dans le développement et à donner mon maximum afin d'apporter une vraie plus value à votre équipe ! 
                                    </p></blockquote>
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
                                    <li>NoSQL</li>
                                </ul>
                            </div>
                            <div className="skills-col">
                                <h4>MERN STACK</h4>
                                <ul>
                                    <li>Mongodb</li>
                                    <li>Express.js</li>
                                    <li>REACT JS</li>
                                    <li>Node.js</li>
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