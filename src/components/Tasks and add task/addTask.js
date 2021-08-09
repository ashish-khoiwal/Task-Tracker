import { useState } from "react";
import "./tasks.css";
const AddTask = ({ onAdd }) => {
  const [text, settask] = useState("");
  const [day, setdate] = useState("");
  const [reminder, setreminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a task");
      return;
    }
    onAdd({ text, day, reminder });
    settask("");
    setdate("");
    setreminder(false);
  };

  return (
    <form className='add-form addTaskForm' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='please enter a task'
          value={text}
          onChange={(e) => settask(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input
          type='text'
          placeholder='please enter the time to complete'
          value={day}
          onChange={(e) => setdate(e.target.value)}
        />
      </div>
      <div className='form-control-check form-control'>
        <label>Reminder</label>
        <input
          type='checkbox'
          value={reminder}
          checked={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        />
      </div>
      <button className='btn btn-block'>Submit</button>
    </form>
  );
};

export default AddTask;
