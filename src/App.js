/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth,createUserProfileDocument } from "./Firebase/Firebase";
import "./App.css";
const App = () => {
  const [currentUser,setCurrentUser] = useState(null)
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
          console.log(currentUser)
        })
      }
      setCurrentUser(userAuth)
      console.log(currentUser)
    })
    return ()=>{
      unsubscribeFromAuth()
    }
  }, [unsubscribeFromAuth]);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
