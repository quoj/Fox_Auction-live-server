import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Fox Auction</div>
      <nav>
        <ul>
          <li>Shop</li>
          <li><i className="fa fa-user"></i></li>
          <li><i className="fa fa-th"></i></li>
          <li><button className="make-auction">Make Auction</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
