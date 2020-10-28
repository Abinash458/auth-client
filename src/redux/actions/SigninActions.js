import { baseUrl } from "../../shared/baseUrl";

export function userSignInRequest(username, password) {
    return dispatch => {
        const loginData = {
            email: username,
            password: password
        }

        return fetch(baseUrl + "/auth/local/start", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
            .then(response => {
                if (response.ok) {
                    // console.log(response.body);
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ": " + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errorMessage = new Error(error.message);
                    throw errorMessage;
                })
            .then(response => response.json())
            .then(response => console.log("Successfully SignIn!"))
            .catch(error => {
                // console.log(error.message)
                alert("Sign Up Failed \n Error: " + error.message);
            });
    }
}
