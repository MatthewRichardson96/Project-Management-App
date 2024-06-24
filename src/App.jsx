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
    console.log("projectName is: ", projectName.current.value);
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
          <Button
            // className="bg-blue-300 rounded h-10 text-center content-center"
            onClick={handleOpenFormClick}
            text="Create new project"
          />

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
                <Button onClick={handleFormInputClick} text="Add Project" />
              </div>
            </>
          )}
        </div>
        <div className="w-1/2 p-4">
          <Dashboard tasks={tasks} />
        </div>
      </div>
    </>
  );
}
