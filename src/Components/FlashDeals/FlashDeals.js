import React from "react";
import { FaBolt } from "react-icons/fa6";
import FlashCard from "./FlashCard.js";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading flex">
            <i>
              <FaBolt />
            </i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
