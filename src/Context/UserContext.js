import CreateDataContext from './CreateDataContext'; 
const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const setCurrentUser = dispatch => (user)=>{
    console.log("callback",user)
    dispatch({type:'SET_CURRENT_USER',payload:user})
}
export const {Provider, Context} = CreateDataContext(
  UserReducer,
  {setCurrentUser},
  {currentUser: null},
);