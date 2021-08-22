import React,{useContext} from "react";
import CustomButton from '../CustomButton/CustomButton';
import "./CollectionItem.css";
import {Context as CartContext} from '../../Context/CartContext';
const CollectionItem = ({ item }) => {
  const {name, price, imageUrl} = item
  const {state,addItem} = useContext(CartContext);
  return (
    <div className="collection-item">
      {console.log(state.cartItems)}
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={()=>addItem(item)}>Add to Cart</CustomButton>
    </div>
  );
};
export default CollectionItem