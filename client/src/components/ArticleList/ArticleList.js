import React from 'react';
import ArticleCard from '../ArticleCard';

const ArticleList = props => 
    <div className="article-list">
        <ArticleCard 
        articles={props.arr}
        onClick={props.saveItem}
        />
    </div>;
export default ArticleList;

