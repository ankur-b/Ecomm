import React,{useContext} from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import {Context as CartContext} from '../../Context/CartContext';

import './CartDropdown.css';

const CartDropdown = ()=>{
    const {state} = useContext(CartContext);
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    state.cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
export default CartDropdown;
