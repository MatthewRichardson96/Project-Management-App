import { createContext, useState, useRef } from "react";

export const DashboardContext = createContext({
  tasks: [],
  selectedTask: "",
  handleOpenFormClick: () => {},
  handleFormInputClick: () => {},
  handleDeleteClick: () => {},
  handleTaskSelection: () => {},
  handleEditClick: () => {},
  handleEditUpdateClick: () => {},
});

export default function DashboardContextProvider({ children }) {
  let tasks = [];

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
    <DashboardContext.Provider
      value={{
        handleOpenFormClick,
        handleFormInputClick,
        handleDeleteClick,
        handleTaskSelection,
        handleEditClick,
        handleEditUpdateClick,
        tasks,
        selectedTask,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
