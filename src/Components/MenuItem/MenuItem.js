import React from "react";
import './MenuItem.css'
const MenuItem = (props) => {
  return (
    <div className={`${props.size} menu-item`}>
      <div className="background-image" style={{
        backgroundImage:`url(${props.imageUrl})`
    }}/>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <h4 className="subtitle">SHOP NOW</h4>
      </div>
    </div>
  );
};
export default MenuItem;
