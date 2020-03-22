import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';
import "./index.css";

const SignedOutPage = (props) => {
  const [input, setInput] = useState({});
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = input;

    try {
      await firebase.doSignInWithEmailAndPassword(email, password);
      history.push('/play');
    } catch(error) {
      alert(error);
    }
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