import React from "react";
import { FaBolt } from "react-icons/fa6";
const FlashCard = () => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading flex items-center">
            <i>
              <FaBolt />
            </i>
            <h1 className="font-bold text-[24px]">Flash Deals</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashCard;
