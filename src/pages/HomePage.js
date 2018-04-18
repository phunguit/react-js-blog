import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import NewsItem from '../components/NewsItem';

class HomePage extends Component {
  render() {
    return (
        <div>
            <Carousel />
            <NewsItem />
        </div>
    );
  }
}

export default HomePage;