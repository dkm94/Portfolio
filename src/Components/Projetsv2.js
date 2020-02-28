import React, { Component} from "react";
import Slideshow from "./Slide";
import "../projets.css";

class Projetsv2 extends Component {

    render() {

        return(
            <section className="projets">
                <div className="articles">
                   
                    <Slideshow />

                </div>
            </section>
        );
    }

}

export default Projetsv2;