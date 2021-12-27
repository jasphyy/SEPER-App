import React, { Component } from "react";

class RegisterPage extends Component {
    render() {
        return (
            <div class="container pt-3 border border-dark border-top-0 rounded-bottom bg-light">
                <h1>Register Page</h1>
                <form>
                    <input type = "text" placeholder="Name"/>
                    <input type = "email" placeholder="Email" />
                    <input type = "password" placeholder="Password" />
                </form>
            </div>
        )
    }
}
export default RegisterPage;