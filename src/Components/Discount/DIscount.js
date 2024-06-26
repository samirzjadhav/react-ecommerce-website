import React from "react";
import Dcard from "./Dcard";
import { FaCaretRight } from "react-icons/fa";

const DIscount = () => {
  return (
    <>
      <section className="Discount background">
        <div className="container">
          <div className="heading flex justify-between">
            <div className="heading-left row flex">
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right flex items-center">
              <span>View all</span>
              <i>
                <FaCaretRight />
              </i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default DIscount;
