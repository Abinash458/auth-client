import { baseUrl } from "../../shared/baseUrl";

export function userSignOutRequest(username, password) {
    return dispatch => {

        return fetch(baseUrl + "/auth/end", {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            // credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(response => {
                localStorage.removeItem('token')
                console.log(response);
            })
            .catch(error => {
                console.log(error.message)
                // alert("Sign Out Failed \n Error: " + error.message);
            });
    }
}