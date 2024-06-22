import React from "react";
import Home from "../Components/Mainpages/Home";
import FlashCard from "../Components/FlashDeals/FlashDeals";

const pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashCard productItems={productItems} />
    </>
  );
};

export default pages;
