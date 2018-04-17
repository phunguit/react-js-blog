import React, { Component } from 'react';

import Navigation   from './Navigation';
import Header       from './Header';
import Carousel     from './Carousel';
import NewsItem     from './NewsItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <div className="container">
          <Carousel />
          <NewsItem />
          
        </div>

      </div>
    );
  }
}

export default App;