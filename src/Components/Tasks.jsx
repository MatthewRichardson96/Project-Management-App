import { useState } from "react";
import { styled } from "styled-components";

const Buttons = styled.button`
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s;
  &:hover {
    background-color: #2c5282;
  }
`;

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
      <Buttons onClick={handleClick}>{taskName}</Buttons>
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
