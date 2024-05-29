import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineWindow } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState();

  return (
    <>
      <header className="header">
        <div className="container d-flex">
          <div className="categories flex justify-center items-center gap-[4px]">
            <span>
              <MdOutlineWindow />
            </span>
            <h4 className="flex items-center gap-[4px]">
              Categories{" "}
              <i>
                <IoChevronDown />
              </i>
            </h4>
          </div>
          <div className="navlink">
            <ul
              className={
                MobileMenu
                  ? "nav-links-MobileMenu"
                  : "link flex gap-[30px] capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
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
                <i className="close home-btn">
                  <IoClose />
                </i>
              ) : (
                <i className="open">
                  <FaBars />
                </i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
