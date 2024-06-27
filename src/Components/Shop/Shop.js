import React from "react";
import Catg from "./Catg.js";
import ShopCart from "./ShopCart.js";
import { FaCaretRight } from "react-icons/fa";
import "./style.css";

const Shop = (shopItems, addToCart) => {
  return (
    <>
      <section className="shop background">
        <div className="container flex">
          <Catg />
          <div className="contentWidth">
            <div className="heading flex justify-between">
              <div className="heading-left row flex">
                <h2>Mobile Phones </h2>
              </div>
              <div className="heading-right flex items-center">
                <span>View all</span>
                <i>
                  <FaCaretRight />
                </i>
              </div>
            </div>
            <div className="product-content grid3">
              {" "}
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
