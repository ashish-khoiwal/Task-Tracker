import React, { useState } from "react";
import "./login.css";
const Login = ({ checkLogin, setOpenLogin }) => {
  localStorage.getItem("username") !== null
    ? checkLogin(
        localStorage.getItem("username"),
        localStorage.getItem("password")
      )
    : setOpenLogin(true);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const submitBtn = (e) => {
    e.preventDefault();
    if (!username) {
      alert("please enter a name");
      return;
    }
    checkLogin(username, password);
    setusername("");
    setpassword("");
  };
  return (
    <div className='login-container'>
      <h1>Please Log in</h1>
      <form
        className='add-form'
        style={{ width: "50vw", margin: "auto" }}
        onSubmit={submitBtn}
      >
        <div className='form-control'>
          <label>Username</label>
          <input
            type='text'
            placeholder='please enter a username'
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Password</label>
        
          <input
            type='password'
            placeholder='please enter the password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button className='btn btn-block'>Log in</button>
      </form>
    </div>
  );
};

export default Login;
