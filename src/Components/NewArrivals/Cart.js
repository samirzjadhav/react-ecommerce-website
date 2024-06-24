import React from "react";
import Ndata from "./Ndata";
import { MdRestaurantMenu } from "react-icons/md";

const Cart = () => {
  return (
    <>
      <div className="content grid1 product">
        {Ndata.map((value, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img src={value.cover} alt="" />
              </div>
              <h4>{value.name}</h4>
              <span>{value.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
