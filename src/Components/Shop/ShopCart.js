import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const ShopCart = ({ shopItems = [], addToCart }) => {
  const [count, setCount] = useState(0);

  // Log the shopItems to debug
  useEffect(() => {
    console.log("shopItems:", shopItems);
  }, [shopItems]);

  const increment = () => {
    setCount(count + 1);
  };

  // Additional check for undefined or null
  if (!shopItems) {
    console.error("shopItems is undefined or null:", shopItems);
    return null; // Or render some fallback UI
  }

  if (!Array.isArray(shopItems)) {
    console.error("shopItems is not an array:", shopItems);
    return null; // Or render some fallback UI
  }

  return (
    <>
      {shopItems.map((item, index) => (
        <div className="box" key={index}>
          <div className="product mtop">
            <div className="img">
              <span className="discount">{item.discount}% Off</span>
              <img src={item.cover} alt={item.name} />
              <div className="product-like">
                <label>{count}</label> <br />
                <i onClick={increment}>
                  {" "}
                  <FaRegHeart />
                </i>
              </div>
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <div className="rate flex">
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
                <IoMdStar fill="#ffcd4e" size={20} />
              </div>
              <div className="price">
                <h4>${item.price}.00 </h4>
                <button onClick={() => addToCart(item)}>
                  <i>
                    <FaPlus />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

ShopCart.propTypes = {
  shopItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ShopCart;
