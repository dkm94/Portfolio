import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'; 


class Navbar extends Component {

    render(){

        return(
                <nav>
                    <ul className="liens-navigation">
                        <li><Link to="/">Accueil</Link></li>
                        <li><a href="http://github.com/dkm94">Github</a></li>
                        <li><Link to="/AboutMe">About me</Link></li>
                        <li><Link to="/Projets">Projets</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
        );
    }
}

export default withRouter (Navbar);