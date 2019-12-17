import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./Admin/reducer/index";
import './index.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(reduxThunk))
  );


ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
