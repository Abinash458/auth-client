import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import SignInPage from '../components/auth/SignIn/SignInPage';
import SignUpPage from '../components/auth/SignUp/SignUpPage';
import { userSignUpRequest } from '../redux/actions/SignupActions';
import { userSignInRequest } from '../redux/actions/SigninActions';
import { userSignOutRequest } from '../redux/actions/SignOutActions';
import { userFacebookSignInRequest } from '../redux/actions/FaceBookSignInAction';
import NavBar from './NavBar/NavBar';
import HomeComponent from './HomeComponent';

class MainComponent extends Component {
    render() {
        // console.log(this.props.history);

        return (
            <div className="App">
                <NavBar history={this.props.history} userSignOutRequest={this.props.userSignOutRequest} />
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/signin" component={() => <SignInPage history={this.props.history} userSignInRequest={this.props.userSignInRequest} resetSignInForm={this.props.resetSignInForm} userFacebookSignInRequest={this.props.userFacebookSignInRequest} />} />
                    <Route path="/signup" component={() => <SignUpPage history={this.props.history} userSignUpRequest={this.props.userSignUpRequest} resetSignUpForm={this.props.resetSignUpForm} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({
    userSignUpRequest: (fullname, gender, email, password, dob) => dispatch(userSignUpRequest(fullname, gender, email, password, dob)),
    userSignInRequest: (username, password) => dispatch(userSignInRequest(username, password)),
    resetSignUpForm: () => { dispatch(actions.reset('signup')) },
    resetSignInForm: () => { dispatch(actions.reset('signin')) },
    userSignOutRequest: () => dispatch(userSignOutRequest()),
    userFacebookSignInRequest: (facebookData) => dispatch(userFacebookSignInRequest(facebookData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))
// export default MainComponent;