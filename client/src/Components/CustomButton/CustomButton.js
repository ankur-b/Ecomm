  
import React from 'react';
import './CustomButton.css'
const CustomButton =({children,isGoogleSignin,inverted ,...otherProps})=>{
    return(
        <button className={`${inverted?"inverted":""} ${isGoogleSignin?"google-sign-in":""} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton;