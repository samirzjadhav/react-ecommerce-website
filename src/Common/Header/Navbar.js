import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState();

  return (
    <>
      <header className="header">
        <div className="container d-flex">
          <div className="categories d-flex">
            <span></span>
            <h4>
              Categories <i></i>
            </h4>
          </div>
          <div className="navlink">
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vender">vendor account</Link>
              </li>
              <li>
                <Link to="/track">Track my order</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="close home-btn"></i>
              ) : (
                <i className="open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
