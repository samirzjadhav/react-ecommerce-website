import React from "react";
import { MdOutlineWindow } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa";
import TopCart from "./TopCart";
import "./style.css";

const TopCate = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading flex justify-between">
            <div className="heading-left row flex">
              <i>
                <MdOutlineWindow />
              </i>
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right flex items-center">
              <span>View all</span>
              <i>
                <FaCaretRight />
              </i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
