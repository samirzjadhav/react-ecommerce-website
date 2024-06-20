import React from "react";
import Home from "../Components/Mainpages/Home";
import FlashCard from "../Components/FlashDeals/FlashDeals";

const pages = ({ productItems }) => {
  return (
    <>
      <Home />
      <FlashCard productItems={productItems} />
    </>
  );
};

export default pages;
