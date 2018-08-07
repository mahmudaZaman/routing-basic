import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Router, createHashHistory } from 'history';
import { browserHistory } from 'react-router';

const history = createHashHistory({
    queryKey: false
})
 
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<HashRouter basename="/app" keyLength={12} history={history}><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
