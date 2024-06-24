import Dashboard from "./Dashboard";
import { useState } from "react";

export default function Tasks({ taskName, taskDescription }) {
  const [isClicked, setIsClicked] = useState();
  const [task, setTask] = useState();

  function handleClick() {
    setIsClicked((func) => {
      return !func;
    });
    setTask(taskName);
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 bg-gray-200 rounded-md w-full"
      >
        {taskName}
      </button>
      <div className="dashboard-container">
        {
          isClicked ? (
            <p>
              {taskName}: {taskDescription}
            </p>
          ) : undefined // This is your default dashboard text
        }
      </div>
    </>
  );
}
