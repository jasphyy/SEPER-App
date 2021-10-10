import React, { Component } from "react";
import SubmitForm from "../components/submit-form";

class SubmitPage extends Component {
  render() {
    return (
      <div class="container pt-3 border border-dark border-top-0 rounded-bottom bg-light">
        <h2 class = "text-center"> Submit an Article </h2>
        <hr></hr>
        <SubmitForm/>
      </div>
    );
  }
}

export default SubmitPage;
