import Dashboard from "./Components/Dashboard";
import Tasks from "./Components/Tasks";
import Headers from "./Components/Header";
import InputResult from "./Components/Input";
import TextArea from "./Components/TextArea";
import Button from "./Components/Button";

import { useRef, useState } from "react";
let tasks = [];
export default function App() {
  const projectName = useRef();
  const projectDescription = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [taskCreated, setTaskCreated] = useState(false);
  const [taskName, setTaskName] = useState();
  const [taskDescription, setTaskDescription] = useState();

  function handleOpenFormClick() {
    setTaskCreated(false);
    return setIsClicked(true);
  }

  function handleFormInputClick() {
    setTaskDescription(projectDescription.current.value);
    setTaskName(projectName.current.value);
    tasks.push({
      name: projectName.current.value,
      description: projectDescription.current.value,
    });
    console.log("task is: ", tasks);
    setTaskCreated(true);
    setIsClicked(false);
  }

  return (
    <>
      <div className="w-full p-4 bg-white shadow-md rounded-md flex">
        <div className="w-1/4 p-4 bg-white shadow-md rounded-md">
          <Headers headerText="Your Projects" />
          <button
            className="rounded-lg bg-slate-600"
            onClick={handleOpenFormClick}
          >
            Create new project
          </button>

          {taskCreated &&
            tasks.map((task) => (
              <ul key={task.name}>
                <Tasks
                  taskName={task.name}
                  taskDescription={task.description}
                />
              </ul>
            ))}

          {isClicked && (
            <>
              <InputResult ref={projectName} type="text" label="Your Name" />
              <TextArea ref={projectDescription} label="Your Description" />
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleFormInputClick}
                >
                  Add Project
                </button>
              </div>
            </>
          )}
        </div>
        <div className="dashboard-container">
          <Dashboard tasks={tasks} className="w-1/2" />
        </div>
      </div>
    </>
  );
}
