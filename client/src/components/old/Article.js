import React, { Component } from "react";
import Search from './SearchForm';

const Article = props => {

    {props.map( (article) => {

        return <div className="well">
        <h3>{article.snippet}</h3>
        <h5>{article.date}</h5>
        <h4>{article.web_url}</h4>
        </div>;
        })
    }   
};

export default Article;