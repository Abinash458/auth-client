import React, { Component } from 'react'
import SignInForm from './SignInForm'

export default class SignInPage extends Component {
    render() {
        const { userSignInRequest, resetSignInForm, userFacebookSignInRequest } = this.props
        return (
            <div className="signinform-wrapper">
                <SignInForm
                    userSignInRequest={userSignInRequest}
                    resetSignInForm={resetSignInForm}
                    history={this.props.history}
                    userFacebookSignInRequest={userFacebookSignInRequest}
                />
            </div>

        )
    }
}
