import React,{useContext} from "react";
import { auth } from "../../Firebase/Firebase";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import {Context as UserContext} from '../../Context/UserContext';
import {Context as CartContext} from '../../Context/CartContext';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown'
import {selectCartHidden} from '../../Context/CartSelector';
import {selectCurrentUser} from '../../Context/UserSelector'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './HeaderStyles'

const Header = () => {
  const {state}=useContext(UserContext);
  const Cart=useContext(CartContext)
  const currentUser = selectCurrentUser(state)
  const hidden = selectCartHidden(Cart.state)
  return (
    <HeaderContainer>
      <LogoContainer  to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon/>
      </OptionsContainer>
      {
        hidden?null:<CartDropdown/> 
      }
    </HeaderContainer>
  );
};
export default Header;
