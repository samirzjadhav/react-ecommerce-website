import React from "react";
import Home from "../Components/Mainpages/Home";
import FlashCard from "../Components/FlashDeals/FlashDeals";
import TopCate from "../Components/top/TopCate";

const pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashCard productItems={productItems} addToCart={addToCart} />
      <TopCate />
    </>
  );
};

export default pages;
