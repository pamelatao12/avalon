import React, { useContext, useState } from "react";
import { FirebaseContext } from '../../firebase';
import "./index.css";

const SignedOutPage = (props) => {
  const [input, setInput] = useState({});
  const firebase = useContext(FirebaseContext);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  const handleSubmit = (e) => {
    const { email, password } = input;
    
    firebase.doSignInWithEmailAndPassword(email, password).catch(function(error) {
      alert(error);
    });

    e.preventDefault();
  }

  return (
    <div className="sign-in">
      <form className="form" onSubmit={handleSubmit}>
        <div>Sign In</div>
        <div className="email">
          <label>Email:</label>
          <input type="text" name="email" onChange={handleInputChange} />
        </div>

        <div className="password">
          <label>Password:</label>
          <input type="text" name="password" onChange={handleInputChange} />
        </div>
  
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignedOutPage;