import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading flex justify-between">
            <div className="heading-left row flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>New Arrivals</h2>
            </div>
            <div className="heading-right flex items-center">
              <span>View all</span>
              <i>
                <FaCaretRight />
              </i>
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
