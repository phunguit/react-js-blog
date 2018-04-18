import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation   from './Navigation';
import Header       from './Header';
import routes       from '../routes-config';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <div className="container">
            <Switch>{ this.getContentPage(routes) }</Switch>
          </div>
        </div>
      </Router>
    );
  }

  getContentPage(routes) {
    return routes.map((item, index) => {
      return (
        <Route key={index} exact={ item.exact } path={ item.path } component={ item.main } />
      )
    });
  }
}

export default App;