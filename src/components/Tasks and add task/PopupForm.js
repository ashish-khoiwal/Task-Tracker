import React, { useState } from "react";
import "../Signup/Signup.css";
const PopupForm = ({
  setOpenPopup,
  OnSubmit,
  idForPopup,
  data,
}) => {
  const tasks = data.tasks;
  let task = { ...tasks.filter((task) => task.id === idForPopup) };
  // console.log(task.id,task.text,task.day);
  task = task[0];
  const [text, settext] = useState(task.text);
  const [day, setday] = useState(task.day);

  const submitBtn = (e) => {
    e.preventDefault();
    if (!text) {
      alert("cannot be empty");
      return;
    }
    OnSubmit({ idForPopup, text, day });
    setOpenPopup(false);
  };

  return (
    <div
      className='login-container'
      style={{ width: "40vw", margin: "auto", Padding: "20px" }}
    >
      <h1>
        Please Edit your Task
        
      </h1>
      <form className='add-form' onSubmit={submitBtn}>
        <div className='form-control'>
          <label>text</label>
          <input
            type='task'
            placeholder='please enter a task'
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>day</label>
          <input
            type='text'
            placeholder='please enter a day'
            value={day}
            onChange={(e) => setday(e.target.value)}
          />
        </div>
        <button className='btn btn-block'>Change</button>
      </form>
    </div>
  );
};
export default PopupForm;
