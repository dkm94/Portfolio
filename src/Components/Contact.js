import React from "react";
import "../contact.css";

export default function Modal(props) {

    // this.state = {
    //     inputText: ""
    // // }

    // this.handleOnChange = this.handleOnChange.bind(this)

    // handleOnChange(e) {
    //     this.setState({
    //         inputText: e.target.value
    //     })
    // }

        return(
            <div className="contact"
            style={{
                transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.visible ? '1' : '0'
            }}
            >
                <button onClick={props.hidden} className="fermer">X</button>
                <div className="contact-img"></div>
                <div className="contact-formulaire">
                    <section className="get-in-touch">
                        <h1 className="title">Restons en contact !</h1>
                        <form className="contact-form row">
                            <div className="form-field col x-50">
                                <input id="name" name="name" className="input-text js-input" type="text"  required />
                                <label className="label" htmlFor="name">Name</label>
                            </div>
                            <div className="form-field col x-50">
                                <input id="email" name ="email" className="input-text js-input" type="email"  required />
                                <label className="label" htmlFor="email">E-mail</label>
                            </div>
                            <div className="form-field col x-100">
                                <input id="message" name="message" className="input-text js-input" type="text" required />
                                <label className="label" htmlFor="message">Message</label>
                            </div>
                            <div className="form-field col x-100 align-center">
                                <input className="submit-btn" type="submit" defaultValue="Submit" />
                            </div>
                        </form>
            </section>
                </div>
                
               
            </div>
        );
    }