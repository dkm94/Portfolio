import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'; 

class Navbar extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            visible: false
        }
    }

toggleMenu = () => {
    this.setState(
        state => ({
            visible: !state.visible
        })
    )
}

    render(){

        return(
                <nav>
                    <ul className="liens-navigation">
                        <li><Link to="/">Accueil</Link></li>
                        <li><a href="http://github.com/dkm94">Github</a></li>
                        <li><Link to="/AboutMe">À propos de moi</Link></li>
                        <li><Link to="/Projets">Mes projets</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>

                    
                    <div className="barMenu" onClick={this.toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className="liens-navigation-burger" style={{display: this.state.visible ? "flex" : "none"}}>
                        <li onClick={this.toggleMenu}><Link to="/">Accueil</Link></li>
                        <li onClick={this.toggleMenu}><a href="http://github.com/dkm94">Github</a></li>
                        <li onClick={this.toggleMenu}><Link to="/AboutMe">À propos de moi</Link></li>
                        <li onClick={this.toggleMenu}><Link to="/Projets">Mes projets</Link></li>
                        <li onClick={this.toggleMenu}><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>

                
        );
    }
}

export default withRouter (Navbar);