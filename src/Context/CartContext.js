import CreateDataContext from './CreateDataContext'; 
const CartReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {...state,hidden:!state.hidden};
    default:
      return state;
  }
};

const toggleCartHidden = dispatch => ()=>{
    dispatch({type:'TOGGLE_CART_HIDDEN'})
}
export const {Provider, Context} = CreateDataContext(
  CartReducer,
  {toggleCartHidden},
  {hidden: true},
);