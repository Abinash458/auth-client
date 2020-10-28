import React, { Component } from 'react';

import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
    render() {
        const { userSignUpRequest, resetSignUpForm, history } = this.props;
        return (
            <div className="signinform-wrapper">
                <SignUpForm history={history} userSignUpRequest={userSignUpRequest} resetSignUpForm={resetSignUpForm} />
            </div>
        )
    }
}

// SignUpPage.propTypes = {
//     userSignUpRequest: React.PropTypes.func.isRequired
// }

export default SignUpPage;