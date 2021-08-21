import React,{useContext} from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import {Context as CartContext} from '../../Context/CartContext';
import "./CartIcon.css";

const CartIcon = () => {
  const {toggleCartHidden} = useContext(CartContext)
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
