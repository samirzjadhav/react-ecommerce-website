import React from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";

const Search = ({ cartItem }) => {
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
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
            <i className="icon-circle flex justify-center items-center">
              <FaRegCircleUser />
            </i>
            <div className="cart w-[50px] flex justify-center items-center icon-circle">
              <Link to="/cart">
                <i>
                  <HiShoppingBag />
                </i>
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
