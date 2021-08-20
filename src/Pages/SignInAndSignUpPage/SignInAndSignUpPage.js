import React from 'react';
import Signin from '../../Components/Signin/Signin'
import Signup from '../../Components/Signup/Signup'
import './SignInAndSignUpPage.css';

const SignInAndSignUp = ()=>{
    return(
        <div className="sign-in-and-sign-up">
            <Signin/>
            <Signup/>
        </div>
    )
}
export default SignInAndSignUp