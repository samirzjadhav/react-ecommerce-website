import React from "react";

const Cart = ({ cartItem, addToCart }) => {
  return (
    <>
      <section className="cart-items">
        <div className="container flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items Product"> No items are add on cart</h1>
            )}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
