import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";


import Home from "./pages/Home";

import SEPractice from "./pages/SEPractice";
import SubmitArticle from "./pages/SubmitArticle"; 



const App = () =>  {
    return (
        <Router>
        <div class = "main-container">
          <h1 class = "title">Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>

            </ul>
          <div className="content">
            <Route exact path="/" component = {Home}/>
            <Route  path="/SEPractice" component={SEPractice}/>
            <Route  path="/SubmitArticle" component={SubmitArticle}/>
          </div>
        </div>
        </Router>
    );
}
 
export default App;
