import React, { useContext } from "react";
import { Context as CartContext } from "../../Context/CartContext";
import { selectCartItems, selectCartTotal } from "../../Context/CartSelector";
import StripeCheckout from '../../Components/StripeButton/StripeButton';
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import "./Checkout.css";
const CheckoutPage = () => {
  const { state } = useContext(CartContext);
  const cartItems = selectCartItems(state);
  const total = selectCartTotal(state);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="text-warning">
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/22 - CVV:123
      </div>
      <StripeCheckout price={total}/>
    </div>
  );
};
export default CheckoutPage;
