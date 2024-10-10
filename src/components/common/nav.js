import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaTh } from 'react-icons/fa';

function Nav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const _getCategories = async () => {
      const url = "http://localhost:5196/api/Products";
      try {
        const rs = await axios.get(url);
        setCategories(rs.data);
      } catch (error) {
        console.log(error);
      }
    };
    _getCategories();
  }, []);

  // Style cho các icon và button
  const iconsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginLeft: "20px"
  };
  const iconStyle = {
    fontSize: "24px",
    cursor: "pointer"
  };
  const buttonStyle = {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Fox Auction</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
      
            <li className="nav-item">
              <Link className="nav-link" to={"/my-account"}>My Account</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">Cart</span>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div style={iconsStyle}>
            <FaUser style={iconStyle} />
            <FaTh style={iconStyle} />
            <button style={buttonStyle}>Make Auction</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
