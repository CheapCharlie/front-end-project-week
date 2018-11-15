import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import notesReducer from './Reducers/notesReducer';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);

ReactDOM.render(
    <Provider store={createStore(notesReducer, middleware)}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
