import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../Firebase/Firebase";
import "./Signin.css";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="sign-in" onSubmit={handleSubmit}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignin>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default Signin;
