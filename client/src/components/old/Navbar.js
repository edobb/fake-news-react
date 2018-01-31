import React, { Component } from "react";
import { Link } from "react-router-dom";


const NavBar = props =>

<nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <Link className="navbar-brand" to="/">
      Fake News Times
    </Link>
  </div>
  <ul className="nav navbar-nav">
    <li
      className={
        window.location.pathname === "/"
          ? "active"
          : ""
      }
    >
      <Link to="/" handlePageChange={props.handlepagechange}>Home</Link>
    </li>
    <li
      className={
       window.location.pathname === "/saved"
          ? "active"
          : ""
      }
    >
      <Link to="/saved" handlePageChange={props.handleagechange}>Saved Articles</Link>
    </li>
    
  </ul>
</div>
</nav>;
export default Navbar;