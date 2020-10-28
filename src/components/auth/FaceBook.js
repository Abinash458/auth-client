import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class FaceBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            // userId: '',
            // name: '',
            // email: '',
        }
    }

    responseFacebook = facebookData => {
        this.props.userFacebookSignInRequest(facebookData);
        // console.log(facebookData)
        // setTimeout(() => {
        //     window.location.replace('/')
        // }, 1500);
    }

    componentClicked = () => {
        console.log("Clicked");
    }

    render() {

        // let fbContent;

        // if (this.state.isLoggedIn) {
        //     fbContent = null;
        // } else {
        //     fbContent = (
        //         <FacebookLogin
        //             appId="868067727065043"
        //             autoLoad={true}
        //             fields="name,email"
        //             onClick={this.componentClicked}
        //             callback={this.responseFacebook} />
        //     );
        // }


        return (
            <div>
                {/* {fbContent} */}
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