import "./tasks.css";
import { FaTimes, FaEdit } from "react-icons/fa";

const MyTask = ({
  content,
  removeTask,
  toggleReminder,
  openPopup,
  setOpenPopup,
  setidForPopup,
}) => {
  const showpopup = (id) => {
    setOpenPopup(true);
    setidForPopup(id);
  };
  return (
    <div
      className={`Mytask ${content.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(content.id)}
    >
      <h1 style={{ display: "flex", justifyContent: "space-between" }}>
        {content.text}
        <div>
          <FaEdit
            style={{ color: "grey", cursor: "pointer", marginRight: "10px" }}
            onClick={() => showpopup(content.id)}
          />
          <FaTimes
            style={{ color: "crimson", cursor: "pointer" }}
            onClick={() => removeTask(content.id)}
          />
        </div>
      </h1>
      <p>{content.day}</p>
    </div>
  );
};

export default MyTask;
