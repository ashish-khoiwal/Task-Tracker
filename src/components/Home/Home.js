const Home = ({ Myprofile }) => {
  const name = Myprofile.name;
  const role = Myprofile.role;
  return (
    <div style={{ textAlign: "center", marginTop: "25px" }}>
      <h1>Hello {name}!</h1>
      <h3>Role: {role}</h3>
      <p>Welcome to this app. To add your task click on Mytasks.</p>
    </div>
  );
};

export default Home;
