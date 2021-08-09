import React from 'react'

const ButtonForRegister = ({ setpopupForRegister,children }) => {
  return (
    <div style={{marginLeft:'75vw', marginTop:'.8rem'}}>
      <button
        onClick={() => setpopupForRegister(true)}
        className='btn btn-primary'
      >
        Register a new user
        {children}
      </button>
    </div>
  );
};

export default ButtonForRegister
