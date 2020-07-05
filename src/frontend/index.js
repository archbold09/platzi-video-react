import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import {Router} from 'react-router'
import {createBrowserHistory} from 'history'
import reducer from './reducers/index';
import initialState from './initialState'
const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
<Provider store={store} >
<Router history={history}>
    <App/>
</Router>
</Provider>
,document.getElementById('app') );