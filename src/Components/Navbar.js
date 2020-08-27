import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom'; 

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
                    <div className="liens-navigation">
                        <NavLink to="/" exact className="linkStyle" activeClassName="current">Accueil</NavLink>
                        <li className="linkStyle"><a href="http://github.com/dkm94"  activeClassName="current">Github</a></li>
                        <NavLink to="/AboutMe" className="linkStyle" activeClassName="current">À propos de moi</NavLink>
                        <NavLink to="/Projets" className="linkStyle" activeClassName="current">Mes projets</NavLink>
                        <NavLink to="/Contact" className="linkStyle" activeClassName="current">Contact</NavLink>
                    </div>

                    
                    <div className="barMenu" onClick={this.toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className="liens-navigation-burger" style={{display: this.state.visible ? "flex" : "none"}}>
                        <li onClick={this.toggleMenu}><NavLink to="/">Accueil</NavLink></li>
                        <li onClick={this.toggleMenu}><a href="http://github.com/dkm94">Github</a></li>
                        <li onClick={this.toggleMenu}><NavLink to="/AboutMe">À propos de moi</NavLink></li>
                        <li onClick={this.toggleMenu}><NavLink to="/Projets">Mes projets</NavLink></li>
                        <li onClick={this.toggleMenu}><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </nav>

                
        );
    }
}

export default withRouter (Navbar);