import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import MainComponent from "./components/MainComponent";
import store from './redux/configureStore';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainComponent />
      </Router>
    </Provider>
  );
}

export default App;
