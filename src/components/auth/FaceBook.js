import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class FaceBook extends Component {

    responseFacebook = facebookData => {
        this.props.userFacebookSignInRequest(facebookData);
    }

    componentClicked = () => {
        console.log("Clicked");
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId="FACEBOOK ID HERE"
                    autoLoad={true}
                    fields="name,email"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            </div>
        )
    }
}

export default FaceBook;