import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Router, createHashHistory } from 'history';
import { BrowserHistory } from "react-history";
import createBrowserHistory from 'history/createBrowserHistory';

// const history = createHashHistory({
//     queryKey: false
// })
const history = createBrowserHistory({
    forceRefresh : false
});
const location = history.location;
console.log("location", location);

history.listen((location, action) => {
    console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
    )
    console.log(`The last navigation action was ${action}`)
})

ReactDOM.render(<BrowserRouter basename="/app" keyLength={12} history={history}><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<HashRouter basename="/app" keyLength={12} history={history}><App /></HashRouter>, document.getElementById('root'));
// registerServiceWorker();
