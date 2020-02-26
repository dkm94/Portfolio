import React, { Component } from "react";
import "../articles.css";
import "../contact.css";

class Articles extends Component {

    render() {

        const {articleId, articleImg, articleTitre, articleLegende, articleTechnos} = this.props

        return(
            <article id={articleId}>
                <div className="article-img">
                    <img src={require(`../img/${articleImg}`)}  className="projet-img" alt="nom-du-projet"/>
                </div>
                <div className="article-legende">
                    <h3>{articleTitre}</h3>
                    <div className="description projet">
                        <p>{articleLegende}</p>
                    </div>
                    <div className="legende-techno">
                        <p>{articleTechnos}</p>
                    </div>
                    <div className="boutons-projet">
                        <button className="submit-btn">WEBSITE</button>
                        <button className="submit-btn">GIT</button>
                    </div>
                </div>
            </article>
        );
    }
}

export default Articles;