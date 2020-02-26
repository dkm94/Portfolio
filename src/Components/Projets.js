import React, { Component} from "react";
import Navbar from "../Components/Navbar";
import Articles from "../Components/Articles";
import articlesProjets from "../articles";
import "../projets.css";

class Projets extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articlesProjets:[]
        }
    }

    componentDidMount() {
        this.setState({
            articlesProjets
        })
    }

    render() {

        return(
            <section className="projets">
                <Navbar />
                <div className="articles">
                    {
                        this.state.articlesProjets

                            .map((article) => (

                                <Articles
                                    key={article.id}
                                    articleId={article.id}
                                    articleImg={article.img}
                                    articleTitre={article.titre}
                                    articleLegende={article.legende}
                                    articleTechnos={article.technos}
                                />

                            ))
                    }

                  

                </div>
            </section>
        );
    }

}

export default Projets;