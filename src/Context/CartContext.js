import CreateDataContext from './CreateDataContext'; 
import {addItemToCart} from './CartUtils'
const CartReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {...state,hidden:!state.hidden};
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      }
    default:
      return state;
  }
};

const toggleCartHidden = dispatch => ()=>{
    dispatch({type:'TOGGLE_CART_HIDDEN'})
}
const addItem = dispatch => (item) =>{
  dispatch({type:'ADD_ITEM',payload:item})
}
export const {Provider, Context} = CreateDataContext(
  CartReducer,
  {toggleCartHidden,addItem},
  {hidden: true,cartItems:[]},
);