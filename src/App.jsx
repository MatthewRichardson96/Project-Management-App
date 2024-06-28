import Dashboard from "./Components/Molecules/Dashboard";
import Tasks from "./Components/Molecules/Tasks";
import Headers from "./Components/Atoms/Header";
import InputResult from "./Components/Atoms/Input";
import TextArea from "./Components/Atoms/TextArea";
import Button from "./Components/Atoms/Button";
import { useRef, useState } from "react";

let tasks = [];
let selectedTask;

export default function App() {
  const projectName = useRef();
  const projectDescription = useRef();

  const [isClicked, setIsClicked] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [taskCreated, setTaskCreated] = useState(false);

  const [taskName, setTaskName] = useState();
  const [taskDescription, setTaskDescription] = useState();
  const [taskDeleted, setTaskDeleted] = useState();
  const [task, setTask] = useState();

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

    setTaskCreated(true);
    setIsClicked(false);
    setTaskDeleted(true);
  }

  function handleDeleteClick(taskName) {
    console.log("pre tasks", tasks);

    const newTaskList = tasks.filter((item) => {
      item.taskName !== taskName;
    });
    tasks = newTaskList;
    console.log("post tasks", tasks);
    setTaskDeleted(false);
  }

  function handleTaskSelection(task) {
    console.log("task is: ", task);
    setProjectSelected((func) => {
      return !func;
    });
    setTask(task);
  }

  function handleEditClick() {
    console.log("value is: ", task.name);
    setIsEditable(true);
  }

  function handleEditUpdateClick() {
    console.log("value is: ", projectName.current.value);

    setTaskName(projectName.current.value);
    setTaskDescription(projectDescription.current.value);

    const updatedTasks = tasks.map((t) => {
      if (t.name === task.name) {
        return {
          name: projectName.current.value,
          description: projectDescription.current.value,
        };
      }
      return t;
    });

    tasks = updatedTasks;
    setIsEditable(false);
  }

  return (
    <>
      <div className="w-full p-4 bg-white shadow-md rounded-md flex">
        <div className="w-1/4 p-4 bg-white shadow-md rounded-md">
          <Headers headerText="Your Projects" />
          <Button onClick={handleOpenFormClick} text="Create new project" />

          {
            (selectedTask =
              taskCreated &&
              tasks.map((task) => (
                <ul key={task.name}>
                  <Tasks
                    taskName={task.name}
                    taskDescription={task.description}
                    onClick={() => handleTaskSelection(task)}
                    isClicked={projectSelected}
                  />
                </ul>
              )))
          }

          {isClicked ? (
            <>
              <InputResult ref={projectName} type="text" label="Your Name" />
              <TextArea ref={projectDescription} label="Your Description" />
              <div className="flex items-center justify-between">
                <Button onClick={handleFormInputClick} text="Add Project" />
              </div>
            </>
          ) : isEditable ? (
            <>
              <InputResult
                ref={projectName}
                type="text"
                label="Your Name"
                isEditable={isEditable}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <TextArea
                ref={projectDescription}
                label="Your Description"
                isEditable={isEditable}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <div className="flex items-center justify-between">
                <Button onClick={handleEditUpdateClick} text="Update Project" />
              </div>
            </>
          ) : undefined}
        </div>
        <div className="w-1/2 p-4">
          {projectSelected ? (
            <>
              <Dashboard tasks={task} selectedTask={projectSelected} />
              <Button onClick={handleEditClick} text="Edit" />

              <Button
                onClick={handleDeleteClick}
                task={projectName}
                text="Delete"
              />
            </>
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </>
  );
}
