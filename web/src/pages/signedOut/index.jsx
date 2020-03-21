import React, { useState } from "react";
import "./index.css";

// TODO: Lance.
// 1) Add 2 inputs (email, password) and 1 button to log in.
// 2) Authenticate with Firebase to see if user exists.
// 3) If it exists, redirect to /play
// 4) if it does not exist, show error.

const SignedOutPage = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  return (
    <div className="sign-in">
      <form>
        <div>Signin In</div>
        <div className="username">
          <label>Username:</label>
          <input type="text" name="username" onChange={handleInputChange} />
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