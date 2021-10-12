/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shop/Shop";
import SignInAndSignUpPage from "./Pages/SignInAndSignUpPage/SignInAndSignUpPage";
import CheckoutPage from "./Pages/Checkout/Checkout";
import Header from "./Components/Header/Header";
import { Context as UserContext } from "./Context/UserContext";
import { selectCurrentUser } from "./Context/UserSelector";
import "./App.css";
const App = () => {
	const { state,checkUserSession } = useContext(UserContext);
	const currentUser = selectCurrentUser(state);
	let unsubscribeFromAuth = null;
	useEffect(() => {
		checkUserSession()
	}, [unsubscribeFromAuth]);
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={Shoppage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
					}
				/>
				<Route exact path="/checkout" component={CheckoutPage} />
			</Switch>
		</div>
	);
};

export default App;
