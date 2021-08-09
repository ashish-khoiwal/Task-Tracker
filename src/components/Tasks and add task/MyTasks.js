import Task from "./MyTask";
const MyTasks = ({
  Myprofile,
  removeTask,
  toggleReminder,
  editTask,
  openPopup,
  setOpenPopup,
  setidForPopup,
}) => {
  const length = Myprofile.tasks?.length;
  if (length) {
    const tasks = Myprofile.tasks;
    return (
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            content={task}
            removeTask={removeTask}
            toggleReminder={toggleReminder}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            setidForPopup={setidForPopup}
          />
        ))}
      </div>
    );
  } else {
    return <h1 style={{ textAlign: "center" }}>No tasks to show</h1>;
  }
};

export default MyTasks;
