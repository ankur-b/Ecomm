import CreateDataContext from './CreateDataContext'; 
import {auth,googleProvider,createUserProfileDocument, getCurrentUser} from '../Firebase/Firebase';
const UserReducer = (state, action) => {
  switch (action.type) {
    case 'GOOGLE_SIGN_IN_SUCCESS':
    case 'EMAIL_SIGN_IN_SUCCESS':
      return {...state,currentUser:action.payload,error:null}
    case 'CHECK_USER_SESSION':
      return {...state,currentUser:action.payload,error:null}
    case 'EMAIL_SIGN_IN_FAILURE':
    case 'GOOGLE_SIGN_IN_FAILURE':
      return {...state,error:action.payload}
    case 'SIGNOUT_SUCCESS':
      return {...state,currentUser:null,error:null}
    case 'SIGNOUT_FAILURE':
      return {...state,error:action.payload}
    case "SIGNUP_SUCCESS":
      return {...state,currentUser:action.payload,error:null}
    case "SIGNUP_FAILURE":
      return {...state,error:action.payload}
    default:
      return state;
  }
};

const setCurrentUser = dispatch => (user)=>{
    dispatch({type:'SET_CURRENT_USER',payload:user})
}
const signInWithGoogle = dispatch => async() =>{
    try{
      const {user} = await auth.signInWithPopup(googleProvider);
      const userRef = await createUserProfileDocument(user);
      const userSnapshot = await userRef.get()
      dispatch({type:"GOOGLE_SIGN_IN_SUCCESS",payload:{id:userSnapshot.id,...userSnapshot.data()}})
    }catch(error){
      dispatch({type:"GOOGLE_SIGN_IN_FAILURE",payload:error})
    }
}
const signInWithEmailAndPassword = dispatch => async(email,password)=>{
  try {
    const {user} = await auth.signInWithEmailAndPassword(email, password);
    const userRef = await createUserProfileDocument(user);
    const userSnapshot = await userRef.get()
    dispatch({type:"EMAIL_SIGN_IN_SUCCESS",payload:{id:userSnapshot.id,...userSnapshot.data()}})
  } catch (error) {
    dispatch({type:"EMAIL_SIGN_IN_FAILURE",payload:error});
  }
}
const checkUserSession = dispatch => async()=>{
  try{
    const userAuth = await getCurrentUser();
    if(!userAuth)
      return;
    const userRef = await createUserProfileDocument(userAuth);
    const userSnapshot = await userRef.get()
    dispatch({type:"CHECK_USER_SESSION",payload:{id:userSnapshot.id,...userSnapshot.data()}})
  }catch(error){
    dispatch({type:"EMAIL_SIGN_IN_FAILURE",payload:error})
  }
}
const signout=dispatch=>async()=>{
  try{
    await auth.signOut()
    dispatch({type:"SIGNOUT_SUCCESS"})
  }catch(error){
    dispatch({type:"SIGNOUT_FAILURE",payload:error})
  }
}
const signup = dispatch => async(displayName,email,password)=>{
  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const userRef = await createUserProfileDocument(user, { displayName });
    const userSnapshot = await userRef.get()
    dispatch({type:"SIGNUP_SUCCESS",payload:{id:userSnapshot.id,...userSnapshot.data()}})
  } catch (error) {
    dispatch({type:"SIGNUP_FAILURE",payload:error})  
  }

}
export const {Provider, Context} = CreateDataContext(
  UserReducer,
  {setCurrentUser,signInWithGoogle,signInWithEmailAndPassword,checkUserSession,signout,signup},
  {currentUser: null,error:null},
);