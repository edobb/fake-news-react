import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Saved from "./pages/Saved";
import './App.css';
 

class App extends React.Component {
  state = {
    currentPage: "Home"
  };

  handlepagechange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return <Router>
    <div>
      <NavBar 
        handlePageChange={this._handlePageChange} />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Wrapper>

  </div>
    
  </Router>;
  }
};

export default App;
