import {createSelector} from 'reselect';

const selectCart = state => state.cartItems

export const selectCartItems = createSelector(
    [selectCart],
    cartItems=>cartItems
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0)
)