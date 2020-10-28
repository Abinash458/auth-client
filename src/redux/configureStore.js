import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducers from "./reducer/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;