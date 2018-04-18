import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    return (
        <div className="bg-faded p-4 my-4">
            <hr className="divider" />
            <h2 className="text-center text-lg text-uppercase my-0">Build a website
                <strong>worth visitng</strong>
            </h2>
            <hr className="divider" />
            <img className="img-fluid float-left mr-4 d-none d-lg-block" src="img/intro-pic.jpg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolore voluptatem, deleniti dignissimos excepturi veritatis cum hic sunt perferendis ipsum perspiciatis nam officiis sequi atque enim ut! Velit, consectetur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam pariatur perspiciatis reprehenderit illo et vitae iste provident debitis quos corporis saepe deserunt ad, officia, minima natus molestias assumenda nisi velit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit totam libero expedita magni est delectus pariatur aut, aperiam eveniet velit cum possimus, autem voluptas. Eum qui ut quasi voluptate blanditiis?</p>
        </div>
    );
  }
}

export default NewsItem;