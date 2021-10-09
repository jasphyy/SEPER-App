import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//Title and Navbar Components
import Title from "./components/title";
import Navbar from "./components/navbar";

//Page Windows
import HomePage from "./pages/home-page";
import SearchPage from "./pages/search-page";
import SEPracticePage from "./pages/se-practice-page";
import SubmitPage from "./pages/submit-page";

//Custom CSS
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        
          <Title />
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/se-practice" component={SEPracticePage} />
          <Route path="/submit-article" component={SubmitPage} />
   
      </Router>
    );
  }
}

export default App;

