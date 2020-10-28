// import { baseUrl } from '../../shared/baseUrl';

export function userFacebookSignInRequest(facebookData) {
    return dispatch => {

        // return fetch(baseUrl + "/auth/local/start", {
        //     method: "POST",
        //     body: JSON.stringify(facebookData),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     credentials: 'same-origin'
        // })
        //     .then(response => response.json())
        //     .then(response => {
        //         // localStorage.setItem('fbToken', facebookData.accessToken)
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         // console.log(error.message)
        //         alert("Sign Up Failed \n Error: " + error.message);
        //     });
        console.log(facebookData);
    }
}