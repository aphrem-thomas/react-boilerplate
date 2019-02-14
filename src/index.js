import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose } from 'redux';
import { counterReducer } from './reducers/appReducer'

const reducer = combineReducers({ counter: counterReducer })
const store = createStore(reducer,compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));