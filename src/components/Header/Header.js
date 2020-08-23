import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/Home">
          Product Khareed
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-item" to="/Home" activeclassname="active">
              Home
            </NavLink>
            <NavLink className="nav-item" to="/Blog" activeclassname="active">
              Blog
            </NavLink>
            <NavLink className="nav-item" to="/About" activeclassname="active">
              About
            </NavLink>
            <NavLink
              className="nav-item"
              to="/Contact"
              activeclassname="active"
            >
              Contact
            </NavLink>
            <NavLink
              className="nav-item"
              to="/Privacy"
              activeclassname="active"
            >
              Privacy
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
