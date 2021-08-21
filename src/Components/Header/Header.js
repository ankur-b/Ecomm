import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import {Context as UserContext} from '../../Context/UserContext';
import {Context as CartContext} from '../../Context/CartContext';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown'
import "./Header.css";

const Header = () => {
  const {state}=useContext(UserContext);
  const Cart=useContext(CartContext)
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="lbutton {
      margin-top: auto;
    }ogo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {state.currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      {
        Cart.state.hidden?null:<CartDropdown/> 
      }
    </div>
  );
};
export default Header;
