import React from "react";
import "./style.css";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Cart = ({ cartItem, addToCart, decreaseQty }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // prodcut qty total
  return (
    <>
      <section className="cart-items">
        <div className="container flex justify-between">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {cartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div
                  className="cart-list product flex  justify-between"
                  key={item.id}
                >
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark">
                          {" "}
                          <IoClose />
                        </i>
                      </button>
                    </div>

                    <div className="cartControl flex justify-between">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus">
                          {" "}
                          <FaPlus />
                        </i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus">
                          <FaMinus />
                        </i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" flex justify-between items-center">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
