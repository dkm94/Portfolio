import React, {Component} from "react";
import { Slide } from "react-slideshow-image";
// import img1 from "../img/full-moon-415501_1920.jpg";
// import img2 from "../img/sunset-1373171_1920.jpg";
import "../projets.css";
import Articles from "./Articles";
import articlesProjets from "../articles";

console.log(articlesProjets);

class Slideshow extends Component {

    constructor(props) {
        super(props)

        this.state = {
             articlesProjets: []
        }
    }

    componentDidMount() {
        this.setState({
            articlesProjets
        })

    }

    render() {

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            onChange: (oldIndex, newIndex) => {
                console.log(`slide transition from ${oldIndex} to ${newIndex}`);
          }
    };

    return (

        <div className="containerSlide">
            <Slide {...properties}>
                <div className="articles">
                        {
                                articlesProjets.map (article =>

                                    <Articles
                                        key={article.id}
                                        articleId={article.id}
                                        articleImg={article.img}
                                        articleTitre={article.titre}
                                        articleLegende={article.legende}
                                        articleTechnos={article.technos}
                                    />

                                )
                        }

                    

                    </div>
            </Slide>
        </div>
    );
}
}
    

export default Slideshow;