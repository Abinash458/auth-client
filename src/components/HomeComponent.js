import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

import { baseUrl } from '../shared/baseUrl';

class HomeComponent extends Component {


    componentDidMount() {
        return fetch(baseUrl + "/", {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response.message);
                return response;
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    {
                        localStorage.getItem('token') ?
                            <h1 className="display-3">You are logged in!</h1>
                            :
                            <h1 className="display-3">You are not logged in!</h1>
                    }
                </Jumbotron>
            </div>
        );
    }
};

export default HomeComponent;