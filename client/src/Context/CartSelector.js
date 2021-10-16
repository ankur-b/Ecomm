import { createSelector } from "reselect";

const selectCart = (state) => state.cartItems;
const selectHidden = (state) => state.hidden;

export const selectCartItems = createSelector(
  [selectCart],
  (cartItems) => cartItems
);
export const selectCartHidden = createSelector(
  [selectHidden],
  (hidden) => hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
