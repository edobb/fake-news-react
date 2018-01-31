import React from 'react';

const ArticleCard = props => {

    const allArticles = props.articles;

    return ( 
    
        
    allArticles.map( (article) => {
        return <div className="well">
            <h3>{article.headline.main}</h3>
            <a href={article.web_url} target="_blank">Click For Original Article</a>
            <h5>{article.pub_date}</h5>           
             <button
                type="submit"
                onClick={() => props.onClick(article)}
                >SAVE ARTICLE</button>
    </div>;

})
)
    
};
export default ArticleCard;