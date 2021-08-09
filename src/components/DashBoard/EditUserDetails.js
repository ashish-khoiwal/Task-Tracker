import React, { useState } from "react";
import "../Signup/Signup.css";
const EditUserDetails = ({
  Data,
  setpopupForUserDetails,
  OnRegister,
  idForPopup,
}) => {
  let dataElement = Data.filter((item) => item.id === idForPopup);
  dataElement = dataElement[0]
  //console.log(dataElement);
  const [email, setemail] = useState(dataElement.email);
  const [name, setname] = useState(dataElement.name);
  const [username, setusername] = useState(dataElement.username);
  const [password, setpassword] = useState(dataElement.password);
  const [role, setrole] = useState(dataElement.role);
  const tasks = dataElement.tasks;
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
    if (!role) {
      alert("role cannot be empty");
      return;
    }
    if (!name) {
      alert("name cannot be empty");
      return;
    }

    OnRegister({ email, name, username, password, role, tasks });
    setpopupForUserDetails(false);
    setname("");
    setrole("");
    setemail("");
    setusername("");
  };

  return (
    <div
      className='login-container'
      style={{ width: "40vw", margin: "auto", Padding: "10px" }}
    >
      <h1>Edit a User</h1>
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
          Change
        </button>
      </form>
    </div>
  );
};
export default EditUserDetails;
