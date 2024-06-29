import React from "react";
import Home from "../Components/Mainpages/Home";
import FlashCard from "../Components/FlashDeals/FlashDeals";
import TopCate from "../Components/top/TopCate";
import NewArrivals from "../Components/NewArrivals/NewArrivals";
import DIscount from "../Components/Discount/DIscount";
import Shop from "../Components/Shop/Shop.js";
import Annocument from "../Components/Annocument/annocument.js";

const pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashCard productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <DIscount />
      <Shop ShopItems={shopItems} addToCart={addToCart} />
      <Annocument />
    </>
  );
};

export default pages;
