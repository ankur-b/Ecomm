import React from "react";
import "./CartItem.css";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span >{name}</span>
        <span >
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
