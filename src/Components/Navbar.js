import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Contact from "../Components/Bouton_contact";

class Navbar extends Component {

    render(){

        return(
            <Router>
                <nav>
                    <ul className="liens-navigation">
                        <li><a href="http://github.com/dkm94">Github</a></li>
                        <li><Link to="/projets">About me</Link></li>
                        <li><Link to="/contact"><Contact /></Link></li>
                    </ul>
                </nav>
            </Router>
        );
    }
}

export default (Navbar);