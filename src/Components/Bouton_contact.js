import React, { Component } from "react";
import "../bouton_contact.css";
import Contact from "./Contact";

export default class BoutonContact extends Component {

    state = {
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    hideModal = () => {
        this.setState({
            visible: false
        })
    }

    render(){

        return(
            <div>
                <div onClick={this.showModal} className="envoyer">Contact</div>
                <Contact 
                visible={this.state.visible}
                hidden={this.hideModal}
                />
            </div>
        );
    }
}