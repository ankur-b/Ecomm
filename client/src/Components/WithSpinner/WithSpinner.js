import React from 'react';
import './WithSpinner.css'
const WithSpinner = WrappedComponent => ({isLoading,...otherProps}) =>{
    return isLoading?(
        <div className="spinerOverlay">
            <div className="spinerContainer">
            </div>
        </div>
    ):(<WrappedComponent {...otherProps} />)
}
export default WithSpinner;