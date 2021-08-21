/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useContext } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth,createUserProfileDocument } from "./Firebase/Firebase";
import {Context as UserContext} from './Context/UserContext'
import "./App.css";
const App = () => {
  const {state,setCurrentUser} = useContext(UserContext)
  let unsubscribeFromAuth = null
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        setCurrentUser(userAuth)
      }
    })
    return ()=>{
      unsubscribeFromAuth()
    }
  }, [unsubscribeFromAuth]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signin" render={()=>state.currentUser?(<Redirect to="/"/>):(<SignInAndSignUpPage/> )} />
      </Switch>
    </div>
  );
};

export default App;
