import React, { useState, useEffect } from "react";
import "./index.css";
import Dashboard from "./components/DashBoard/Dashboard";
import MyTasks from "./components/Tasks and add task/MyTasks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import AddTask from "./components/Tasks and add task/addTask";
import Error from "./components/Error";
import LogOutBtn from "./components/Home/LogOutBtn";
import Popup from "./components/Tasks and add task/Popup";
import PopupForm from "./components/Tasks and add task/PopupForm";
import RestrictionPage from "./RestrictionPage";
import RegisterUser from "./components/DashBoard/RegisterUser";
import ButtonForRegister from "./components/DashBoard/ButtonForRegister";
import EditUserDetails from "./components/DashBoard/EditUserDetails";
import EditUserPopup from "./components/DashBoard/EditUserPopup";

const App = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(true);
  const [Data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const [idForPopup, setidForPopup] = useState(-1);
  const [popupForRegister, setpopupForRegister] = useState(false);
  const [popupForUserDetails, setpopupForUserDetails] = useState(false);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/profiles");
    const result = await res.json();
    return result;
  };
  useEffect(() => {
    const fetchFromServer = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchFromServer();
  }, []);
  
  const check = (dataItem, username, password) => {
    {
      dataItem.username === username &&
        dataItem.password === password &&
        setOpenLogin(false);

      dataItem.username === username &&
        dataItem.password === password &&
        setProfile(dataItem);

      dataItem.username === username &&
        dataItem.password === password &&
        localStorage.setItem("username", `${username}`);

      dataItem.username === username &&
        dataItem.password === password &&
        localStorage.setItem("password", `${password}`);
    }
  };

  const removeTask = async (id) => {
    const mytasks = profile.tasks;
    const tasks = mytasks.filter((task) => task.id !== id);

    let url = "http://localhost:5000/profiles/" + profile.id;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...profile, tasks }),
    });
    setProfile({ ...profile, tasks });
  };
  const toggleReminder = async (id) => {
    let tasks = profile.tasks;
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );

    let url = "http://localhost:5000/profiles/" + profile.id;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...profile, tasks }),
    });
    setProfile({ ...profile, tasks });
  };

  const submitBtn = (username, password) => {
    {Data.map((item) => check(item, username, password));}
  };

  const toggle = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(!openLogin);
  };
  const EditUserDetailsForm = async (MyObject) => {
    const url = "http://localhost:5000/profiles/" + idForPopup;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...MyObject, id: idForPopup }),
    });
    const result = await fetchData();
    setData(result);
  };
  const checkform = async (MyObject) => {
    const role = MyObject.role ? MyObject.role : "non-admin";

    await fetch("http://localhost:5000/profiles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...MyObject, tasks: [], role }),
    });
    const result = await fetchData();
    setData(result);
  };
  const onAdd = async ({ text, day, reminder }) => {
    let tasks = profile.tasks;
    tasks.push({ text, day, reminder, id: new Date().getTime().toString() });

    let url = "http://localhost:5000/profiles/" + profile.id;
    setProfile({ ...profile, tasks });
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profile),
    });
  };
  const DeleteUser = async (id) => {
    const allprofiles = Data.filter((item) => item.id !== id);
    //console.log(allprofiles);

    let url = "http://localhost:5000/profiles/" + id;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    setData(allprofiles)
  };
  const EditTask = async (MyObject) => {
    const { text, day, idForPopup } = MyObject;
    let tasks = profile.tasks;
    tasks = tasks.map((task) =>
      task.id === idForPopup ? { ...task, text: text, day: day } : task
    );

    let url = "http://localhost:5000/profiles/" + profile.id;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...profile, tasks }),
    });
    setProfile({ ...profile, tasks });
  };

  if (openLogin) {
    return (
      <>
        <Login checkLogin={submitBtn} setOpenLogin={setOpenLogin}/>
        <p className='signup' onClick={toggle}>
          Not Signed up yet?
        </p>
      </>
    );
  }
  if (openSignup) {
    return (
      <>
        <Signup checkform={checkform} />
        <p className='signup' onClick={toggle}>
          Login?
        </p>
      </>
    );
  }

  return (
    <div className='container'>
      <Router>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>My App</h1>
          {!openLogin && !openSignup && (
            <LogOutBtn openLogin={openLogin} setOpenLogin={setOpenLogin} />
          )}
        </div>
        <Navbar profileRole={profile.role} />
        <Switch>
          <Route exact path='/'>
            <Home Myprofile={profile} />
          </Route>
          {profile.role === "admin" && (
            <Route path='/dashboard'>
              <ButtonForRegister setpopupForRegister={setpopupForRegister}>
                <RegisterUser
                  OnRegister={checkform}
                  popupForRegister={popupForRegister}
                  setpopupForRegister={setpopupForRegister}
                />
              </ButtonForRegister>
              <EditUserPopup popupForUserDetails={popupForUserDetails}>
                <EditUserDetails
                  setpopupForUserDetails={setpopupForUserDetails}
                  Data={Data}
                  OnRegister={EditUserDetailsForm}
                  idForPopup={idForPopup}
                  popupForUserDetails={popupForUserDetails}
                />
              </EditUserPopup>
              <Dashboard
                Myprofile={profile}
                Data={Data}
                DeleteUser={DeleteUser}
                setidForPopup={setidForPopup}
                setpopupForUserDetails={setpopupForUserDetails}
              />
            </Route>
          )}
          {profile.role === "non-admin" && (
            <Route path='/dashboard'>
              <RestrictionPage />
            </Route>
          )}
          <Route path='/tasks'>
            <AddTask onAdd={onAdd} />
            <MyTasks
              removeTask={removeTask}
              Myprofile={profile}
              toggleReminder={toggleReminder}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              setidForPopup={setidForPopup}
            />
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
              <PopupForm
                setOpenPopup={setOpenPopup}
                OnSubmit={EditTask}
                data={profile}
                idForPopup={idForPopup}
              />
            </Popup>
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
