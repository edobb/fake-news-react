import React, { Component } from 'react';

const SearchForm = props => <form className="search">
<div className="form-group">
  <label htmlFor="breed">Article Search:</label>
  <input
    value={props.search}
    onChange={props.handleInputChange}
    name="search"
    type="text"
    className="form-control"
    placeholder="Enter A Search Term"
    id="search"
  />
 <button
    type="submit"
    onClick={props.handleFormSubmit}
    className="btn btn-success"
  >
    Search
  </button>
</div>
</form>;