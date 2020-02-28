 import React from "react";
import "../contact.css";

export default function Contact () {

        return(
            <div className="contact">
                <div className="contact-img"></div>
                <div className="contact-formulaire">
                    <section className="get-in-touch">
                        <h1 className="title">Restons en contact !</h1>
                        <form className="contact-form row">
                            <div className="form-field col x-50">
                                <input id="name" placeholder="NAME" className="input-text js-input" type="text"  required />
                                {/* <label className="label" htmlFor="name">Name</label> */}
                            </div>
                            <div className="form-field col x-50">
                                <input id="email" placeholder ="EMAIL" className="input-text js-input" type="email"  required />
                                {/* <label className="label" htmlFor="email">E-mail</label> */}
                            </div>
                            <div className="form-field col x-100">
                                <input id="message" placeholder="MESSAGE" className="input-text js-input" type="text" required />
                                {/* <label className="label" htmlFor="message">Message</label> */}
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