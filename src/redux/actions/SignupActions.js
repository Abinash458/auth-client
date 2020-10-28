import { baseUrl } from "../../shared/baseUrl";

export function userSignUpRequest(fullname, gender, email, password, dob) {
    return dispatch => {

        const userData = {
            fullname: fullname,
            sex: gender,
            email: email,
            password: password,
            dob: dob
        }

        return fetch(baseUrl + "/auth/local/new", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    return response;
                }
                else if (response.status === 406) {
                    alert("User already Exixts");
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
            .then(response => alert("Successfully SignUp"))
            .catch(error => {
                console.log(error.message)
                // alert("Sign Up Failed \n Error: " + error.message);
            });
    }
}