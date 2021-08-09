import React, { useState } from "react";
import "./Signup.css";
import PropTypes from "prop-types";

const Signup = ({ checkform }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submitBtn = (e) => {
    e.preventDefault();
    if (!username) {
      alert("please enter a username");
      return;
    }
    if (!name) {
      alert("please enter a name");
      return;
    }
    if (!email) {
      alert("please enter a email");
      return;
    }
    if (!password) {
      alert("please enter a password");
      return;
    }
    checkform({ email, name, username, password });
    setusername("");
    setpassword("");
    setName("");
    setEmail("");
  };

  return (
    <div className='login-container'>
      <h1>Please Signup</h1>
      <form
        className='add-form'
        style={{ width: "50vw", margin: "auto" }}
        onSubmit={submitBtn}
      >
        <div className='form-control'>
          <label>Email</label>
          <input
            type='text'
            placeholder='please enter a email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Name</label>
          <input
            type='text'
            placeholder='please enter a name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button className='btn btn-block'>Signup</button>
      </form>
    </div>
  );
};
Signup.propTypes = {
  checkform: PropTypes.func.isRequired,
};
export default Signup;
