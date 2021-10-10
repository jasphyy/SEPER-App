import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div class="container pt-3 border border-dark border-top-0 rounded-bottom bg-light">
        <h2> How to use SEPER </h2>
        <hr></hr>
        <p>
          - To view all articles in SEPER, click the “Select the Practice”
          button in the menu <br></br>
          - To find articles by topic, title, author, or
          publication date, click the “Select the Practice” button in the menu
          and place a query in the search bar to view SEPER approved articles,
          followed by clicking the "search" button. <br></br>
          - To submit an article
          recommendation for SEPER, click the “Submit an Article” tab in the
          menu and fill out the required details in the form displayed.
        </p>
      </div>
    );
  }
}

export default HomePage;
