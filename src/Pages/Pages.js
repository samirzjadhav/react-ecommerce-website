import React from "react";
import Home from "../Components/Mainpages/Home";
import FlashCard from "../Components/FlashDeals/FlashDeals";
import TopCate from "../Components/top/TopCate";
import NewArrivals from "../Components/NewArrivals/NewArrivals";
import DIscount from "../Components/Discount/DIscount";

const pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashCard productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <DIscount />
    </>
  );
};

export default pages;
