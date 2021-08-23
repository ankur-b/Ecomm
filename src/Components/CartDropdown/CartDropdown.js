import React,{useContext} from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import {selectCartItems} from '../../Context/CartSelector';
import {Context as CartContext} from '../../Context/CartContext';

import './CartDropdown.css';

const CartDropdown = ()=>{
    const {state} = useContext(CartContext);
    const cartItems = selectCartItems(state)
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
export default CartDropdown;
