import React, { Component } from 'react';
import { Button, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
// import { FacebookLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            selectedData: null
        };
    }

    onSubmitHandler = (values) => {
        // e.preventDefault();
        this.setState({ isLoading: true });
        var dob = new Date(this.state.selectedData).toISOString().replace(/T.*/, '').split('-').join('-');
        this.props.userSignUpRequest(values.fullname, values.gender, values.email, values.password, dob)
        this.props.resetSignUpForm();
        setTimeout(() => {
            window.location.replace('/signin');
        }, 1000);
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 500);
    }

    onChangeHandler = (date) => {
        this.setState({ selectedData: date })
    }


    render() {
        return (
            <div>
                <Form model="signup" className="login-form" onSubmit={(values) => this.onSubmitHandler(values)}>
                    <h1 className="font-weight-bold text-center">Sign Up</h1>
                    <div className="pt-3">
                        <Label>Full Name</Label>
                        <Control.text
                            className={cx("input", "form-control")}
                            model=".fullname"
                            id="fullname"
                            name="fullname"
                            placeholder="Full Name"
                            validators={{
                                required
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".fullname"
                            show="touched"
                            messages={{
                                required: 'Required',
                                // minLength: 'Must be greater than 2 characters',
                                // maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </div>
                    <div className="pt-3">
                        <Label>Gender</Label>
                        <Control.select
                            model=".gender"
                            type="select"
                            className={cx("select", "form-control")}
                            name="gender"
                        // validators={{
                        //     required
                        // }}
                        >
                            <option>Female</option>
                            <option>Male</option>
                            <option>Others</option>
                        </Control.select>
                        {/* <Errors
                        className="text-danger"
                        model=".gender"
                        show="touched"
                        messages={{
                            required: 'Required',
                        }}
                    /> */}
                    </div>
                    <div className="pt-3">
                        <Label>Email</Label>
                        <Control.text
                            className={cx("input", "form-control")}
                            model=".email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            validators={{
                                required, validEmail
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
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
                                required, minLength: minLength(6), maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 6 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </div>
                    <div className="pt-3">
                        <div>
                            <Label>DOB</Label>
                        </div>
                        <DatePicker
                            selected={this.state.selectedData}
                            onChange={(date) => this.onChangeHandler(date)}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            dateFormat="yyyy/MM/dd"
                            placeholderText="YYYY/MM/dd"
                            className="datepicker"
                            maxDate={new Date()}
                        // minDate={new Date(Date.now() - 12 * 365 * 24 * 60 * 60 * 1000)}
                        />
                    </div>
                    <div className="pt-3">
                        <Button disabled={this.state.isLoading} className="btn-lg btn-dark btn-block">Sign Up</Button>
                    </div>
                    <div className="text-center pt-3">
                        {/* Or continue with your social account */}
                    </div>
                    {/* <FacebookLoginButton className="mt-3 mb-3" /> */}
                    <div className="text-center">
                        Already have an account?{" "}
                        <Link to="/signin" >
                            Sign In
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

// SignUpForm.propTypes = {
//     userSignUpRequest: React.PropTypes.func.isRequired
// }

export default SignUpForm;