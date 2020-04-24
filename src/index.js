import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import {browserHistory} from 'react-router'
import {render} from 'react-dom';
import config from './components/config';
import firebase from 'firebase/app'
import 'firebase/firestore'

// ReactDOM.render(<App />, document.getElementById('root'));
// import { Form } from 'react-bootstrap';

if( firebase.apps.length === 0)
    firebase.initializeApp(config)

export const firestore = firebase.firestore()

render (
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
)


serviceWorker.unregister();
