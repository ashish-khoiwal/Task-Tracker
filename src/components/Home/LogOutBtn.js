const LogOutBtn = ({ openLogin, setOpenLogin }) => {
  const logOutfun = () => {
    localStorage.setItem("username", null);
    localStorage.setItem("password", null);
    setOpenLogin(!openLogin);
  };
  return (
    <button className='btn' onClick={() => logOutfun()}>
      Log out
    </button>
  );
};

export default LogOutBtn;
