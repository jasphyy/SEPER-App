import React, { Component } from "react";

class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRegisterButton = this.onChangeRegisterButton.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeRegisterButton(e) {
        e.preventDefault();
        //Create a register api
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto pb-5">
                        <form noValidate onChangeRegisterButton={this.onChangeRegisterButton}>
                            <div className="form-group">
                                <label for="registerName">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="Name"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                    id="registerName"
                                />
                            </div>

                            <div className="form-group">
                                <label for="registerEmail">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    id="registerEmail"
                                />
                            </div>

                            <div className="form-group">
                                <label for="registerPassword">Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="passwpord"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    id="regsiterPassword"
                                />
                            </div>

                            <input data-testid="Submit"
                                type="submit"
                                className="btn btn-outline-warning btn-block mt-4 pb-2"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisterPage;