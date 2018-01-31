import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
    
    state = {
        search: '',
        results: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

    render(){
        return <div>
            <SearchForm 
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
            <ArticleList />
            </div>
        
    };

};

export default Search;