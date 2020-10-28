import React, { Component } from 'react';
import { Button, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import FaceBook from '../FaceBook';

const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    onSubmitHandler = (values) => {
        // e.preventDefault();
        this.setState({ isLoading: true });
        this.props.userSignInRequest(values.username, values.password);
        this.props.resetSignInForm();
        setTimeout(() => {
            window.location.replace('/');
        }, 1000);
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 500);
    }
    render() {
        return (
            <div>
                <Form model="signin" className="login-form" onSubmit={(values) => this.onSubmitHandler(values)}>
                    <h1 className="font-weight-bold text-center">Sign In</h1>
                    <h4 className="text-center">Welcome!</h4>
                    <div className="pt-3">
                        <Label>Username</Label>
                        <Control.text
                            className={cx("input", "form-control")}
                            model=".username"
                            id="username"
                            name="username"
                            placeholder="Username"
                            validators={{
                                required
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".username"
                            show="touched"
                            messages={{
                                required: 'Required'
                            }}
                        />
                    </div>
                    <div className="pt-3">
                        <Label>Password</Label>
                        <Control.text
                            type="password"
                            className={cx("input", "form-control")}
                            model=".password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            validators={{
                                required
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                                required: 'Required'
                            }}
                        />
                    </div>
                    <div className="pt-3">
                        <Button disabled={this.state.isLoading} className="btn-lg btn-dark btn-block">Sign In</Button>
                    </div>
                    <div className="text-center pt-3">
                        Or continue with your social account
                    </div>
                    <div className="text-center pt-3 pb-3 d-flex justify-content-center">
                        <FaceBook userFacebookSignInRequest={this.props.userFacebookSignInRequest} />
                    </div>
                    <div className="text-center">
                        Dont have an account?{" "}
                        <Link to="/signup" >
                            Sing Up
                    </Link>
                    </div>
                </Form>
                {
                    this.state.isLoading ?
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}
