import React from "react";
import Catg from "./Catg.js";
import ShopCart from "./ShopCart.js";
import { FaCaretRight } from "react-icons/fa";
import Sdata from "./Sdata"; // Make sure to import Sdata
import "./style.css";

const Shop = ({ shopItems, addToCart }) => {
  console.log(addToCart);
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
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Example of how you might use the Shop component with props
const ParentComponent = () => {
  const addToCart = (item) => {
    console.log("Add to cart:", item);
  };

  return <Shop shopItems={Sdata.shopItems} addToCart={addToCart} />;
};

export default ParentComponent;
