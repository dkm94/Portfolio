import React, { Component} from "react";
import "../articles.css";
import "../contact.css";


class Button extends Component {
    render(){
        return(
            <div>
                <button className="submit-btn">DEMO</button>
                <button className="submit-btn">GITHUB</button>
            </div>
        )
    }
}

export default Button;