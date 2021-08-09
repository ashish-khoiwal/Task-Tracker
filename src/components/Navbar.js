import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ profileRole }) => {
  return (
    <nav className='navbar'>
      <div style={{ margin: "auto" }}>
        <Link
          style={{ textDecoration: "none" }}
          className='nav-link active'
          to='/'
        >
          Home
        </Link>
      </div>
      {profileRole === "admin" && (
        <div style={{ margin: "auto" }}>
          <Link
            style={{ textDecoration: "none" }}
            className='nav-link'
            to='/dashboard'
          >
            Dashboard
          </Link>
        </div>
      )}
      <div style={{ margin: "auto" }}>
        <Link
          style={{ textDecoration: "none" }}
          className='nav-link'
          to='/tasks'
        >
          Mytasks
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
