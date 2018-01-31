import React from 'react';

const SearchForm = props =>  <form className="search">
  
               <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input 
                  name="search"
                 value={props.value}
                  onChange={props.handleInputChange}
                  type="text" className="form-control" id="search" />
                      
                </div>
  
              <button 
                  onClick={props.handleFormSubmit}
                  type="submit"
                  className="btn btn-default"
                 
                >
                  <i className="fa fa-search"></i>
                  Search
                </button>
                <button 
                 
                  type="button"
                  className="btn btn-default"
                  id="clear-all"
                  onClick={props.clearArticles}
                >
                  <i className="fa fa-trash"></i>
                  Clear Results
                </button>
  
              </form>;
export default SearchForm;