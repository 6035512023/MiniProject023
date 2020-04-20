import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import {browserHistory} from 'react-router'
import {render} from 'react-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
// import { Form } from 'react-bootstrap';
render (
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
)


serviceWorker.unregister();
