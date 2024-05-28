import React from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";

const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c-flex">
          {" "}
          <div className="logo width">
            <img src={Logo} alt="" />
          </div>
          <div className="search-box flex">
            <i>
              <FaSearch />
            </i>
            <input type="text" placeholder="Search and hit enter" />
            <span>All category</span>
          </div>
          <div className="icon flex width">
            <i>
              <FaRegCircleUser />
            </i>
            <div className="cart"></div>
            <Link to="/cart">
              <i>
                <HiShoppingBag />
              </i>
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
