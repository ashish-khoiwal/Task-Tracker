import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import "../Signup/Signup.css";
const RegisterUser = ({
  setpopupForRegister,
  popupForRegister,
  OnRegister,
}) => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("non-admin");

  const submitBtn = (e) => {
    e.preventDefault();
    if (!email) {
      alert("email cannot be empty");
      return;
    }
    if (!username) {
      alert("username cannot be empty");
      return;
    }
    if (!password) {
      alert("password cannot be empty");
      return;
    }
    if (!name) {
      alert("name cannot be empty");
      return;
    }

    OnRegister({ email, name, username, password, role });
    setpopupForRegister(false);
    setname('')
    setpassword('')
    setemail('')
    setusername('')
  };

  return (
    <Dialog open={popupForRegister}>
      <div
        className='login-container'
        style={{ width: "40vw", margin: "auto", Padding: "10px" }}
      >
        <h1>Register a User</h1>

        <form className='add-form' onSubmit={submitBtn}>
          <div className='form-control'>
            <label>Email</label>
            <input
              type='email'
              placeholder='please enter a email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>name</label>
            <input
              type='name'
              placeholder='please enter a name'
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>username</label>
            <input
              type='username'
              placeholder='please enter a username'
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>password</label>
            <input
              type='password'
              placeholder='please enter a password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>role</label>
            <input
              type='role'
              placeholder='please enter a role'
              value={role}
              onChange={(e) => setrole(e.target.value)}
            />
          </div>
          <button className='btn btn-block' type='Submit'>
            Register
          </button>
        </form>
       
      </div>
    </Dialog>
  );
};
export default RegisterUser;
