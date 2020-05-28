import React, { Component} from "react";
import Articles from "../Components/Articles";
import articlesProjets from "../articles";
import "../projets.css";
// import Navbar from "../Components/Navbar"

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
                <div className="articles">
                    <div className="titre-section"><h3>MES PROJETS</h3></div>
                    
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