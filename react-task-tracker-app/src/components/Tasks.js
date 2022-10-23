import { useState } from "react";

const Tasks = () => {
  const [task, settask] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Oct 23rd at 02:30 pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Travel",
      day: "Oct 23rd at 05:30 pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Errands",
      day: "Oct 23rd at 07:30 pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Football match",
      day: "Oct 23rd at 06:00 pm",
      reminder: true,
    },
  ]);
  return (
    <>
      {task.map((task) => (
        <div className="taskCell">
          <h2 className="taskItems" key={task.id}>
            {task.text}
          </h2>
          <h3 className="taskItems">{task.day}</h3>
        </div>
      ))}
    </>
  );
};

export default Tasks;
