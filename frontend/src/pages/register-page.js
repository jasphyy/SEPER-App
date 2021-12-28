import React, { Component } from "react";

class RegisterPage extends Component {

    constructor(props)
    {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRegisterButton = this.onChangeRegisterButton.bind(this);

        this.state = {
            name : '',
            email : '',
            password : '',
        };
    }

    onChangeName(e)
    {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e)
    {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e)
    {
        this.setState({
            password: e.target.value
        });
    }

    onChangeRegisterButton(e)
    {
        e.preventDefault();
        //Create a register api
    }

    render() {
        return (
            <div class="container pt-3 border border-dark border-top-0 rounded-bottom bg-light">
                <h1>Register Page</h1>
                <form>
                    <input type = "text" placeholder="Name"/>
                    <input type = "email" placeholder="Email" />
                    <input type = "password" placeholder="Password" />
                    <input data-testid = "Confirm"
                    type = "submit"
                    className="btn btn-outline-warning btn-block mt-4 pb-2"
                    />
                    </form>
            </div>
        )
    }
}
export default RegisterPage;