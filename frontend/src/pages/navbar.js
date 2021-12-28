import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div class="container bg-light bg-gradient border border-dark">
        <nav class="navbar navbar-expand-xl navbar-light bg-light">
          <NavLink to="/" class="navbar-brand">
            SEPER
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="border-left border-dark pl-5 pr-3">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li class="border-left border-dark pl-5 pr-3">
                <NavLink to="/se-practice">Select the Practice</NavLink>
              </li>
              <li class="border-left border-dark pl-5">
                <NavLink to="/submit-article">Submit an Article</NavLink>
              </li>
              <li class="border-left border-dark pl-5">
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;