import React,{useContext} from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import {selectCartItemsCount} from '../../Context/CartSelector';
import {Context as CartContext} from '../../Context/CartContext';
import "./CartIcon.css";

const CartIcon = () => {
  const {state, toggleCartHidden} = useContext(CartContext)
  const itemCount = selectCartItemsCount(state)
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
export default CartIcon;
