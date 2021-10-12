import CreateDataContext from "./CreateDataContext";
import { addItemToCart,removeItemFromCart } from "./CartUtils";
const CartReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return { ...state, hidden: !state.hidden };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems:removeItemFromCart(state.cartItems,action.payload)
      }
    case "CLEAR_CART":
      return {
        ...state,cartItems:[]
      }
    default:
      return state;
  }
};

const toggleCartHidden = (dispatch) => () => {
  dispatch({ type: "TOGGLE_CART_HIDDEN" });
};
const addItem = (dispatch) => (item) => {
  dispatch({ type: "ADD_ITEM", payload: item });
};
const clearItemFromCart = (dispatch) => (item) => {
  dispatch({type:"CLEAR_ITEM_FROM_CART",payload:item})
};
const removeItem = (dispatch) =>(item)=>{
  dispatch({type:"REMOVE_ITEM",payload:item})
}
const clearCart = (dispatch) =>()=>{
  dispatch({type:"CLEAR_CART"})
}
export const { Provider, Context } = CreateDataContext(
  CartReducer,
  { toggleCartHidden, addItem, clearItemFromCart ,removeItem,clearCart},
  { hidden: true, cartItems: [] }
);
