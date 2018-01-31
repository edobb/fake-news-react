import React, { Component } from 'react';
import axios from 'axios';
import SavedArticles from "../components/SavedArticles";
import ArticleCard from "../components/ArticleCard";
import Wrapper from '../components/Wrapper';

class Saved extends Component {

    componentDidMount() {
        axios
          .get('/saved-articles')
          .then(function(data, error) {
            console.log(data);
            this.setState(data.data);
          })
          .catch((error) => console.log(error));
      }


    render() {
        return(
            <div>
            <Wrapper>
                <SavedArticles />

            </Wrapper>
            </div>
        )
    }

};

export default Saved;