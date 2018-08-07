import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import Navigation from './components/navigation';
import Common from './components/common';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/common" component={Common}/>
          <Route exact path="/random-path" render={() => (
              <Redirect to="/common"/>
          )}/>
          <Route component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
