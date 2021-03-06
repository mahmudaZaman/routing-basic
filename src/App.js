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
import User from './components/user';

class App extends Component {
  render() {
    const FadingRoute = ({ component: Component, ...rest }) => {
      console.log('getting rest properties', rest);
      console.log('getting Component', Component);
      return(
      <Route {...rest} render={props => (
        <Component {...props} >testing hello</Component>
      )} />)
    }

    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/common" component={Common} />
          <Route exact path="/random-path" render={() => (
            <Redirect to="/common" />
            // <Redirect from='/common' to='/contact' />
          )} />
          <Route path="/user/:username" component={User}/>
          <Route path="/home" render={() => <div>Home test</div>}/>
          <FadingRoute path="/cool" component={Common}/>
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
