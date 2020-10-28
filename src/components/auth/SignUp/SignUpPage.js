import React, { Component } from 'react';

import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
    render() {
        const { userSignUpRequest, resetSignUpForm, history } = this.props;
        return (
            <SignUpForm history={history} userSignUpRequest={userSignUpRequest} resetSignUpForm={resetSignUpForm} />
        )
    }
}

// SignUpPage.propTypes = {
//     userSignUpRequest: React.PropTypes.func.isRequired
// }

export default SignUpPage;