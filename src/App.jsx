import Dashboard from "./Components/Dashboard";
import Tasks from "./Components/Tasks";
import Headers from "./Components/Header";
import InputResult from "./Components/Input";
import TextArea from "./Components/TextArea";
import Button from "./Components/Button";
import { useRef, useState } from "react";

let tasks = [];
let selectedTask;

export default function App() {
  const projectName = useRef();
  const projectDescription = useRef();

  const [isClicked, setIsClicked] = useState(false);
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
    const updatedTask = {
      ...task,
      name: "Updated Task Name",
      description: "Updated Task Description",
    };
    // Update the tasks array with the updated task
    const updatedTasks = tasks.map((t) =>
      t.name === task.name ? updatedTask : t
    );
    tasks = updatedTasks;
    // Set the taskCreated state to false to hide the form
    setTaskCreated(false);
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
