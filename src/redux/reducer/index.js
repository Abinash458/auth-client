import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';

import { InitialSignUpState } from './SignUpReducer';
import { InitialSignInState } from './SignInReducer';

export default combineReducers({
    ...createForms({
        signup: InitialSignUpState,
        signin: InitialSignInState
    })
});