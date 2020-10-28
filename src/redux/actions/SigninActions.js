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
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('token', response.token)
                // console.log(response.data.firstname);
            })
            .catch(error => {
                // console.log(error.message)
                alert("Sign Up Failed \n Error: " + error.message);
            });
    }
}
