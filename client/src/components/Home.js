import React from "react";
import API from "../utils/API";
import Wrapper from "./Wrapper";
import ArticleList from "./ArticleList";
import SearchForm from "./SearchForm";
import axios from 'axios';


class Home extends React.Component {

    state = {
        search: "",
        results: []
    };

    // componentDidMount(){
    //     this._searchArticles(this.state.search);
    // }

    _handleInputChange = event => {
      this.setState({ search: event.target.value});
      
    };
    
    _handleFormSubmit = event => {
      
      event.preventDefault();
      this._searchArticles(this.state.search);
        
      this.setState({ search: ''});
          
          
    };
    
    _searchArticles = event => {
        API.getArticles(this.state.search)
            .then(res => {
                this.setState({ results: res.data.response.docs });
                console.log(res.data);
            })
            .catch(err => console.log(err));
 
    };

    saveItem = (value) => {
        console.log(value);
        axios
            .post('/saved-articles', value)
            .then((data) => {
                this.setState()
            });

    };

    clearArticles = event => {

        this.setState({ results: [] });

        console.log(this.state.results);
        
    };
    // _searchArticles = event => {
    //     API.getArticles(this.state.search)
    //     .then(res => {           
    //         this.setState({ results: res.data.response.docs })
    //         console.log(this.state);

    //       })
    //   .catch(err => console.log(err));
     
    // };
 
    render() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">Fake News NYT</h1>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <br />
        
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                            </div>
                            <div className="panel-body">

                            <SearchForm 
                            value={this.state.search}
                            handleFormSubmit={this._handleFormSubmit}
                            handleInputChange={this._handleInputChange}
                            clearArticles={this.clearArticles}
                            />
                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col=sm-12">
                
                       <ArticleList 
                       arr={this.state.results}
                       saveItem={this.saveItem.bind(this)}
                       />
                    
                    </div>
                </div>
            </div>
        );
    }

};

export default Home;