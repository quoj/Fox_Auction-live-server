import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="product-detail-container">
        <div className="product-images">
          <img src="main-image.jpg" alt="Main" className="main-image"/>
          <div className="thumbnails">
            <img src="thumbnail1.jpg" alt="Thumbnail 1"/>
            <img src="thumbnail2.jpg" alt="Thumbnail 2"/>
            <img src="thumbnail3.jpg" alt="Thumbnail 3"/>
          </div>
        </div>
        <div className="product-info">
          <p className="product-date">Fri 18 Aug 10:50</p>
          <h1>Books</h1>
          <p>Leading bid <span className="bold">$1000</span></p>
          <p className="end-time">End in <span className="bold">1 day 5 hour</span></p>
          <input type="text" placeholder="Enter your maximum bid" />
          <button className="place-bid">Place Bid</button>
          <div className="payment-info">
            <h2>Payment</h2>
            <p>All payments are reviewed by Fox Auction for your security.</p>
            <p className="additional-info">Direct payment | Partial payment | Invoice <span className="read-more">Read more</span></p>
          </div>
          <div className="seller-info">
            <p>Markus</p>
            <p>Hanoi, Vietnam</p>
            <p>4.5 stars | 10,000 Reviews</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
