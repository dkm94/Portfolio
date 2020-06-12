import React, { Component } from "react";
import * as emailjs from 'emailjs-com';
import "../contact.css";

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
          }
    }

    handleSubmit(e) {
        e.preventDefault()
        const { email, subject, message } = this.state
        let templateParams = {
          from_name: email,
          to_name: '70ea56da404d75efd4ffd1806a5ae1cd',
          subject: subject,
          message_html: message,
         }
         emailjs.send(
          'gmail',
          'template_KDd9JTwp',
           templateParams,
          'user_YnLFwXfLV4QY86l4g4Ryp'
         )
         this.resetForm()
         this.showAlert()
    }
    resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }

    showAlert = () => {
        alert("Votre message a été envoyé.")
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
      
    
    render(){
        return(
            <div className="contact">
                <div className="contact-img"></div>
                <div className="contact-formulaire">
                    <section className="get-in-touch">
                        <h1 className="title">Restons en contact !</h1>
                        <form className="contact-form row" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-field col x-50">
                                <input id="name" name="name" placeholder="NAME" className="input-text js-input" type="text"  value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required />
                              
                            </div>
                            <div className="form-field col x-50">
                                <input id="email" name="email" value={this.state.email} placeholder ="EMAIL" className="input-text js-input" type="email" onChange={this.handleChange.bind(this, 'email')} required />
                                
                            </div>
                            <div className="form-field col x-50">
                                <input id="subject" type="text" name="subject" className="input-text js-input" placeholder="SUBJECT" value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')}/>
                            </div>
                            <div className="form-field col x-100">
                                <input id="message" type="textarea" placeholder="MESSAGE" className="input-text js-input" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} required />
                               
                            </div>
                            <div className="form-field col x-100 align-center">
                                <input className="submit-btn" type="submit" defaultValue="Submit"/>
                            </div>
                        </form>
            </section>
                </div>
                
               
            </div>
        );
        }
    }

export default Contact