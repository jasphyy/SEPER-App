import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


//Title and Navbar 
import Title from "./pages/title";
import Navbar from "./pages/navbar";

//Page Windows
import HomePage from "./pages/home-page";
import SEPracticePage from "./pages/se-practice-page";
import SubmitPage from "./pages/submit-page";
import RegisterPage from "./pages/register-page";

//Custom CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
          <Title />
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/se-practice" component={SEPracticePage} />
          <Route path="/submit-article" component={SubmitPage} />
          <Route path ="/register" component={RegisterPage} />
      </Router>
    );
  }

}

export default App;

