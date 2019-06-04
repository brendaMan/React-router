import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom';
import History from './History';
import Home from './Home';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
            <div>
              <NavLink exact to="/" className="home"> Home </NavLink>
              <NavLink to="/our-history" className="home" activeStyle={{color: 'pink'}}> History </NavLink>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/our-history" component={History} />
              </Switch>
            </div>
          </BrowserRouter>
      );
  }
}

export default App;
