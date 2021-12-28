import React, { Component } from "react";
import RegisterForm from "../components/register-form";

class RegisterPage extends Component {
  render() {
    return (
      <div class="container pt-3 border border-dark border-top-0 rounded-bottom bg-light">
        <h2 class = "text-center"> Register an account </h2>
        <hr></hr>
        <RegisterForm/>
      </div>
    );
  }
}

export default RegisterPage;
