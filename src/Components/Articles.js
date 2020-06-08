import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import "../articles.css";
import "../contact.css";

class Articles extends Component {


    render() {

        const {articleId, articleImg, articleTitre, articleLegende, articleWebsite, articleGithub, articleTechnos} = this.props

        return(
            <article id={articleId}>
                <div className="article-img">
                    <img src={require(`../img/${articleImg}`)}  className="projet-img" alt="nom-du-projet"/>
                </div>
                <div className="article-legende">
                    <h3>{articleTitre}</h3>
                    <div className="description-projet">
                        <p>{articleLegende}</p>
                    </div>
                    <div className="legende-techno">
                        <p className="technos">{articleTechnos}</p>
                    </div>
                    <div className="boutons-projet">
                        <button className="submit-btn"><a href={articleWebsite} target="_blank" rel="noopener noreferrer">DEMO</a></button>
                        <button className="submit-btn"><a href={articleGithub} target="_blank" rel="noopener noreferrer">GITHUB</a></button>
                    </div>
                </div>
            </article>
        );
    }
}

export default Articles;