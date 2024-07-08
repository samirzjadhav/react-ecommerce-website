import React from "react";
import { FaBolt } from "react-icons/fa6";
import FlashCard from "./FlashCard.js";
import "./style.css";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash bg-[#f6f9fc]">
        <div className="container">
          <div className="heading flex items-center">
            <i>
              <FaBolt />
            </i>
            <h1 className="text-[25px] font-bold">Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
