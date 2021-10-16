import React, { useContext } from "react";
import {useHistory } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Context/CartSelector";
import { Context as CartContext } from "../../Context/CartContext";
import "./CartDropdown.css";

const CartDropdown = () => {
  const { state, toggleCartHidden } = useContext(CartContext);
  const history = useHistory()
  const cartItems = selectCartItems(state);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
export default CartDropdown;
