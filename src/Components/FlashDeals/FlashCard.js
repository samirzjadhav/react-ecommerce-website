import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const FlashCard = ({ productItems }) => {
  return (
    <>
      {productItems.map((product) => {
        <div className="box">
          <div className="product">
            <span className="discount">{productItems.discount}% off</span>
            <img src={productItems.cover} alt="" />
            <div className="product-like">
              <label>0</label>
              <span></span>
              <i>
                <FaRegHeart />
              </i>
            </div>
          </div>
          <div className="product-details">
            <h3>{productItems.name}</h3>
            <div className="rate">
              <i>
                <FaRegStar />
              </i>
              <i>
                <FaRegStar />
              </i>
              <i>
                <FaRegStar />
              </i>
              <i>
                <FaRegStar />
              </i>
              <i>
                <FaRegStar />
              </i>
            </div>
            <div className="price">
              <h4>{productItems.price}</h4>
              <button>
                <i>
                  <FaPlus />
                </i>
              </button>
            </div>
          </div>
        </div>;
      })}
    </>
  );
};

export default FlashCard;
